let inputEle = document.getElementById('inputfield');
let clickbtn = document.querySelector('.btn');
let todofirst = document.getElementsByClassName('todofirst');
const addToDO = ()=>{
    console.log(inputEle);
    todofirst.textContent = inputEle.value;
}
clickbtn.addEventListener("click",()=>{
    addToDO();
})