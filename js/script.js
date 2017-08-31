
//To print quotes
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/* Creat function named getRandomQuote which selects random quote from the
quotes array and also returns randomly selected quote object
 */
function getRandomQuote() {
      var viewedQuote = [];
      let randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
        if (viewedQuote.length === quotes.length) {
            viewedQuote = []
        }

        if (viewedQuote.contains(randomQuote === false)) {
            viewedQuote.push(randomQuote);
            console.log(randomQuote);
            return randomQuote;
        }   else {
            getRandomQuote();
        }
}

/* Directons: Create function named printQuote
    - printQuote should call getRandomQuote function and store returned quote
    object in a variable
    - printQuote should construct a string that contains different properties
    of the quote object
// ERROR: when i click the show quote button, it doesn't print any quotes nor generate randomly.
even though i wrote 'quote-box' div element.
*/

function printQuote (getRandomQuote) {
  document.getElementById('quote-box').innerHTML;
  }

// array containing objects

function getRandomQuote () {
  var viewedQuote = [];
  var quotes = [
  {
    quote: 'All that is gold does not glitter, Not all those who wander are lost.',
    source: 'J.R.R. Tolkien',
    citation: 'The Fellowship of the Ring',
    year: 'July 29, 1954',
  },
  {
    quote: "There's something about arriving in new cities, wandering empty streets with no destination. I will never lose the lover for the arriving, but I'm born to leave.",
    source: "Charlotte Erikson",
    citation: 'Empty Roads & Broken Bottles',
    year: 'April 22, 2013',
    tags: 'wanderlust'
  },
  {
    quote: 'He found himself wondering at times, especially in the autumn, about the wild lands, and strange visions of mountains that he had never seen came into his dreams.',
    source: 'J.R.R. Tolkien,',
    citation: 'The Fellowship of the Ring',
    year: 'July 29, 1954',
  },
  {
    quote: "You don't even know where I'm going. <p> I don't care. I'd like to go anywhere. </p>",
    source: 'John Steinbeck,',
    citation: ' Travels with Charley: In Search of America',
    year: 'February 5, 2002',
  },

  {
    quote: 'Travel far enough, you meet yourself.',
    source: 'David Mitchelle,',
   citation: 'Cloud Atlas',
    year: 'August 17, 2004',
  }

];
}

/* ----------------------IGNORE BELOW--------------------

var postQuote =   '<p class ="quote">' + quotes.quote + '</p>';
  '<p class ="source">' + quotes.source + '</p>';
document.getElementById('quote-box').innerHTML = postQuote;
----
  var toPrintquote = getRandomQuote()
  console.log(toPrintquote);
  var postQuote =   '<p class ="quote">' + quotes.quote + '</p>';
    '<p class ="source">' + quotes.source + '</p>';
  document.getElementById('quote-box').innerHTML = postQuote;
*/

/* not sure about this cluster

var getRandomQuote = function(){
    var i = 1;
    for(i=0; i<quotes; i++);
    var nextQuote = quotes[Math.floor(Math.random()* quotes.length-1)]; //this isn't working
  }
console.log(getRandomQuote)
----
return quotes[Math.floor(Math.random() * quotes.length)];
var viewedQuote = [];
if (viewedQuote.length === getRandomQuote.length)
{
  viewedQuote = []
}
if (viewedQuote.includes(randomQuote) === false) {
viewedQuote.push(randomQuote);
return randomQuote;
}
else { getRandomQuote()
}
}
*/
