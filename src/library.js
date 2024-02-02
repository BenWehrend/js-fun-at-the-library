function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
};

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  }
  else return;
};

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};
