export default (name, allowedLength) => {
	return name.length < allowedLength ? name : name.slice(0, allowedLength - 3) + '...';
};
