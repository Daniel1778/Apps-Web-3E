
/*Variable de cantidad de productos a comprar */
var cantidad = 1;

/*funcion que suma los valores para aumentar la cantidad a comprar */
function suma() {
  
    /*por seguridad se puso un limite de comprar 10 productos */
    if (cantidad < 10) {
       cantidad = cantidad + 1; 
    }
  /*se asigna el valor de la variable global al input de cantidad de productos a comprar */
  document.getElementById("inputCant").value = cantidad;
  
}

/*funcion de resta en los productos a comprar */
function resta() {
    /*Si la cantidad a comprar es mayor a cero se puede restar*/ 
    if (cantidad > 0) {
        cantidad = cantidad - 1;
    }
    /*Asignamos el valor de la variable globañ al input de cantidad*/
    document.getElementById("inputCant").value = cantidad;
    /*Si la cantidad es menor o igual a cero no se permite proceder con la compra*
      se asigna automáticamente el valor a 1 */
    if (cantidad <= 0) {
        document.getElementById('inputCant').value = 1
    }

  }
  

  function changeIMG1() {document.getElementById('img1').src = "img/Aspa1.jpg"}
  function changeIMG2() {document.getElementById('img1').src = "img/Aspa2.jpg"}
  function changeIMG3() {document.getElementById('img1').src = "img/Aspa3.jpg"}
  function changeIMG4() {document.getElementById('img1').src = "img/Aspa4.jpg"}

