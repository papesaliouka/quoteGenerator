const quoteBtn = document.getElementById('new-quote');
const quoteText= document.getElementById('quote');
const quoteAuthor= document.getElementById('author');
const author = document.getElementById('author');

let data = [];

const  getQuote = async () => {
    try{
        const apiUrl = fetch("https://type.fit/api/quotes")
        const response = await apiUrl
         data = await response.json();
         quoteAuthor.innerText=[data][0][Math.floor(Math.random() * (data.length))].author;
         quoteText.innerText= [data][0][Math.floor(Math.random() * (data.length))].text;
    }catch(error){
        console.log(error);
    }
}
getQuote();


quoteBtn.addEventListener('click', getQuote)