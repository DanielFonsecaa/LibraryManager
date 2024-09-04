import bookService from "../js/service/bookService.js";
import bookView from "../js/view/bookView.js";

function defaultBtnOrder() {
  const defaultBtn = document.querySelector(".default");
  if (defaultBtn) {
    defaultBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      try {
        const books = await bookService.getBooks();

        bookView.render(books);
      } catch (error) {
        console.log(error, "error fetching input value");
        throw error;
      }
    });
  } else {
    console.log("Button with ID 'default' not found.");
  }
}

export { defaultBtnOrder };
