
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { products } from 'product_list.js';


const firebaseConfig = {
    apiKey: "AIzaSyBQs_XdZ1BAvfXQB5TwfMPXpATtmvPRC3w",
    authDomain: "wearit-3bf48.firebaseapp.com",
    databaseURL: "https://wearit-3bf48-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wearit-3bf48",
    storageBucket: "wearit-3bf48.appspot.com",
    messagingSenderId: "1048159161434",
    appId: "1:1048159161434:web:d4cb925dd700e078b5dc63",
    measurementId: "G-KGSRWKZNDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




//cart
function buy(){
    var productsFirebase=[];
    for (let index = 0; index < products.length; index++){
        if(products[index].cart){
            var product = {
                name: products[index].name,
                price: products[index].price,
                quantity: products[index].quantity,
                total: products[index].total,
            }
            productsFirebase.push(product);
        }
    }
    firebase().database().ref('cart').push({
        total:total(),
        product: productsFirebase
    });
    Swal.fire({
        type: 'success',
        title: 'success',
        text: 'operations completed',
    });
    clean();
}

//total
function total(){
    let total = 0;
    for(let intdex=0; index<products.length; index++) {
        if(products[index].cart){
            total += products[index].total;
        }
    }
    return total;
}

var con=0;
var con2=0; //position of table

function clean() {
    for(let index=0; index<products.length; index++){
        products[index].cart=false;
        products[index].quantity=0;
        products[index].total=0;
        con2=[];
        updateCart();
    }
}




//render เขียนไว้เผื่อๆดูเฉยๆนะ
(()=>{
    for(let index=0; index < products.length; index++){
        document.getElementById('row1').innerHTML+=`
            <div class="card m-2" style="width:10rem;">
            <img src="${products[index].img}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${products[index].name}</h5>
            <p class="card-text">${products[index].price}</p>
            <button class="btn btn-primary" onClick="add('${products[index]}')">add</button>
            </div>
            </div>
        `;
    }
})();