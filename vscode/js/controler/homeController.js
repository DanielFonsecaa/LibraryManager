import homeView from "../view/bookView.js";
import bookService from "../service/bookService.js";

export async function init() {
  const book = await bookService.getBooks();
  homeView.render(book);
}
