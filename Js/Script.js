let navbar = document.querySelector('.navbar');

document.querySelector('.#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
};


let cartItem = document.querySelector('.card-ites-container');
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('.active');
    cartItem.classList.remove('.active');

document.querySelector('.#cart-item').onclick = () =>{
    cartItem.classList.toggle('active');
};

let searchForm = document.querySelector('.search-form');

document.querySelector('.#cart-item').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('.active');
};
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('.active');
    cartItem.classList.remove('.active');
}



