const { PI } = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
exports.id = 'id1';
exports.name = 'Project';

let lastName = 'Fox';
let firstName = 'Peter';

exports.fullName = `${firstName} ${lastName}`;
exports.firstN = firstName;
exports.lastName = lastName;
exports.data = function getData(){
	return `${firstName} ${lastName} ${PI}`;
}
