const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // parent div
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  // headline div
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;
  // author div
  const author = document.createElement('div');
  author.classList.add('author');
  // author img container
  const authorImgContainer = document.createElement('div');
  authorImgContainer.classList.add('img-container');
  // author img
  const authorImg = document.createElement('img');
  authorImg.src = article.authorPhoto;
  // author name
  const authorNameSpan = document.createElement('span');
  authorNameSpan.textContent = article.authorName;

  // creat hiararchy
  cardDiv.appendChild(headline);
  cardDiv.appendChild(author);
  author.appendChild(authorImgContainer);
  authorImgContainer.appendChild(authorImg);
  author.appendChild(authorNameSpan);

  return cardDiv;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
