export default (name, allowedLength) => {
	//si un string es mayor que el largo permitido
	//lo corta y le agrega '...'
	return name.length < allowedLength ? name : name.slice(0, allowedLength - 3) + '...';
};
