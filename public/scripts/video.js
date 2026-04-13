const video = document.querySelector('#video');
const item = video.querySelector('.item:nth-child(2)');

let newVideo = document.createElement('div');

newVideo.setAttribute('class', 'container');

let videos = [
	'AQOJpErycrFY2KdAtVMRH_zI1pZHzBD-hhSRgxAr4S-qiaMY0VkKub6UY0XrtWJQyDb18L955tuj24hsxOwP3U8v_.mp4',
	'AQPCKMPX2OUQMQRhK4NeEHoyDM2hyLunmQxG3NxbhZCKvW9oaZ2h9s9shUPxdAPTfTBdDKOVj_5MZtMxJCF1tZ3c8U7qE3l2.mp4',
	'main.mp4','VID-20260412-WA0034.mp4','VID-20260412-WA0035.mp4','VID-20260412-WA0038.mp4'

];

videos.forEach(v => {

	newVideo.innerHTML += `
		<video controls>
			<source src="../public/video/${v}">
		</video>
	`;

	video.insertBefore(newVideo, item);
})

