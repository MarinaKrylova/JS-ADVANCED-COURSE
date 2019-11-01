
class Products{
	constructor (container = '.products'){
		this.container = container;
		this.data = [];
		this.allProduct = [];
		this.init();
	}
	init(){
		this._fetchProducts();
		this._render()
	}



	calcSum(){
		let result = 0;
		for (let itemsSum of this.allProduct){
			result += itemsSum.price;
		}
		//console.log(result);   //ПРОВЕРКА
		return result     //СУММАРНАЯ СТОИМОСТЬ ТОВАРА
		//return this.allProduct.reduce((accum, item) => accum + item.price, 0);
		//второй вариант, недостаточно понятный
	}


	_fetchProducts(){
		this.data = [  //data будем динамически менять, как только придут данные от сервера
			{id: 1, title: 'Notebook', price: 180000},
			{id: 2, title: 'Keyboard', price: 80000},
			{id: 3, title: 'Mouse', price: 1500},
			{id: 4, title: 'Gamepad', price: 2500},
			{id: 5, title: 'Chair', price: 3500},
		];
	}
	_render(){
		const block = document.querySelector(this.container);
			for (let el of this.data) {
				const product = new ProductItem(el);
				this.allProduct.push(product);   //! только здесь актуальный список товаров, брать отсюда!
				block.insertAdjacentHTML('beforeend', product.render())
			}
	}
}

class ProductItem {
	constructor(el, img='https://place-hold.it/200x150'){
		this.title = el.title;
		this.id = el.id;
		this.price = el.price;
		this.img = img;
	}
	render(){
		return `<div class="product-item">
				<img src="${this.img}" alt="${this.title}">
				<div class="desc">
					<h3>${this.title}</h3>
					<p>${this.price}</p>
					<button class="buy-btn">Купить</button>
				</div>
			</div>`
	}
}

const products = new Products();
console.log(products.calcSum()); //СУММАРНАЯ СТОИМОСТЬ ТОВАРА


























/*products.fetchProducts();
products.render();
*/






// const products = [
// 	{id: 1, title: 'Notebook', price: 180000},
// 	{id: 2, title: 'Keyboard', price: 80000},
// 	{id: 3, title: 'Mouse', price: 1500},
// 	{id: 4, title: 'Gamepad', price: 2500},
// 	{id: 4, title: 'Chair', price: 3500},

// ];

// //[] литерал для массива, для разметки литерал это строка т д
// //
// //видео c начала второго урока
// //
// //
// //float применяем только тогда, когда нужно, чтобы текст обтекал картинку
// //в остальном используем flex и greed
// //
// //через / в скобках отображаем желаемый размер картинки
// const renderProduct = (title, price, img='https://place-hold.it/200x150') => {
// 	return `<div class="product-item">
// 				<img src=${img}" alt="${title}">
// 				<div class="desc">
// 					<h3>${title}</h3>
// 					<p>${price}</p>
// 					<button class="buy-btn">Купить</button>
// 				</div>
// 			</div>`
// };


// //метод map возвращает нам обновленный массив
// //Присвоение в текстовое свойство innerHTML объекта
// const renderPage = list => {

// 	//метод innerHTML удобен, если хотим что-ли поместить сразу скопом много
// 	//document.querySelector(`.products`).innerHT L = list.map(el => renderProduct(el.title, el.price)).join("");
	
// 	//метод insertAdjacentHTML удобен, когда нужночто-то впоследствии перерендерить, передобавить
// 	for(let el of list){
// 		document.querySelector(`.products`).insertAdjacentHTML('beforeend', renderProduct(el.title, el.price));
// 	}
// };
// renderPage(products);
