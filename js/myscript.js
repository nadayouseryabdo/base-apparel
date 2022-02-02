let x = document.getElementById('arr');
let y = document.getElementById('emaill');
let o = document.getElementById('out');
let big = document.getElementById('mil');
let er = document.getElementById('err');



function validation(e){
    e.preventDefault();
   let z = y.value;
   if(z.indexOf('@') == -1){
    o.innerHTML = 'please enter a valid email';
    big.style.borderColor ='#f007';
    er.style.visibility='visible';
   }
   if(z.indexOf('@') > 0){
    o.innerHTML = '';
    big.style.borderColor ='#0f08';
    er.style.visibility='hidden';
   }

}
x.onclick=validation;

window.onload= ()=>{
    y.value='';
}