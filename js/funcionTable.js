  const Cantante = function(nombre, genero, youtube, twitter, instagram, pais ) {
      this.nombre = nombre
      this.genero = genero
      this.youtube = youtube
      this.twitter = twitter
      this.instagram = instagram
      this.pais = pais
  }
  
  let charlyGarcia = new Cantante(
    "Charly García",
    "Rock",
    "https://www.youtube.com/channel/UCfF7cLFAU2A1MDDEftEuWbw",
    "https://twitter.com/charlygarcia",
    "https://www.instagram.com/charlygarcia",
    "Argentina"
);

let luisSpinetta = new Cantante(
    "Luis Alberto Spinetta",
    "Rock, Rock Progresivo",
    "https://www.youtube.com/channel/UCU8chNsOtbNc5N8yWguEnTg",
    "-",
    "-",
    "Argentina"
);

let fitoPaez = new Cantante(
    "Fito Páez",
    "Rock, Pop",
    "https://www.youtube.com/user/FitoPaezOficial",
    "https://twitter.com/fitopaezmusica",
    "https://www.instagram.com/fitopaezmusica",
    "Argentina"
);

let gustavoCerati = new Cantante(
    "Gustavo Cerati",
    "Rock Alternativo",
    "https://www.youtube.com/user/gustavoceratioficial",
    "https://twitter.com/cerati",
    "https://www.instagram.com/cerati",
    "Argentina"
);

let andresCalamaro = new Cantante(
    "Andrés Calamaro",
    "Rock",
    "https://www.youtube.com/user/CalamaroVideos",
    "https://twitter.com/calamarooficial",
    "https://www.instagram.com/a_calamaro",
    "Argentina"
);

let abelPintos = new Cantante(
    "Abel Pintos",
    "Folklore, Pop",
    "https://www.youtube.com/user/AbelPintosVEVO",
    "https://twitter.com/AbelPintos",
    "https://www.instagram.com/abelpintos",
    "Argentina"
);

let laliEsposito = new Cantante(
    "Lali Espósito",
    "Pop",
    "https://www.youtube.com/user/LaliMusicaVEVO",
    "https://twitter.com/lalioficial",
    "https://www.instagram.com/lalioficial",
    "Argentina"
);

let tiniStoessel = new Cantante(
    "Tini Stoessel",
    "Pop Latino",
    "https://www.youtube.com/user/TiniStoesselVEVO",
    "https://twitter.com/TiniStoessel",
    "https://www.instagram.com/tinistoessel",
    "Argentina"
);

let trueno = new Cantante(
    "Trueno",
    "Rap, Hip-Hop",
    "https://www.youtube.com/c/TRUENO",
    "https://twitter.com/TruenoOficiaI",
    "https://www.instagram.com/trueno",
    "Argentina"
);

let duki = new Cantante(
    "Duki",
    "Trap, Rap",
    "https://www.youtube.com/c/Duki",
    "https://twitter.com/DukiSSJ",
    "https://www.instagram.com/dukissj",
    "Argentina"
);

let bizarrap = new Cantante(
    "Bizarrap",
    "Electrónica, Rap",
    "https://www.youtube.com/c/Bizarrap",
    "https://twitter.com/bizarrap",
    "https://www.instagram.com/bizarrap",
    "Argentina"
);

let mariaBecerra = new Cantante(
    "María Becerra",
    "Pop, Reggaetón",
    "https://www.youtube.com/c/MaríaBecerraMusic",
    "https://twitter.com/MariaBecerra22",
    "https://www.instagram.com/mariabecerra",
    "Argentina"
);

let ricardoArjona = new Cantante(
    "Ricardo Arjona",
    "Pop, Balada",
    "https://www.youtube.com/user/RicardoArjonaVEVO",
    "https://twitter.com/Ricardo_Arjona",
    "https://www.instagram.com/ricardoarjona",
    "Guatemala"
);

let carlosVives = new Cantante(
    "Carlos Vives",
    "Vallenato, Pop",
    "https://www.youtube.com/user/carlosvivesvevo",
    "https://twitter.com/CarlosVives",
    "https://www.instagram.com/carlosvives",
    "Colombia"
);

let shakira = new Cantante(
    "Shakira",
    "Pop, Rock Latino",
    "https://www.youtube.com/user/shakira",
    "https://twitter.com/shakira",
    "https://www.instagram.com/shakira",
    "Colombia"
);

let maluma = new Cantante(
    "Maluma",
    "Reggaetón, Pop",
    "https://www.youtube.com/user/MalumaVEVO",
    "https://twitter.com/maluma",
    "https://www.instagram.com/maluma",
    "Colombia"
);

let jBalvin = new Cantante(
    "J Balvin",
    "Reggaetón, Urbano",
    "https://www.youtube.com/user/JBalvinVEVO",
    "https://twitter.com/JBalvin",
    "https://www.instagram.com/jbalvin",
    "Colombia"
);

let daddyYankee = new Cantante(
    "Daddy Yankee",
    "Reggaetón",
    "https://www.youtube.com/user/DaddyYankeeVEVO",
    "https://twitter.com/daddy_yankee",
    "https://www.instagram.com/daddyyankee",
    "Puerto Rico"
);

let badBunny = new Cantante(
    "Bad Bunny",
    "Reggaetón, Trap Latino",
    "https://www.youtube.com/user/BadBunnyPR",
    "https://twitter.com/sanbenito",
    "https://www.instagram.com/badbunnypr",
    "Puerto Rico"
);

let anuelAA = new Cantante(
    "Anuel AA",
    "Reggaetón, Trap",
    "https://www.youtube.com/user/AnuelVEVO",
    "https://twitter.com/Anuel_2bleA",
    "https://www.instagram.com/anuel",
    "Puerto Rico"
);
  
  let cantantes = [ 
      abelPintos, laliEsposito, tiniStoessel, trueno, duki, bizarrap, mariaBecerra, ricardoArjona, carlosVives, shakira, maluma, jBalvin, daddyYankee, badBunny, anuelAA
  ];

  let tablaArtitas = document.getElementById("tablaArtitas") //tablaArtitas

  for (let i = 0; i < cantantes.length; i++) {
      let fila = `<tr><td>${cantantes[i].nombre}</td><td>${cantantes[i].genero}</td><td><a href="${cantantes[i].youtube}">${cantantes[i].youtube}</a></td><td><a href="${cantantes[i].instagram}">${cantantes[i].instagram}</a></td><td><a href="${cantantes[i].twitter}">${cantantes[i].twitter}</a></td><td>${cantantes[i].pais}</td></tr>`
      tablaArtitas.innerHTML += fila 
  }

//buscardor de cantante por nombre
let filtrar = document.getElementById("filtro")
filtrar.addEventListener("click", buscarPorNombre)

//buscador de cantantate por genero
let filtrarGenero = document.getElementById("filtroGenero")
filtrarGenero.addEventListener("click", buscarPorGenero)

let filtrarartista = document.getElementById("filtroAPI")
filtrarartista.addEventListener("click", buscarArtistaPorNombre)



//agregar artista
let crear= document.getElementById("crearArtista")
crear.addEventListener("click", agregarArtista)

if(localStorage.getItem("artistas")){
  cantantes = JSON.parse(localStorage.getItem("artistas"))
}else{
  cantantes=cantantes
}

//actualizar la tabla
const nuevosCantantes = JSON.parse(localStorage.getItem("artistas"));
actualizarTabla(nuevosCantantes);

// URL de la API

const url = `https://musicbrainz.org/ws/2/artist?query=artist:*&limit=25&offset=${Math.floor(Math.random() * (1000 - 25))}&fmt=json`;

async function obtenerArtistasAleatorios() {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    const artistas = data.artists;
    const tablaArtistas = document.getElementById('tablaArtitas');
    
    
    

    artistas.forEach(artista => {
      const tags = artista.tags && artista.tags[0].name ? artista.tags[0].name : 'null';
      const youtube = artista.urls && artista.urls.youtube ? artista.urls.youtube : 'null';
      const instagram = artista.urls && artista.urls.instagram ? artista.urls.instagram : 'null';
      const twitter = artista.urls && artista.urls.twitter ? artista.urls.twitter : 'null';
      const pais = artista.area && artista.area.name ? artista.area.name : 'null';

      const fila = `
        <tr>
          <td>${artista.name}</td>
          <td>${tags}</td>
          <td><a href="${youtube}">${youtube}</a></td>
          <td><a href="${instagram}">${instagram}</a></td>
          <td><a href="${twitter}">${twitter}</a></td>
          <td>${pais}</td>
        </tr>
      `;

      tablaArtistas.innerHTML += fila;
        
    });
    return artistas;  
  })
  .catch(error => console.error(error));
   
}

obtenerArtistasAleatorios();





function agregarArtista(){

  Swal.fire({

      title:`agregar producto`,
      html:`<label>Nombre:</label>
    <input id="nombre-input" class="swal2-input" type="text" autofocus>

    <label>Género:</label>
    <input id="genero-input" class="swal2-input" type="text">

    <label>Canal de YouTube:</label>
    <input id="youtube-input" class="swal2-input" type="url">

    <label>Twitter:</label>
    <input id="twitter-input" class="swal2-input" type="url">

    <label>Instagram:</label>
    <input id="instagram-input" class="swal2-input" type="url">

    <label>País:</label>
    <input id="pais-input" class="swal2-input" type="text">`,

      showCancelButton: true,
      confirmButtonText:"agregar",
      cancelButtonText: "cancelar",
  }).then((result)=>{
      if(result.isConfirmed){
        let nombre = document.getElementById("nombre-input").value;
        let genero = document.getElementById("genero-input").value;
        let youtube = document.getElementById("youtube-input").value;
        let twitter = document.getElementById("twitter-input").value;
        let instagram = document.getElementById("instagram-input").value;
        let pais = document.getElementById("pais-input").value;

          if(nombre==="" || genero==="" || youtube==="" || twitter==="" || instagram==="" || pais===""){
              Swal.fire(
                  {
                      icon: "error",
                      title:"Error",
                      text:"por favor ingresa valores validos"
                  }
              ); return
          }
          let artista = new Cantante(nombre, genero, youtube, twitter, instagram, pais)

          if (cantantes.some ((elemento)=> elemento.nombre === artista.nombre)){
              Swal.fire({
                  icon:"warning",
                  title: "Advertencia",
                  text:"El producto ya existe en la cantantes"
              }); return
              
          }
          cantantes.push(artista)

          
          localStorage.setItem("artistas", JSON.stringify(cantantes));
          

          Swal.fire({
              icon:"succes",
              title:"Producto Agregado",
              text: `se agrego el producto${artista.nombre} a la cantantes`,
              timer: 3000
          })
          

      }
  })
}

function actualizarTabla(cantantes) {
  if (cantantes === null || cantantes === undefined) {
    console.error("La variable cantantes es null o undefined");
    return;
  }
  tablaArtitas.innerHTML = "";
  for (let i = 0; i < cantantes.length; i++) {
    let fila = `<tr><td>${cantantes[i].nombre}</td><td>${cantantes[i].genero}</td><td><a href="${cantantes[i].youtube}">${cantantes[i].youtube}</a></td><td><a href="${cantantes[i].instagram}">${cantantes[i].instagram}</a></td><td><a href="${cantantes[i].twitter}">${cantantes[i].twitter}</a></td><td>${cantantes[i].pais}</td></tr>`;
    tablaArtitas.innerHTML += fila;
  }
}

function buscarPorGenero(){
    Swal.fire({
        title: 'ingresa el Genero que deseas buscar',
        input: 'text',
        showCancelButton: true,
        ConfirmButtonText:'Buscar',
        showLoaderOnConfirm: true,


        preConfirm: (palabraClave)=>{
            palabraClave = palabraClave.trim().toUpperCase()
            let resultado = cantantes.filter( (producto)=> producto.genero.toUpperCase().includes(palabraClave))

            if(resultado.length >0){
                Swal.fire({
                    title: 'este es el resultado de tu busqueda',
                    html: `<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Genero</th>
                            <th>Youtube</th>
                            <th>Twitter</th>
                            <th>Instagram</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Genero</th>
                            <th>Youtube</th>
                            <th>Twitter</th>
                            <th>Instagram</th>
                        </tr>
                    </tfoot>`
                    + 
                    resultado.map(  (producto)=> `<tr><td>${producto.nombre}</td><td>${producto.genero}</td><td>${producto.youtube}</td><td>${producto.twitter}</td><td>${producto.instagram}</td></tr>`) +
                
                `</table>`})

            }else{
                Swal.fire({
                    title:`no se encuentra coincidencias`,
                    icon:'error',
                    confirmButtonText: `ok`,
                })
            }
        }

    })
}

function buscarPorNombre(){
    Swal.fire({
        title: 'ingresa el producto que deseas buscar',
        input: 'text',
        showCancelButton: true,
        ConfirmButtonText:'Buscar',
        showLoaderOnConfirm: true,


        preConfirm: (palabraClave)=>{
            palabraClave = palabraClave.trim().toUpperCase()
            let resultado = cantantes.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))



            
            if(resultado.length >0){
                Swal.fire({
                    title: 'este es el resultado de tu busqueda',
                    html: `<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Genero</th>
                            <th>Youtube</th>
                            <th>Twitter</th>
                            <th>Instagram</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Genero</th>
                            <th>Youtube</th>
                            <th>Twitter</th>
                            <th>Instagram</th>
                        </tr>
                    </tfoot>`
                    + 
                    resultado.map(  (producto)=> `<tr><td>${producto.nombre}</td><td>${producto.genero}</td><td>${producto.youtube}</td><td>${producto.twitter}</td><td>${producto.instagram}</td></tr>`) +
                
                `</table>`})

            }else{
                Swal.fire({
                    title:`no se encuentra coincidencias`,
                    icon:'error',
                    confirmButtonText: `ok`,
                })
            }
        }

    })
}

function buscarArtistaPorNombre() {
    try {
      
        
      obtenerArtistasAleatorios().then(artistas => {
      console.log('artistas:', artistas);
      Swal.fire({
        title: 'Buscar artista por nombre',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        preConfirm: (nombre) => {
          console.log('nombre:', nombre);
          const resultados = artistas.filter(artista => artista.name.toLowerCase().includes(nombre.toLowerCase()));
         
                
              if(resultados.length >0){
                Swal.fire({
                    title: 'este es el resultado de tu busqueda',
                    html: `<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Genero</th>
                            <th>Youtube</th>
                            <th>Twitter</th>
                            <th>Instagram</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Genero</th>
                            <th>Youtube</th>
                            <th>Twitter</th>
                            <th>Instagram</th>
                        </tr>
                    </tfoot>`
                    + 
                    resultados.map(  (producto)=> `<tr><td>${producto.name}</td><td>${producto.tags[0].name}</td><td>${producto.youtube}</td><td>${producto.twitter}</td><td>${producto.instagram}</td></tr>`) +
                
                `</table>`})

            }else{
                Swal.fire({
                    title:`no se encuentra coincidencias`,
                    icon:'error',
                    confirmButtonText: `ok`,
                })
            }
            }
          });
        });
    } catch (error) {
        console.error(error);
    }
    
  }