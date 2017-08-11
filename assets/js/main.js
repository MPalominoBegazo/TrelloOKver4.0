var Tareas = [];
var contenedor = document.getElementById("contenedorGeneral");
var btnAddList = document.getElementById("btnAddList");
var span = document.getElementById("myspan");

function Tasks(nameTask) {
  this.nameTask = nameTask;
}

btnAddList.addEventListener("click", function () {
  //creamos un div y su contenido
  var firstDiv = document.createElement("div");
  firstDiv.classList.add("d-inlineblock");
  firstDiv.classList.add("addTareasDiv");
  //firstDiv.setAttribute("class", "addTareasDiv");

  var txtNameList = document.createElement("input");
  txtNameList.type = "text";
  txtNameList.placeholder = "Add List ...";

  var btnAdd = document.createElement("button");
  btnAdd.setAttribute("class", "ADD");
  var contenido = document.createTextNode("Add");
  btnAdd.appendChild(contenido);

  var img = document.createElement("img");
  img.height = "20px";
  img.width = "20px";
  img.src = "assets/img/close.png";


  firstDiv.appendChild(txtNameList);
  firstDiv.appendChild(btnAdd);
  firstDiv.appendChild(img);
  contenedor.appendChild(firstDiv);

  btnAdd.addEventListener("click", function () {
    var NameList = txtNameList.value;

    txtNameList.parentNode.removeChild(txtNameList);
    btnAdd.style.display = "none";

    //creamos el titulo de la Lista
    var H1 = document.createElement("h1");
    H1.textContent = NameList;

    //Creamos el texto para añadir tareas
    var btnAddTask = document.createElement("button");
    btnAddTask.setAttribute("class", "botones")
    btnAddTask.setAttribute("id", "btnAdd");
    var contenido = document.createTextNode("Add task");
    btnAddTask.appendChild(contenido);

    firstDiv.appendChild(H1);
    firstDiv.appendChild(btnAddTask);
    btnAddTask.addEventListener("click", function () {
      var txtAddTask = document.createElement("textArea");
      txtAddTask.setAttribute("class", "NewTask");
      txtAddTask.style.alignContent = "center";
      txtAddTask.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) { //reconoce el enter
          var tarea = txtAddTask.value;
          txtAddTask.blur();
          txtAddTask.style.border = "2px transparent";
          var task = new Tasks(tarea);
          Tareas.push(task);
          console.log(Tareas);
          return false;
        }
      });

      txtAddTask.value = "";
      firstDiv.style.height = "200px";
      firstDiv.insertBefore(txtAddTask, btnAddTask);
    });


  });


});

