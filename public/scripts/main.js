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
	"new_img_a.jpg",
	"new_img_c.jpg",
	"646468067_122123658381082145_4855597248081070575_n_.jpg",
	"646716339_122123658297082145_1618010219896545606_n_.jpg",
	
];

let imagesB = [
	"646377186_122123658339082145_8781551563745798074_n_.jpg",
	"646407219_122123658513082145_2299101496271544037_n_.jpg",
	"646454457_122123658471082145_5059191120632262630_n_.jpg",
	"645302926_122123658573082145_7812428749982802116_n_.jpg",
	
];

let imagesC = [
	"644963196_122123658255082145_7861592502207344555_n_.jpg",
	"1000019341.jpg",
	"new_img_b.jpg",
	"new_img_d.jpg",
	// "IMG-20260417-WA0005.jpg"
];

let title = [
	"ENTREGA DE ALIMENTOS",
	"ACTIVIDADES SOCIALES",
	"VOLUNTARIADO",
	"HOSPITALES"
];


images.forEach((img, index) => {
	console.log(img);

	newDiv.innerHTML += `
		<article>
			<h3>${title[index]}</h3>
			<div class="images">
				<picture><img src="public/img/${img}"></picture>
				<picture><img src="public/img/${imagesB[index]}"></picture>
				<picture><img src="public/img/${imagesC[index]}"></picture>
			</div>
		</article>
		`;

	showImages[0].insertBefore(newDiv, item);
})



Object.values(newDiv.children).forEach(img => {
	img.addEventListener('click', (e) => {
		console.log(e)
		if(e.target.tagName === 'IMG') {
			modalContent.innerHTML = e.srcElement.outerHTML;
			modal.classList.toggle('show');
		}
	})
})

