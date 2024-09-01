import bookService from "../service/bookService.js";
import bookView from "../view/bookView.js";

export async function init() {
  const book = await bookService.getBooks();
  bookView.render(book);
}
