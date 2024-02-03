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

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book);
  } else if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book);
  }
};

function checkoutBook(library, title, genre) {
  if (genre === 'fantasy') {
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      if (title === library.shelves.fantasy[i].title) {
        library.shelves.fantasy.splice(i);
        return `You have now checked out ${title} from the ${library.name}.`
      } 
    } 
  } else if (genre === 'fiction') {
      for (var i = 0; i < library.shelves.fiction.length; i++) {
        if (title === library.shelves.fiction[i].title) {
         library.shelves.fiction.splice(i);
         return `You have now checked out ${title} from the ${library.name}.`
      } 
    } 
  } else if (genre === 'nonFiction') {
      for (var i = 0; i < library.shelves.nonFiction.length; i++) {
        if (title === library.shelves.nonFiction[i].title) {
         library.shelves.nonFiction.splice(i);
         return `You have now checked out ${title} from the ${library.name}.`
    } 
  } 
} 
return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
};

function takeStock(library, genre) {
  if (genre === "fantasy") {
    return `There are a total of ${library.shelves.fantasy.length} ${genre} books at the ${library.name}.`
  } else if (genre === "ficion") {
    return `There are a total of ${library.shelves.fiction.length} ${genre} books at the ${library.name}.`
  } else if (genre === "nonFiction") {
    return `There are a total of ${library.shelves.nonFiction.length} ${genre} books at the ${library.name}.`
  }
  return `There are a total of ${library.shelves.fantasy.length + library.shelves.fiction.length + library.shelves.nonFiction.length} books at the ${library.name}.`
};


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};
