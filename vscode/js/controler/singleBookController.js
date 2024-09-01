import bookService from "../service/bookService.js";
import singleBookView from "../view/singleBookView.js";
import { singleId } from "../view/bookView.js";

export async function init() {
  const book = await bookService.getBook(singleId);
  singleBookView.render(book);
}
