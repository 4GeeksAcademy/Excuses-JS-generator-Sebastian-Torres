let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomOption(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExcuse(){
    const excuseHtml = document.getElementById('excuse');
    excuseHtml.textContent = `${getRandomOption(who)} ${getRandomOption(action)} ${getRandomOption(what)} ${getRandomOption(when)}`
};

generateExcuse()