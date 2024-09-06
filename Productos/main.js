let divData = document.getElementById("divData")

function getData(){
   const promesa = fetch ("https://freetestapi.com/api/v1/products", {method:"GET"});
  //voy a ir a traer la respuesta a tu solicitud get la respuesta al final el dato que me va a regresar, esa respuesta en formato json me regresa una promesa
   promesa.then( (response) => {
          response.json().then(
            (data) =>{
              console.log(data);
              creatCards(data);
            }).catch((error)=> console.log("Problema con el json" , error));
   }).catch((err)=> console.log("Existió un problema con la solicitud" , err));

  }//getData
// le pasa los productos
  function creatCards(products){
     console.log(products.length);
     console.log(products[0].name);//llamo lo productos de la api
    //crear una card por cada producto son sus datos esenciales
    // de preferencia foreach: name, description, image, price 
    products.forEach(product =>{
      let nombre = product.name;
      let descripcion = product.description;
      let imagen = product.image;
      let precio = product.price;
      
      const cardElement = document.createElement("div");
      cardElement.className = "col-md-3"; 
    
      
      cardElement.insertAdjacentHTML("beforeend", `
        <div class="card" style="width: 100%;"> 
          <img src="${imagen}" class="card-img-top" alt="${nombre}">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${descripcion}</p>
            <p class="card-text">Precio: ${precio}</p>
          </div>
        </div>
      `);
    
      
      document.getElementById('divData').appendChild(cardElement);
    });
}//creatCards

getData();
