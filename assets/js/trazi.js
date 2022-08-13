const btnOpenSearch = document.querySelector('#btnOpenSearch');
const searchModal = document.querySelector('.searchModal');
//const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
//const header = document.querySelector('.header.container');

const svgClose = document.querySelector('.svgClose');

// if(!svgClose == null){
	svgClose.addEventListener('click', () => {
		// console.log("svgClose not null");
		// svgClose.classList.remove('active');
		btnOpenSearch.classList.toggle('active');
		searchModal.classList.toggle('active');
	});
//}else{
//	console.log("svgClose null");
//}

btnOpenSearch.addEventListener('click', () => {
	btnOpenSearch.classList.toggle('active');
	searchModal.classList.toggle('active');
});

//document.addEventListener('scroll', () => {
	//	var scroll_position = window.scrollY;
	//	if (scroll_position > 250) {
		//	//	header.style.backgroundColor = '#29323c';
		//	} else {
			//	//	header.style.backgroundColor = 'transparent';
		//	}
//});

// menu_item.forEach((item) => {
// 	item.addEventListener('click', () => {

// 		btnOpenSearch.classList.toggle('active');
// 		searchModal.classList.toggle('active');

// 	});
// });
