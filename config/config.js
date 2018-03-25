module.exports = {
    'secret': 'reddicfamz2345'
};

module.exports.getTodaysDate = () => {
	let d = new Date();
	let today = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
	return today;
}