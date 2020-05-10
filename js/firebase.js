
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


// Adding datas - services
function addService() {

    var service = document.getElementById("service").value;
    var price = document.getElementById("price").value;
    var comments = document.getElementById("comments").value;

    db.collection("services").add({

        imagen: 'https://image.flaticon.com/icons/png/512/639/639365.png',
        service: service,
        price: price,
        comments: comments

    }).then(function (docRef) {

        Notiflix.Notify.Init({ position: "right-bottom", borderRadius: "1px", fontSize: "20px" });
        Notiflix.Notify.Success("Registro agregado !");




    }).catch(function (error) {

        console.log("Session cerrada");

    });

}


function deleteRegister(keyRef) {

    db.collection("users").doc(keyRef).delete().then(function () {

        Notiflix.Notify.Init({ position: "right-bottom", borderRadius: "1px", fontSize: "20px" });
        Notiflix.Notify.Failure("Registro borrado");

    }).catch(function (error) {


    });

}


function deleteService(keyRef) {

    db.collection("services").doc(keyRef).delete().then(function () {

        Notiflix.Notify.Init({ position: "right-bottom", borderRadius: "1px", fontSize: "20px" });
        Notiflix.Notify.Failure("Registro borrado");

    }).catch(function (error) {


    });

}

// LEER DATOS 

$(document).ready(function () {

    //var dataSet = { array: [] };

    var table = document.getElementById('table');
    db.collection("users").onSnapshot((querySnapshot) => {
        table.innerHTML = ``;

        querySnapshot.forEach((doc) => {
            /*
            dataSet.array.push(
                ['<img src=' + doc.data().imagen + '>',
                doc.data().name,
                doc.data().model,
                doc.data().state,
                '<button class="btn btn-danger" onClick="deleteRegister(' + doc.id + ')" > <i class="fa fa-times fa-2x"> </i> </button>']);
            */

            table.innerHTML += `
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

        /*
        $('#datatable').dataTable({
            "pagingType": "simple",
           
            "iDisplayLength": 5,
            "language": {
                "paginate": {
                    "next": "Sig.",
                    "previous": "Ant."
                }
            },

            data: dataSet.array,

            columns: [
                { title: "Image" },
                { title: "Name" },
                { title: "Model" },
                { title: "State" },
                { title: "Actions" },
            ]
        });*/

    });

});



$(document).ready(function () {

    var table = document.getElementById('tableService');
    db.collection("services").onSnapshot((querySnapshot) => {
        table.innerHTML = ``;

        querySnapshot.forEach((doc) => {

            table.innerHTML += `
       <tr>
          <td> <img src=' ${doc.data().imagen}'> </td>
           <td> ${doc.data().service} </td>
           <td> ${doc.data().price} </td>
           <td> ${doc.data().comments} </td>
           <td>
               <button class="btn btn-danger" onClick="deleteService('${doc.id}')" > <i class="fa fa-times fa-2x"> </i> </button>
           </td>
       </tr>
       `
        });


    });

});