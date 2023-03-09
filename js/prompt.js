//alert('How are you?')
const showAlert = () =>{
    alert('dosto taka ache dhar dite parbi?just 500!')
}
const lendMoney = () =>{
   const result = confirm('will you lend me 5000 Taka?')
   
   if(result === true){
    alert('tui amr janer dosto~!!!')
   }
   else{
    console.log(['DGM...... tor sathe amar kono relation nai'])
   }
}
const getInfo = () =>{
const name = prompt('Tell me Your information')
console.log(name);
if(name === null){
    alert ('Nam na dile kam nai jaah fooottt!')
}
else{
    console.log(name, 'welcome to this world!!');
}
}


