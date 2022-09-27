// Find the required value in nested object
// Search the required value is present in object or not
// cerner_2tothe5th_2022

function* objectReader(obj){
    for(let key in obj){
        if(typeof obj[key] === "object"){
            yield *objectReader(obj[key]);
        }
        else{
            yield obj[key];
        }
    }
}

const it = objectReader({a: 1, b: 2, c: 3, d: { x: 4, y: 5, z: {m: 6, b: 7}}});
const searchValue = 5;

for(let value of it){
    if(value === searchValue) {
        console.log(searchValue + " exists");
    }
}
