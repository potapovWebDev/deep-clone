const obj = {
    a: 'one',
    b: 'two',
    number: {
        one: 1,
        two: 2
    }
};

const clone = JSON.parse(JSON.stringify(obj));
clone.number.two = 5;
console.log(obj);
console.log(clone);