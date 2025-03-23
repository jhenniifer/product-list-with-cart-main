const addToCartBtn = document.querySelectorAll('.add_to_cart');
const addOrBtn = document.querySelectorAll('.cart__selected');
let totalCartQuant  = document.querySelectorAll('.cart__num');
const cartMinus = document.querySelectorAll('.cart__minus--btn');
const cartAdd = document.querySelectorAll('.cart__add--btn');
let productQuan = document.querySelectorAll('.cart__quantity');

let cartCount = 0;


// function addToCart(){  
// addToCartBtn.forEach((cartBtn) => {
// cartBtn.addEventListener('click',() => {
//     cartCount++;
//     cartNum.forEach((num) => {
//         num.innerText = cartCount;      
//     })
// cartBtn.style.display = 'none';
// addOrMinusBtn.forEach(element => {
//   if(element !== cartBtn.nextElementSibling){
//         element.display = 'none';
//     } else{
//         element.style.display = 'flex';
//     }
// });
// cartAdd.forEach(add => {
//     add.addEventListener('click',()=>{
//         let product = add.previousElementSibling;
//         console.log(product);
//         let currentQuan = parseInt(product.innerText);
//         product.innerText = currentQuan + 1;
//         cartCount++;
//         cartNum.forEach((num) => {
//             num.innerText = cartCount;
            
//         })
           
//          })
//     });
// });

// })
// }








