module.exports = {
    const: PI = Math.PI,
    area: (r) => PI * r ** 2,
    circumference: (r) => 2 * PI * r,
    id: 'id1',
    name: 'Project',
    let: lastName = 'Fox',
    let: firstName = 'Peter',
    fullName: `${firstName} ${lastName}`,
    firstN: firstName,
    lastName: lastName,
    data: function getData(){
	    return `${firstName} ${lastName} ${PI}`;
    }
}