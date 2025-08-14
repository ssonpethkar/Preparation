const first = () => {
    const greet = 'Hi';
    
    const second = () => {
        const name = 'john';
        console.log(greet);
    }
    return second;
}

const newFunc = first();
newFunc();