const quotesGenerator = document.getElementById("qoutes_gen");
 
const adviceID = document.getElementById("advice_id");
const adviceText = document.getElementById("advice_text");
const advice = document.querySelector("advice");

 
 
const renderAdvice = (data) => {
    adviceID.innerText = `Advice ID: ${data.slip.id}`;
    adviceText.innerText = `"${data.slip.advice}"`
};


quotesGenerator.addEventListener('click',    
    fetchAdvice = async () => {    
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    quotesGenerator.addEventListener('click', renderAdvice(data));  

});             
 
