import homeView from "../view/homeView.js";
import bookService from "../service/bookService.js";

export async function init() {
  try {
    const characters = bookService.getBook;
    homeView.render(characters);
  } catch (error) {
    console.error("Error fetching character:", error);
  }
}
