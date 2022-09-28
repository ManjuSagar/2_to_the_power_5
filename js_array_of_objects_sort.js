//Javascript closure example, where it will sort the array of objects using any one property of object
//A closure is the combination of a function and the lexical environment (scope) -
// - within which that function was declared
// cerner_2tothe5th_2022


function by(propName) {
    return function(a, b) {
        return a[propName] - b[propName];
    }
}

const person1 = {name: 'manju', height: 22};
const person2 = {name: 'sagar', height: 30};
const person3 = {name: 'ms', height: 26};

const arr_ = [person1, person2, person3];

const arr_sorted = arr_.sort(by('height'));
// array sort function works only for string, For integer comparision we need to pass - 
// - comparision function which can be passed with the help of closure function


//When we run the above example above code will be like this
//[ { name: 'manju', height: 22 }, { name: 'ms', height: 26 },{ name: 'sagar', height: 30 } ]
