var tareas=document.getElementById('tareas');
var nombreDeLaTarea=document.getElementById("nombreTarea");
function addElement(){
  var tareas=document.getElementById('tareas'); //esta variable trae del html mi  elemento section id tareas
  var h1 = document.createElement("h1");// esta variable crea unnuevo elemento h1
  var ul = document.createElement("ul");// esta variable crea unnuevo elemento ul
  h1.innerText = nombreDeLaTarea.value;//al elemento h1 se le asigna el nombre del input nombreTarea
  tareas.appendChild(h1);
  tareas.appendChild(ul);


  var botonAgregarPendiente = document.createElement("button");
  botonAgregarPendiente.innerText="Agrega un pendiente";
  botonAgregarPendiente.style.marginBottom="20px";
  botonAgregarPendiente.onclick=(function(){
    var li = document.createElement("li");//cada vez que se hace click al boton agregar pendiente, se crea una nueva etiqueta li
    ul.appendChild(li);//se agrega el nuevo elemento li a la ul
    var pendientes=prompt("Escribe aqui tu pendiente"); //se pide el nombre del pendiente que se desea ingresar
    li.innerText=pendientes; //se asigna el nombre del pendiente al elemento li que ha sido creado.
    var botonEliminarPendiente = document.createElement("button");//creo un boton x para eliminar nodo
    botonEliminarPendiente.innerText= "X";
    botonEliminarPendiente.style.marginLeft ="20px"
    li.appendChild(botonEliminarPendiente);
    var botonEditarPendiente = document.createElement("button");
    li.appendChild(botonEditarPendiente);
    botonEditarPendiente.innerText ="Editar";
    botonEditarPendiente.style.marginLeft ="20px"
    botonEditarPendiente.onclick=(function(){
      var nuevoValorPendiente = prompt("Nuevo valor del pendiente");
      this.parentNode.innerText=nuevoValorPendiente;

    })
    botonEliminarPendiente.onclick=(function(){
      ul.removeChild(li);
    })
  })
  tareas.appendChild(botonAgregarPendiente);

}
