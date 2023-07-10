const sq = (x) => {return x*x};
function f(a,b){
    let sum = 0;
    for(i of a){
        sum+=i;
    }
    return b(sum);
}
console.log(f([1,2,3,4],sq));
console.log(f([1,2,3,4],(x) => {
    return x*x*x;
})); // anonymous function

//currying --- function returning function
let getArea = (shape_type) => {
    if(shape_type === 'circle')
    {
        return (r) => {
            return 3.14*r*r;
        }
    }
    else if(shape_type === 'rectangle'){
        return (l,b) => {
            return l*b;
        }
    }
    else if(shape_type === 'square'){
        return (s) => {
            return s*s;
        }
    }
}

console.log(getArea('circle')(10));

function* getOddNums(limit){
    let i = 1;
    while(i<= limit)
    {
        // console.log(i);
        yield i; // pause the execution of the function and return the value
        // returns a generator object

        // useful in Stream processing
       i+=2; 
    }
}

let x = getOddNums(10); //generator object
console.log(typeof(x));
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);

// NULLISH COALESCING operator(??)
let y=10;
let andvadjnvj;
console.log(andvadjnvj ?? y); // as andvadjnvj is undefined, it will return y