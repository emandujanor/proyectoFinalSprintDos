var tareas=document.getElementById('tareas');
var nombreDeLaTarea=document.getElementById("nombreTarea");
function addElement(){
  var tareas=document.getElementById('tareas');
  var h1 = document.createElement("h1");
  var ul = document.createElement("ul");
  h1.innerText = nombreDeLaTarea.value;
  tareas.appendChild(h1);
  tareas.appendChild(ul);
  //var pendientes=prompt("Escribe aqui tus pendientes");

}
