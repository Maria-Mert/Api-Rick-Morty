const contenido = document.querySelectorAll('.carta');
const rickUrl = 'https://rickandmortyapi.com/api/character/1,183,5,6,1,23,9'; 

fetch(rickUrl)
    .then(response => response.json())
    .then(info => {
        info.forEach((persona, i) => {
            const carta = contenido[i];

            carta.innerHTML = `
                <img src="${persona.image}" >
                <article>
                    <h1>${persona.name} </h1>
                    <h2> ${persona.status} - ${persona.gender}</h2>
                    <h3>Última ubicación: ${persona.location.name}</h3>
                    <h3>Primera aparición: ${persona.origin.name}</h3>
                </article>
            `;
        });
    })
    .catch(error => {
        console.error('Error datos API:', error);
    });