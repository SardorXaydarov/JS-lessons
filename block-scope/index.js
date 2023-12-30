// Global scope
let ism= 'Sardor'
ism='Oybek'
if(true){
    let ism='Sardor'
    console.log(ism);
}
console.log(ism);
let age =16
age=18
console.log(age)
if(true){
    let age=19
    console.log(age)
    if(true){
        console.log('Ikkinchi else if ichi:', age)
    }
}
if(true){
    console.log('Tashqi else if ichi:' ,age);
    
}   