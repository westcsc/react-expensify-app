const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Bruce West',
            age: 63
        });
        // reject('Something went wrong');
    }, 2500);
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
    return 'some data';
}).then((str) => {
    console.log('Does this run?', str);
}).catch ((error) => {
    console.log(error)
});

console.log('After');
