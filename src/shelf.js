function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
};

// const shelfBook = (book, shelf) => { if (shelf.length < 3) {shelf.unshift(book)}};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
      return
    } 
  } 
};

// const unshelfBook = (title, shelf) => { for (var i = 0; i < shelf.length; i++) { if (shelf[i].title === title) shelf.splice(i, 1)} return; };

function listTitles(shelf) {
  var bookList = "";
  for (var i = 0; i < shelf.length; i++) {
    bookList += shelf[i].title;
    if (i < shelf.length - 1) {
      bookList += ", "
    }
  } 
  return bookList
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true
    } 
  } 
  return false;
};

// const searchShelf = (shelf, title) => { for (var i = 0; i < shelf.length; i++) { if (shelf[i].title === title) { return true } } return false;


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
