import homeView from "../view/singleBookView.js";
import bookService from "../service/bookService.js";
import { singleId } from "../view/bookView.js";

export async function init() {
  const book = await bookService.getBook(singleId);
  homeView.render(book);
}
