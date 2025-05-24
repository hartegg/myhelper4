let searchInput = document.querySelector('#searchInput'),
    searchResult = document.querySelector('#searchResult'),
    searchModal2 = document.querySelector('.searchModal');

let dataJSON;

// add keydown listener, when user hit '/', it will focus on search input (Desktop)
window.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault()
        searchInput.focus()
    }
})
// add keydown listener, when user hit 'ESC', it will close search result and unfocus search input.
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && searchModal2.classList.contains("active")) 
    {
        searchInput.value = '';
        searchResult.innerHTML = '';
        searchModal2.classList.toggle('active');
        searchInput.blur()
    }

    // open search on CTRL+SHIFT+F
     if (event.ctrlKey && event.shiftKey && event.key == "F" && !searchModal2.classList.contains("active")) {
        event.preventDefault();
        searchModal2.classList.toggle('active');
     }
})

/**
 * Get the posts lists in json format.
 */
const getPostsJSON = async () => {
    /* let response = await fetch('/index.json')  original for one lang*/

let lang = window.location.pathname.split('/')[1];
if (!['en', 'hr'].includes(lang)) lang = 'en'; // fallback na engleski
let response = await fetch(`/${lang}/index.json`);



    let data = await response.json()
    return data
}
/**
 * @param query, element.
 * query: the keyword that user given.
 * element: target element to show the result.
 */
const filterPostsJSON = (query, element) => {
    let result, itemsWithElement;
    query = new RegExp(query, 'ig')
    result = dataJSON.filter(item => query.test(item.title))
     console.log(result);
    itemsWithElement = result.map(item => (
       `<li class="search-result-item">
            <h2><a href="${item.permalink}">${item.title}</a></h2>
            <em>${item.categories} </em>
            <p>${item.summary}</p>
        </li>`
    ))
    element.style.display = 'block';
    itemsWithElement.unshift(`<p class="">Click 'ESC' for cancel search.</p>`)
    element.innerHTML = itemsWithElement.join('');
}
/**
 * searchInputAction take two arguments, event and callback  */ 
const searchInputAction = (event, callback) => {
    searchInput.addEventListener(event, callback)
}
/**
 * When user focus on the search input, function getPostsJSON called. */
searchInputAction('focus', () => getPostsJSON().then(data => dataJSON = data))
/**
 * filtering result with the query that user given on search input. */
searchInputAction('keyup', (event) => filterPostsJSON(event.target.value, searchResult))
