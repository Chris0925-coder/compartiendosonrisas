const main = document.querySelector("body");


const opciones = {
    timeZone: "America/Panama",
    dateStyle: 'full',
    timeStyle: 'long',
    hour12: false, 
  };

  const formatoConZona = new Intl.DateTimeFormat("es-PA", opciones).format(ahora);
  
const url = `https://visits-christian-guardias-projects.vercel.app/count`;    
const dominio = window.location;
console.log(dominio);
console.log(window.location.pathname);


let dom = window.location.pathname.split('/');
console.log(dom);
let dom2 = dom[2];
let numero = 10;

function domain() {
    if(dominio === 'https://compartiendo-sonrisas.desarrolladorweb.blog') {
        numero = 9;
        dom2 = dominio;
    } 
}

function count() {
    domain();
    console.log(numero);
    console.log(dom2);

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
        console.log(numero);
        console.log(dom2);

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

main.addEventListener('click', cli);

count();
