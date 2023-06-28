import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'
import data from './components/article/article.js'

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>
*/ 
function articleMaker (article) {

    let articleElement = document.createElement("div");

    let h2 = document.createElement("h2");
    articleElement.appendChild(h2);
    h2.textContent = article.title;

    let p = document.createElement("p");
    articleElement.appendChild(p);
    p.setAttribute("class", "date");
    p.textContent = article.date;

    let p1 = document.createElement('p');
    articleElement.appendChild(p1);
    let p2 = document.createElement('p');
    articleElement.appendChild(p2);
    let p3 = document.createElement('p');
    articleElement.appendChild(p3);

    p1.textContent = article.firstParagraph;
    p2.textContent = article.secondParagraph;
    p3.textContent = article.thirdParagraph;

    let span = document.createElement('span');
    span.setAttribute("class", "expandButton");
    span.textContent = '+';
    span.addEventListener("click", (event) => {
        event.target.classList.toggle("article-open");
    })
    articleElement.appendChild(span);

    return articleElement;

}

/*
Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
This listener should toggle the class 'article-open' on div.article.

Step 3: Don't forget to return something from your function!

Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
to create a div.article element and append it to the DOM inside div.articles (see index.html).

*/
console.log(data);

data.forEach((element) => {
let action = articleMaker(element);
document.body.appendChild(action);
});

/*

Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
Refresh the page to see the new article.
*/

