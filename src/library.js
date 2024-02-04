function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  }
};

// createLibrary function with a library object taht contains shelves array

// const createLibrary = libraryName => ({name: libraryName, shelves: {fantasy: [], fiction: [], nonFiction: []}});

function addBook(library, book) {
  // check if book.genre is equal to fantasy, push into fantasy shelf if so. repeated for other genres
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book);
  } else if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book);
  }
};

// addBook function pushes book to correct shelf if genre match

// const addBook = (library, book) => { 
//   if (book.genre === 'fantasy') {library.shelves.fantasy.push(book)}
//   else if (book.genre === 'fiction') {library.shelves.fiction.push(book)}
//   else if (book.genre === 'nonFiction') {library.shelves.nonFiction.push(book)}
// };

function checkoutBook(library, title, genre) {
  // first checks if genre is fantasy
  if (genre === 'fantasy') {
    // checks the entire length of fantasy shelf array one by one
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      // wants to know if the title you're looking if in fantasy shelf array
      if (title === library.shelves.fantasy[i].title) {
        // removes from fantasy shelf array if so
        library.shelves.fantasy.splice(i, 1);
        // returns confirmation message
        return `You have now checked out ${title} from the ${library.name}.`
      } 
    } 
  } else if (genre === 'fiction') {
      for (var i = 0; i < library.shelves.fiction.length; i++) {
        if (title === library.shelves.fiction[i].title) {
         library.shelves.fiction.splice(i, 1);
         return `You have now checked out ${title} from the ${library.name}.`
      } 
    } 
  } else if (genre === 'nonFiction') {
      for (var i = 0; i < library.shelves.nonFiction.length; i++) {
        if (title === library.shelves.nonFiction[i].title) {
         library.shelves.nonFiction.splice(i, 1);
         return `You have now checked out ${title} from the ${library.name}.`
    } 
  } 
} 
return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
};

// bowed out on trying this one. Too complicated for the moment.

function takeStock(library, genre) {
  // checks if gerne is fantasy
  if (genre === "fantasy") {
    // returns message containing length of fantasy shelf array from desired library
    return `There are a total of ${library.shelves.fantasy.length} ${genre} books at the ${library.name}.`
  } else if (genre === "ficion") {
    return `There are a total of ${library.shelves.fiction.length} ${genre} books at the ${library.name}.`
  } else if (genre === "nonFiction") {
    return `There are a total of ${library.shelves.nonFiction.length} ${genre} books at the ${library.name}.`
  }
  // if no genre given returns total of all genres
  return `There are a total of ${library.shelves.fantasy.length + library.shelves.fiction.length + library.shelves.nonFiction.length} books at the ${library.name}.`
};


// very similar to addBook, only returns numbers of book elements in fantasy array

// const takeStock = (library, genre) => {
//   if (genre === 'fantasy') return `There are a total of ${library.shelves.fantasy.length} ${genre} books at the ${library.name}.`
//   else if (genre === 'fiction') return `There are a total of ${library.shelves.fiction.length} ${genre} books at the ${library.name}.`
//   else if (genre === 'nonFiction') return `There are a total of ${library.shelves.nonFiction.length} ${genre} books at the ${library.name}.`
//   else return `There are a total of ${library.shelves.fantasy.length + library.shelves.fiction.length + library.shelves.nonFiction.length} books at the ${library.name}.`
// };


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};
