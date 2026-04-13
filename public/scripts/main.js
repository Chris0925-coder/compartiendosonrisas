const showImages = document.getElementsByClassName('images-content');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

const closeBtn = document.querySelector('.close');

Object.values(showImages[0].children).forEach(img => {
	img.addEventListener('click', (e) => {
		if(e.target.tagName === 'IMG') {
			modalContent.innerHTML = e.srcElement.outerHTML;
			modal.classList.toggle('show');
		}
	})
})

closeBtn.addEventListener('click', () => {
	modal.classList.toggle('show');
})