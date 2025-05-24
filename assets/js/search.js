let searchInput = document.querySelector('#searchInput'),
    searchResult = document.querySelector('#searchResult'),
    searchModal2 = document.querySelector('.searchModal');

let dataJSON;



const lang = window.location.pathname.split('/')[1];
if(lang === 'hr') {
    searchInput.placeholder = "Upiši traženi pojam...";
} else {
    searchInput.placeholder = "Search...";
}


// Kada korisnik pritisne '/', fokusira input
window.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault();
        searchInput.focus();
    }
});

// Kada korisnik pritisne 'ESC', zatvara se search modal
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && searchModal2.classList.contains("active")) {
        searchInput.value = '';
        searchResult.innerHTML = '';
        searchModal2.classList.toggle('active');
        searchInput.blur();
    }

    // CTRL+SHIFT+F otvara modal
    if (event.ctrlKey && event.shiftKey && event.key == "F" && !searchModal2.classList.contains("active")) {
        event.preventDefault();
        searchModal2.classList.toggle('active');

        // Fokus nakon prikaza moda
        setTimeout(() => {
            searchInput.focus();
        }, 500); // 50ms je dovoljno
    }
    });

    window.addEventListener('DOMContentLoaded', () => {
    searchInput.focus();
    });


// Dohvaća index.json (ovisno o jeziku)
const getPostsJSON = async () => {
    let lang = window.location.pathname.split('/')[1];
    if (!['en', 'hr'].includes(lang)) lang = 'en'; // fallback
    let response = await fetch(`/${lang}/index.json`);
    let data = await response.json();
    return data;
};

// Highlight funkcija
const highlight = (text, keyword) => {
    if (!text || !keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
};

// Filtrira rezultate
const filterPostsJSON = (query, element) => {
    query = query.trim().toLowerCase();
    if (!query) {
        element.innerHTML = '';
        return;
    }

    let result = dataJSON.filter(item => {
        const title = item.title?.toLowerCase() || '';
        const summary = item.summary?.toLowerCase() || '';
        return title.includes(query) || summary.includes(query);
    });

    let itemsWithElement = result.map(item => {
        const highlightedTitle = highlight(item.title, query);
        const highlightedSummary = highlight(item.summary, query);
        const categories = item.categories || '';
        
        return `
            <li class="search-result-item">
                <h2><a href="${item.permalink}">${highlightedTitle}</a></h2>
                <em>${categories}</em>
                <p>${highlightedSummary}</p>
            </li>
        `;
    });

    if (itemsWithElement.length > 0) {
        itemsWithElement.unshift(`<p class="">Click 'ESC' to cancel search.</p>`);
    } else {
        itemsWithElement.push(`<p>No results found.</p>`);
    }

    element.style.display = 'block';
    element.innerHTML = itemsWithElement.join('');
};

// Dodavanje event listenera
const searchInputAction = (event, callback) => {
    searchInput.addEventListener(event, callback);
};

// Prilikom fokusa dohvaća json podatke
searchInputAction('focus', () => {
    getPostsJSON().then(data => dataJSON = data);
});

// Kod unosa filtrira i prikazuje rezultate
searchInputAction('keyup', (event) => {
    filterPostsJSON(event.target.value, searchResult);
});
