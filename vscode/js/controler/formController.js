import bookService from "../service/bookService.js";
import formView from "../view/form.js";
import { singleId } from "../view/bookView.js";

export async function init() {
  const book = await bookService.getBook(singleId);

  formView.render(book);
}
