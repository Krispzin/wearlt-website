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



firebase.initialzeApp(firebaseConfig);

var contactDataShirtdb = firebase.database().ref("dataOrder");
document.getElementById("dataOrder").addEventListener("Add To Cart", submitOrder);
        
function submitOrder(e){
    e.preventDefault();

    var size = getElementVal("catinp");
    var quantity = getElementVal("catinp2");
            
    saveMessage(size, quantity);
}
const saveMessage = (size, quantity) => {
    var newContentForm = contactDataShirtdb.push();

    newContentForm.set({
        size: catinp,
        quantity: catinp2,
    });
  
}
const getElementById = (id) => {
    return document.getElementById(id).value;
}