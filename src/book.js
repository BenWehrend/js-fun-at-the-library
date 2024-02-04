function createTitle(title) {
  return `The ${title}`
};

// found arrow function method, but left original solutions

// creates function (createTitle) sets parameter(title) returns interpolated message (`The ${title}`)
// const createTitle = title => `The ${title}`;

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
};

// mainCharacter function that creates an object
// const buildMainCharacter = (name, age, pronouns) => ({name, age, pronouns});

function saveReview(reviewMessage, reviews) {
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i] === reviewMessage) {
      return;
    }
  } 
  reviews.push(reviewMessage);
};

// saveReview function has 2 parameters
// reviews.indexOf checks to see if elemeent (reviewMessage) exists in array
// if -1 returned, then review isn't in array so is therefore unique and is pushed onto reviews array

// const saveReview = (reviewMessage, reviews) => {
//   if (reviews.indexOf(reviewMessage) === -1) {
//     reviews.push(reviewMessage);
//   }
// };

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

// let calculatePageCount = bookTitle => bookTitle.length * 20;

function writeBook(title, character, genre) {
  return {
    title: title,
    mainCharacter: character,
    genre: genre,
    pageCount: calculatePageCount(title),
  }
};

// let writeBook = (t, mC, g) => ({title: t, mainCharacter: mC, genre: g, pageCount: calculatePageCount(t)})

function editBook(book) {
  book.pageCount = book.pageCount * .75;
};

// let editBook = book => book.pageCount = book.pageCount * .75;

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
