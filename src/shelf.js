function shelfBook(book, shelf) {
  // checks for shelf length
  if (shelf.length < 3) {
    // add book to fron of shelf if conditions met
    shelf.unshift(book)
  }
};

// const shelfBook = (book, shelf) => { if (shelf.length < 3) {shelf.unshift(book)}};

function unshelfBook(title, shelf) {
  // checks length of shelf array
  for (var i = 0; i < shelf.length; i++) {
    // wants to know if title matches one in shelf
    if (shelf[i].title === title) {
      // removes title using splice if so
      shelf.splice(i, 1);
      return
    } 
  } 
};

// const unshelfBook = (title, shelf) => { for (var i = 0; i < shelf.length; i++) { if (shelf[i].title === title) shelf.splice(i, 1)} return; };

function listTitles(shelf) {
  // creates empty variable
  var bookList = "";
  // checks length of shelf array
  for (var i = 0; i < shelf.length; i++) {
    // += (addition assigment operator) adds bookList to the front of elements in shelf title array
    bookList += shelf[i].title;
    // 
    if (i < shelf.length - 1) {
      // adds string to beggining of bookList, so as long it's one less than array length
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
