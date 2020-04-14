
firebase.initializeApp({
    apiKey: 'AIzaSyD6D7MgiHx3_yyirQshet8z-OjM1dO9Hgk',
    authDomain: 'infobitmx-27ef4.firebaseapp.com',
    projectId: 'infobitmx-27ef4'
});

var db = firebase.firestore();

function signIn(event) {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)

        .then(function (result) {

            if (event.key = "enter") {

                Notiflix.Loading.Init({ messageFontSize: "40px", svgSize: "30%" });
                Notiflix.Loading.Pulse(result.operationType + ': ' + result.user.email);
                Notiflix.Loading.Remove(5000);

                setTimeout(function () {

                    window.location.replace("admin-infobitmx.html");

                }, 5000);

            }

        }).catch(function (error) {

            console.log(error.message);

        });

}


function signOut() {

    firebase.auth().signOut().then(function () {

        console.log("\n Sesion cerrada ");

        Notiflix.Loading.Init({ messageFontSize: "40px", svgSize: "30%" });
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

        Notiflix.Notify.Init({ position: "right-bottom", borderRadius: "1px", fontSize: "20px" });
        Notiflix.Notify.Success("Registro agregado !");


    }).catch(function (error) {

        console.log("Session cerrada");

    });

}


function deleteRegister(keyRef) {

    db.collection("users").doc(keyRef).delete().then(function() {

        Notiflix.Notify.Init({ position: "right-bottom", borderRadius: "1px", fontSize: "20px"  });
        Notiflix.Notify.Success("Registro borrado");
      
    }).catch(function(error) {

      
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
                <td> 
                    <button class="btn btn-danger" onClick="deleteRegister('${doc.id}')" > <i class="fa fa-times fa-2x"> </i> </button>
                </td>
            </tr>
            `
        });
    });

}