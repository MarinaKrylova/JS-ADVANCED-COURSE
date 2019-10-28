const products = [
	{id: 1, title: 'Notebook', price: 50000},
	{id: 2, title: 'Keyboard', price: 2000},
	{id: 3, title: 'Mouse', price: 500},
	{id: 4, title: 'Gamepad', price: 1500},
];

//[] литерал для массива, для разметки литерал это строка т д
//
//видео 02:31
//
const renderProduct = (title, price, img) => {
	return  `<div class="product-item">
				<h3 class ='item_title'>${title}</h3>
				<div class = 'item_img' alt="picture">${img}</div>
				<p class = 'item_price'>${price } рублей</p>
				<button class="buy-btn">Купить</button>
			</div>`
};

const renderPage = list => {
	const productsList = list.map(el => renderProduct(el.title, el.price, el.img));
	document.querySelector('.products').innerHTML = productsList.join(" ");
}
renderPage(products);
