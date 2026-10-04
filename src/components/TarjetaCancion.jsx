// 🎫 TICKET 1 — Este componente tiene 3 errores de JSX.
// No te decimos dónde están: la pantalla de error de Vite y la consola
// del navegador (F12) te dan la pista.
//
// 🎫 TICKET 3 — Estos datos están escritos aquí adentro, pero ya existen
// en src/data/cancion.js. Bórralos de aquí e impórtalos desde ese archivo.

function TarjetaCancion() {
    const titulo = "Luces del Hangar";
    const artista = "Kuma & The Bolts";
    const portada = "/portadas/turno-de-noche.svg";

    return (
        <article class="tarjeta">
            <img src={portada} alt="Portada del álbum" className="tarjeta-portada">
            <h2 className="tarjeta-titulo">titulo</h2>
            <p className="tarjeta-artista">{artista}</p>
        </article>
    );
}

export default TarjetaCancion;
