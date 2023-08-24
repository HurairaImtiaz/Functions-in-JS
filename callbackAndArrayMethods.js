let numbers = [1,2,3,4,5,6,,8,9,10];
numbers.forEach(function(element){
    console.log(element);

})

numbers.forEach(function(element){
    if (element % 2 === 0)
    {
        console.log(element);
    }

})

const doubles = numbers.map(function(num){
    return num*2;
})

// arrow function 

 const greet = (str) => {console.log(`Hey ${str}`)}


greet ("hoor")

