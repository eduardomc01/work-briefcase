/*
apiKey: "AIzaSyD6D7MgiHx3_yyirQshet8z-OjM1dO9Hgk",
authDomain: "infobitmx-27ef4.firebaseapp.com",
databaseURL: "https://infobitmx-27ef4.firebaseio.com",
projectId: "infobitmx-27ef4",
storageBucket: "infobitmx-27ef4.appspot.com",
messagingSenderId: "656712226417",
appId: "1:656712226417:web:e00b46591f56cd4c4f2dd0",
measurementId: "G-6P364MPRHB"
*/

firebase.initializeApp({
    apiKey: 'AIzaSyD6D7MgiHx3_yyirQshet8z-OjM1dO9Hgk',
    authDomain: 'infobitmx-27ef4.firebaseapp.com',
    projectId: 'infobitmx-27ef4'
});

var db = firebase.firestore();

function signIn() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)

        .then(function (result) {

            Notiflix.Loading.Pulse(result.operationType + ': ' + result.user.email);

            Notiflix.Loading.Remove(5000);

            setTimeout(function () {

                window.location.replace("admin-infobitmx.html");

            }, 5000);
    
        }).catch(function (error) {

            console.log(error.message);
    
        });
    
}


// var errorCode = error.code;
// var errorMessage = error.message;
//  console.log("\n ERROR1: " + errorCode + "\n ERROR2: " + errorMessage);


function signOut() {

    firebase.auth().signOut().then(function () {

        console.log("\n Sesion cerrada ");

        Notiflix.Loading.Pulse("Session out...");
        Notiflix.Loading.Remove(5000);

        setTimeout(function () {

            window.location.replace("index.html");

        }, 5000);

    }).catch(function (error) {

        console.log("\n Error: " + error);

    });

}

// Adding datas
function addRegister() {
    
    var name = document.getElementById("name").value;
    var model = document.getElementById("model").value;
    var state = document.getElementById("state").value;

    db.collection("users").add({
        imagen: 'https://image.flaticon.com/icons/svg/2493/2493283.svg',
        name: name,
        model: model,
        state: state

    }).then(function (docRef) {

        //console.log("Registro exitoso");
        
       Notiflix.Notify.Success(" Agregado ");
       
    }).catch(function (error) {

        console.log("session cerrada");

    });

}


// LEER DATOS 

window.onload = function () {

    var tabla = document.getElementById('tabla');
    db.collection("users").onSnapshot((querySnapshot) => {
        tabla.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data().name}`);
            tabla.innerHTML += `
            <tr>
               <td> <img src=' ${doc.data().imagen}'> </td>
                <td> ${doc.data().name} </td>
                <td> ${doc.data().model} </td>
                <td> ${doc.data().state} </td>
            </tr>
            `
        });
    });

}