const grayHeart = document.querySelector('.gray-heart');
const redHeart = document.querySelector('.red-heart');
const text = document.querySelector('.text');
const text_2nd = document.querySelector('.text-2nd');
const text_3th = document.querySelector('.text-3th');
const text_4th = document.querySelector('.text-4th');


grayHeart.addEventListener('click', () =>{
	redHeart.classList.add('animation');
	grayHeart.classList.add('fill-color');
});

redHeart.addEventListener('click', () =>{
	redHeart.classList.remove('animation');
	grayHeart.classList.remove('fill-color');
})

text.addEventListener('click', () =>{
	redHeart.classList.toggle('animation');
	grayHeart.classList.toggle('fill-color');
	text.style.visibility = "hidden";
	text_2nd.style.visibility = "visible";
	text_3th.style.visibility = "visible";
	text_3th.classList.toggle('animation');
	text_4th.classList.toggle('fill-color');
})

text_2nd.addEventListener('click', () =>{
	redHeart.classList.toggle('animation');
	grayHeart.classList.toggle('fill-color');
	text.style.visibility = "visible";
	text_2nd.style.visibility = "hidden";
	text_3th.style.visibility = "hidden";
	text_3th.classList.toggle('animation');
	text_4th.classList.toggle('fill-color');
})