let addToCartBtn = document.querySelectorAll('.add_to_cart');
const addOrSubBtn = document.querySelectorAll('.cart__selected');
let totalCartQuant  = document.querySelectorAll('.cart__num');
const cartMinus = document.querySelectorAll('.cart__minus--btn');
const cartAdd = document.querySelectorAll('.cart__add--btn');
let productQuant = document.querySelectorAll('.cart__quantity');
const defaultCartSection = document.querySelector('.cart__initial');
const orderedCartSection = document.querySelector('.cart__ordered');
const addedQuantity = document.querySelector('.addedd');
let subTotal = document.querySelector('.total');
let total = document.querySelector('.total__span');
const price = document.querySelector('.price');

let cartCount = 0;
let subTotalCount = 0;

cartAdd.forEach(addbtn => {
    addbtn.addEventListener('click', ()=>{   
        increase(addbtn);
       })
})

cartMinus.forEach(minusbtn => {
    minusbtn.addEventListener('click', ()=>{   
        decrease(minusbtn);
        changeBtn(minusbtn);
       })
})

document.addEventListener('DOMContentLoaded', ()=>{
    addToCartBtn.forEach(cartBtn => {
        cartBtn.addEventListener('click', ()=>{
            addOne();
            hideAddToCartBtn(cartBtn);
            displayInCart();
        })
    });
})

//function to handle the calculations
function calculate(){
    subTotalCount = parseFloat(cartCount)  * parseFloat(price.innerText) ;
    subTotal.innerText = subTotalCount.toFixed(2);
    total.innerText = subTotalCount.toFixed(2);
    addedQuantity.innerText = cartCount;
}



//function for first global increment
function addOne(){
    cartCount++;
    totalCartQuant.forEach((num) => {
        num.innerText = cartCount;      
    })
};

//function to hide the original Add to cart button and display the creasement buuton
function hideAddToCartBtn(btn){
    btn.style.display = 'none';
 addOrSubBtn.forEach(element => {
  if(element !== btn.nextElementSibling){ 
    element.display = 'none';
     } 
if (element === btn.nextElementSibling){
        element.style.display = 'flex';
    }
}
);
};

//function to add product to cart section
function displayInCart(){
    defaultCartSection.style.display = 'none';
    orderedCartSection.style.display = 'block';
    calculate();
}
    
//function to handle the quantity increment and decrement
function increase(btn){
    let cartQuantEl = btn.parentElement.querySelector('.cart__quantity')
    let cartQuant = parseInt(cartQuantEl.innerText);
    // console.log(typeof cartQuant)
    cartQuant++;
    cartQuantEl.innerText = cartQuant;
    cartCount++;
    totalCartQuant.forEach((num) => {
        num.innerText = cartCount;      
    })
    calculate()
}

function decrease(btn){
    let cartQuantEl = btn.parentElement.querySelector('.cart__quantity')
    let cartQuant = parseInt(cartQuantEl.innerText);
    // console.log(typeof cartQuant)
    cartQuant--;
    cartQuantEl.innerText = cartQuant;
    cartCount--;
    totalCartQuant.forEach((num) => {
        num.innerText = cartCount;      
    })
    calculate()
}

//function to change button if all items added to cart are removed
function changeBtn(btn){
    let cartQuantEl = btn.parentElement.querySelector('.cart__quantity')
    let cartQuant = parseInt(cartQuantEl.innerText);
    if(cartQuant === 0){
        let cartQuanBtn = cartQuantEl.parentElement
        let cartBtn = cartQuantEl.parentElement.previousElementSibling
        cartQuanBtn.style.display = 'none';
        cartBtn.style.display = 'flex';
        cartQuantEl.innerText = 1;  
        defaultCartSection.style.display = 'block';
        orderedCartSection.style.display = 'none';    

    
    }
}



 