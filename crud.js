// delete objects

let obj = {a:1,b:2,c:3,d:4,e:5};

let toDeleteKeys = ["a","b"]

let newObj = Object.keys(obj).reduce((accumulator,value) =>{

    if(!toDeleteKeys.includes(value) ){
        accumulator[value] = obj[value]
    }
    return accumulator
},{})

console.log(newObj)


// add Objects

obj.z = 26;
obj.a=20
console.log(obj)




// shallow copy


let originalCopy = {a:222,b:32,c:{cd:45},d:67};

let shallowCopy = {...originalCopy}

shallowCopy.a = 22;
shallowCopy.c.cd=65
console.log(originalCopy);
console.log(shallowCopy)


// deep copy

let obj2 ={a:23, b:43 ,c:{ca:12}}

let deepCopy = JSON.parse(JSON.stringify(obj2));

deepCopy.a=90;
deepCopy.c.ca = 56;

console.log(obj2);
console.log(deepCopy)