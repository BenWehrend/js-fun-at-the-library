function createTitle(title) {
  return `The ${title}`;
};


function buildMainCharacter(name, age, pronouns) { 
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  };
};

function saveReview(reviewMessage, reviews) {
  var i;
  for (i = 0; i < reviews.length; i++) {
    if (reviews[i] === reviewMessage)
    return;
  };
  reviews.push(reviewMessage);
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
};

function writeBook(title, mainCharacter, genre) {
  var pageCount = calculatePageCount(title);
  return {
    title,
    mainCharacter,
    pageCount,
    genre,
  }
};

function editBook(newBook) {
  newBook.pageCount = newBook.pageCount * .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
