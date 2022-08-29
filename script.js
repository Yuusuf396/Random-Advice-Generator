const quotesGenerator = document.getElementById("qoutes_gen");
 
const adviceID = document.querySelector(".advice_id");
const adviceText = document.querySelector(".advice_text");
const advice = document.querySelector(".advice");
const div = document.querySelector("#text");

 

const renderAdvice = (data) => {
    adviceID.innerText = `Advice ID: ${data.slip.id}`;
    adviceText.innerText = `"${data.slip.advice}"`
};
const renderSpinner = () => {
    const html = `
<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`;
    div.innerHTML = html  
};
 
const TIMEOUT_SEC = 2;
function disableButton() {
    quotesGenerator.disabled = true;
    setTimeout(function () { quotesGenerator.disabled = false; },  3000);
}

const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(res);
    if (res.ok === true) {
        quotesGenerator.addEventListener('click', renderAdvice(data))
        quotesGenerator.addEventListener('click', renderSpinner());
         
        disableButton();
        div.innerHTML = '';  
    }  
};


quotesGenerator.addEventListener('click', function () {
    renderSpinner(); 
    fetchAdvice();

});
 
 
