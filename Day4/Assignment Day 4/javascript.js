var quotes = [
    '“Get busy living or get busy dying.-Stephen King”', 
    '“Remember that the happiest people are not those getting more, but those giving more.”-H. Jackson Brown, Jr.', 
    '“Great minds discuss ideas; average minds discuss events; small minds discuss people.”-Eleanor Roosevelt', 
    '“Those who dare to fail miserably can achieve greatly.”-John F. Kennedy', 
    '“Challenges are what make life interesting and overcoming them is what makes life meaningful.”-Joshua J. Marine'] 
    
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById ('quoteDisplay').innerHTML = quotes[randomNumber];

var i=randomNumber;
   function newQuote() {
    
    document.getElementById ('quoteDisplay').innerHTML = quotes[i];
    i++;

    if (i>=quotes.length){
        i=0;
    }
}
    setInterval (newQuote, 3000);



    // function newQuote() {
//     var randomNumber = Math.floor(Math.random() * (quotes.length));
//     document.getElementById ('quoteDisplay').innerHTML = quotes[randomNumber];
// }