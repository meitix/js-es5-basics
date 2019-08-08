const person = {
    firstname: 'mehran',
    lastname: 'valizadeh',
    age: 29,
    address: {
        city: 'sari',
        street: '22 bahman'
    }, 
    sayHello: function () {
        console.log('hello, my name is ' + this.firstname)
    }
};

module.exports = person;