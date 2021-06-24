let obj = {"x":{"y":{"z":"a"}}};// creating a nested object
let keys = ['x', 'y', 'z'];// creating keys to find value in the nested object
let value = getValue(obj, keys);// using the getValue function, get the value of the nested object
console.log(value);// logging the value on the console

let obj1 = {"a":{"b":{"c":"d"}}};
let keys1 = ['a', 'b', 'c'];
let value1 = getValue(obj1, keys1);
console.log(value1);

function getValue(obj, keys){
// using reduce function that helps us flatten the object and then fetch the value using the key array
	let value = keys.reduce((acc,key)=>acc[key], obj);
	return value;
}