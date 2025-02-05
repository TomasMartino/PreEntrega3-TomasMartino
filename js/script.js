// // URL de la API

// const url = `https://musicbrainz.org/ws/2/artist?query=artist:*&limit=25&offset=${Math.floor(Math.random() * (1000 - 25))}&fmt=json`;
// // Función para obtener los artistas aleatorios
// async function obtenerArtistasAleatorios() {
//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const artistas = data.artists;
//     const tablaArtistas = document.getElementById('tablaArtitas');

//     artistas.forEach(artista => {
//       const youtube = artista.urls && artista.urls.youtube ? artista.urls.youtube : 'null';
//       const instagram = artista.urls && artista.urls.instagram ? artista.urls.instagram : 'null';
//       const twitter = artista.urls && artista.urls.twitter ? artista.urls.twitter : 'null';
//       const pais = artista.area && artista.area.name ? artista.area.name : 'null';

//       const fila = `
//         <tr>
//           <td>${artista.name}</td>
//           <td>${artista.tags[0].name}</td>
//           <td><a href="${youtube}">${youtube}</a></td>
//           <td><a href="${instagram}">${instagram}</a></td>
//           <td><a href="${twitter}">${twitter}</a></td>
//           <td>${pais}</td>
//         </tr>
//       `;

//       tablaArtistas.innerHTML += fila;
//     });
//   })
//   .catch(error => console.error(error));
// }

// obtenerArtistasAleatorios();
