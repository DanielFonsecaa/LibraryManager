import bookService from "../js/service/bookService.js";
import bookView from "../js/view/bookView.js";

async function selectBtnFilter(genre) {
  try {
    const books = await bookService.getBooks();
    const matchedBooks = books.filter((book) => book.genre === genre);
    bookView.render(matchedBooks);
  } catch (error) {
    console.log(error, "error fetching input value");
    throw error;
  }
}

export { selectBtnFilter };
