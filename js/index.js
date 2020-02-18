// Your web app's Firebase configuration
var getin = prompt("Pon la contraseña.")
if (getin!="123456")
{location.href='https://luischipana123.github.io/aa/'}
else
{alert('Contraseña correcta, acepte para ingresar al sistema')}


var firebaseConfig = {
    apiKey: "AIzaSyA2I0KDq0E7gYTuQD2Kw4is8y6niZnsvag",
    authDomain: "elegant-door-151717.firebaseapp.com",
    databaseURL: "https://elegant-door-151717.firebaseio.com",
    projectId: "elegant-door-151717",
    storageBucket: "elegant-door-151717.appspot.com",
    messagingSenderId: "129226723688",
    appId: "1:129226723688:web:412214b6a86ed83777c6dd",
    measurementId: "G-VY7NRKQE39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
var database = firebase.database();
var starCountRef = firebase.database().ref('placas');

var valor = [];
var time = [];
var propietario = [];
var cargo = [];
var robado = [];


starCountRef.on('value', function(snapshot) {
  //valor_uno = snapshot.val();
  console.log(snapshot.val());
   snapshot.forEach(function(childSnapshot) {
    // key will be "ada" the first time and "alan" the second time
    var key = childSnapshot.key;
    // childData will be the actual contents of the child
    var childData = childSnapshot.val();
     console.log(childData['valor']);

     valor.push(childData['valor']);
     time.push(childData['time']);
     propietario.push(childData['Propietario']);
     cargo.push(childData['cargo']);
     robado.push(childData['robado']);


    $("#lista_placas").append(childData['valor'] +  "  ⇒    " + childData['time']+  "      ⇒      "  );
$("#lista_placas").append("<br>");
        $("#lista_placas1").append(childData['Propietario']+  "      ⇒      " + childData['cargo']+  "      ⇒      "  );
$("#lista_placas1").append("<br>");
            $("#lista_placas2").append(childData['robado'] );
$("#lista_placas2").append("<br>");
  });


  $("#lista_placas11").append(valor[valor.length-1] +  "      ⇒      " + time[time.length-1]+  "      ⇒      "  )
  /*console.log(propietario);
  console.log(cargo);*/
  $("#lista_placas12").append(propietario[propietario.length-1]+  "      ⇒      " + cargo[cargo.length-1]+  "      ⇒      "  );
  /*console.log(robado);*/
  $("#lista_placas13").append(robado[robado.length-1] );
  
});
