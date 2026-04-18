const showImages = document.getElementsByClassName('images-content');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
	modal.classList.toggle('show');
})

let item = showImages[0].querySelector('.item:nth-child(2)');

let newDiv = document.createElement('div');

newDiv.setAttribute('class', 'new-div');

let images = [
	`<picture><img src="public/img/entrega_de_alimentos/IMG-20260417-WA0013.jpg"></picture>
	<picture><img src="public/img/entrega_de_alimentos/new_img_a.jpg"></picture>
	`,
	// "new_img_a.jpg",
	// "new_img_c.jpg",
	// "646468067_122123658381082145_4855597248081070575_n_.jpg",
	// "646716339_122123658297082145_1618010219896545606_n_.jpg",
	
];

let imagesB = [
	`<picture><img src="public/img/actividades_sociales/644963196_122123658255082145_7861592502207344555_n_.jpg"></picture>
	<picture><img src="public/img/actividades_sociales/646377186_122123658339082145_8781551563745798074_n_.jpg"></picture>
	<picture><img src="public/img/actividades_sociales/646454457_122123658471082145_5059191120632262630_n_.jpg"></picture>`,
	`<picture><img src="public/img/actividades_sociales/646468067_122123658381082145_4855597248081070575_n_.jpg"></picture>
	<picture><img src="public/img/actividades_sociales/new_img_c.jpg"></picture>`
];

let imagesC = [
	`<picture><img src="public/img/voluntariado/646407219_122123658513082145_2299101496271544037_n_.jpg"></picture>
	<picture><img src="public/img/voluntariado/646716339_122123658297082145_1618010219896545606_n_.jpg"></picture>`,
	`<picture><img src="public/img/voluntariado/new_img_b.jpg"></picture>
	<picture><img src="public/img/voluntariado/new_img_d.jpg"></picture>`,
];

let imagesD = [
	`<picture><img src="public/img/hospitales/645302926_122123658573082145_7812428749982802116_n_.jpg"></picture>
	<picture><img src="public/img/hospitales/1000019341.jpg"></picture>
	<picture><img src="public/img/hospitales/IMG-20260417-WA0005.jpg"></picture>`,
];

let title = [
	"ENTREGA DE ALIMENTOS",
	"ACTIVIDADES SOCIALES",
	"VOLUNTARIADO",
	"HOSPITALES"
];


function function_name(a,b) {
	a.forEach((img, index) => {
		newDiv.innerHTML += `
			<article>			
				<div class="images">
					${a[index]}
				</div>
				<h3>${b}</h3>
			</article>
			`;

		showImages[0].insertBefore(newDiv, item);
	})
}
function_name(images,title[0]);
function_name(imagesB,title[1]);
function_name(imagesC,title[2]);
function_name(imagesD,title[3]);



Object.values(newDiv.children).forEach(img => {
	img.addEventListener('click', (e) => {
		if(e.target.tagName === 'IMG') {
			modalContent.innerHTML = e.srcElement.outerHTML;
			modal.classList.toggle('show');
		}
	})
})

