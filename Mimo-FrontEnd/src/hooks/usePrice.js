export default price => {
	//agrega comas y signo de pesos a los precios
	return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
