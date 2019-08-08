const user1 = {
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

// var user2 = {
//     firstname: 'mehran',
//     lastname: 'alizadeh',
//     age: 19,
//     address: {
//         city: 'tehran',
//         street: 'pirouzi'
//     }
// };


// user1.firstname = 'hassan';

// console.log(user1.address.city);



// var names = ['mahdi', 'mehran','mina', 'user1'];

// names.push('meisam');

// const joinedNames = names.join(' - ');

// console.log(joinedNames);

// const splitedNames = joinedNames.split(' - ');
// console.log(splitedNames);



// var names = ['mahdi', 'mehran','mina', 'user1'];

// for(var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// var print = function (array) {

//     for (var i = 0; i < array.length; i++) {
//         console.log(names[i]);
//     }
// }

// var names = ['hassan', 'mehran', 'ali', user1.firstname]
// print(names);


// var names = ['hassan', 'mehran', 'ali', user1.firstname]

// names.forEach(function(name , i ) {
//     console.log(name , i);
// });

var print = array => {
    
    for (var i = 0; i < array.length; i++) {
        console.log(names[i]);
    }
}

// const getIndex = (array , val) => {
//     const index = array.indexOf(val);
//     return index;
// }

//  var names = ['hassan', 'mehran', 'ali', user1.firstname];
//  const i = getIndex(names, 'ali');
//  console.log(i);

// user1.sayHello()

var print = array => {
    var hamid = 'hamid';

    if(array.length > 0) {
       let hamid = 'morteza';
        console.log(hamid);
    }

    console.log(hamid);
}
print([1,2]);