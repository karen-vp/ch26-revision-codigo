const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Cambie el nombre de las variables a unos mas descriptivos, y arregle las referencias de las clases name y blog en el query selector
const userName = document.querySelector('.name');
const userBlog = document.querySelector('.blog');
const locationUser = document.querySelector('.location');


//Esta funcion te permite hacer una peticion get a una api de usuarios, segun el usuario que le indiques.
//Agregue la palabra reservada async a la funcion
async function displayUser(username) {

  //Agregue un try catch para manejar los errores
  try {
    //Cambie los textContent por innerHTML
    userName.innerHTML = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    //Asigne a una constante data la respuesta de la peticion y lo converti a objeto js
    const data = await response.json();
    //Hice desestructuracion del objeto para acceder a los valores solicitados
    const {name, blog, location} = data;
    userName.innerHTML = `${name}`;
    userBlog.innerHTML = `${blog}`;
    locationUser.innerHTML = `${location}`;
  } catch (error) {
    console.log('OH NO!');
    console.log(error);
    userName.textContent = `Algo salió mal: ${error}`
  }
 
}

displayUser('stolinski')