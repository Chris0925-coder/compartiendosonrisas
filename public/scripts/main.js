const showImages = document.getElementsByClassName('images-content');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

const closeBtn = document.querySelector('.close');

console.log(showImages[0].children)

Object.values(showImages[0].children).forEach(img => {
	img.addEventListener('click', (e) => {
		if(e.target.tagName === 'IMG') {
			console.log(e)
			modalContent.innerHTML = e.srcElement.outerHTML;
			modal.classList.toggle('show');
		}
	})
})

closeBtn.addEventListener('click', () => {
	modal.classList.toggle('show');
})
// [0].childNodes[0].attributes[0].textContent