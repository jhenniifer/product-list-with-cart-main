const addToCartBtn = document.querySelectorAll('.add_to_cart');
const addOrMinusBtn = document.querySelectorAll('.cart__selected');
let cartNum = document.querySelectorAll('.cart__num');
const cartMinus = document.querySelector('.cart__minus');
const cartAdd = document.querySelector('.cart__add');
let cartCount = 0;

addToCart();

function addToCart(){

addToCartBtn.forEach((cartBtn) => {
cartBtn.addEventListener('click',() => {
    cartCount++;
    cartNum.forEach((num) => {
        num.innerText = cartCount;
        console.log(cartNum)
    })

cartBtn.style.display = 'none';
addOrMinusBtn.forEach(element => {
    
    if(element !== cartBtn.nextElementSibling){
        element.display = 'none';
    } else{
        element.style.display = 'flex';
    }
});
})
})
}

