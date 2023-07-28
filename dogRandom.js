
const dogDiv= document.getElementById('randomDog')
const dogB= document.getElementById('dogButton')
const random_Dog =()=>{
fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(json=>{console.log(json.message)
dogDiv.innerHTML=`<img src='${json.message}'/>`})}
dogB.onclick=()=>random_Dog()