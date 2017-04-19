var contenedor = document.createElement("div");
contenedor.setAttribute("class","contenedor");
document.body.appendChild(contenedor);

/** Agregando titulo "Nuestras coders" **/
var titulo = document.createElement("h1");
titulo.appendChild(document.createTextNode("Nuestras coders"));
contenedor.appendChild(titulo);

var imagenes = [{src:"foto1.jpg",name:"Anais Araya"},
                 {src:"foto2.jpg",name:"Catherine de Silva"},
                 {src:"foto3.jpg",name:"Andre Miranda" },
                 {src:"foto4.jpg",name:"Francisca Ojeda"},
                 {src:"foto5.jpg",name:"Daniela Sánchez" },
                 {src:"foto6.jpg",name:"Berenisse Ríos"}];

imagenes.forEach(function (e){
  addImgs("assets/img/"+e.src,e.name);
});

function addImgs(src,name){
  var figure=document.createElement("figure");
  var img=document.createElement("img");
  var nombre=document.createElement("nombre");
  img.src=src;
  figure.setAttribute("class","imagenes");
  figure.appendChild(img);

  nombre.appendChild(document.createTextNode(name));
  figure.appendChild(nombre);
  contenedor.appendChild(figure);
}
