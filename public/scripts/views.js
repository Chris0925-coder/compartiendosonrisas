const main = document.querySelector("body");


const opciones = {
    timeZone: "America/Panama",
    dateStyle: 'full',
    timeStyle: 'long',
    hour12: false, 
  };

  const formatoConZona = new Intl.DateTimeFormat("es-PA", opciones).format(ahora);
  
const url = `https://visits-christian-guardias-projects.vercel.app/count`;    
const dominio = window.location.pathname;

let dom = dominio.split('/');

let dom2 = dom[2];
let numero = 10;

function domain() {
    if(dominio === '/') {
        numero = 9;
        dom2 = 'compartiendo-sonrisas';
    } 
}

function count() {
    domain();

    let analyticsData = {
        id: numero,
        count: 1,
        domain: dom2,
        date: `última vista: ${formatoConZona}`,
        clicks: 0,
    };

    navigator.sendBeacon(url, JSON.stringify(analyticsData));  
};



function cli() {    
    if(event.target.tagName === "A" || event.target.tagName === "BUTTON" || event.target.tagName === "IMG") {
        // if(dominio != 'https://compartiendo-sonrisas.desarrolladorweb.blog/') numero = 10;
        domain();

        let analyticsData = {
            id: numero,
            count: 0,
            domain: dom2,
            date: `última vista: ${formatoConZona}`,
            clicks: 1,
        };
        navigator.sendBeacon(url, JSON.stringify(analyticsData));
    }
}

// main.addEventListener('click', cli);

// count();
