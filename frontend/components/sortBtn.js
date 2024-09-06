import bookService from "../js/service/bookService.js";
import bookView from "../js/view/bookView.js";

function sortBtnOrder() {
  const sortBtn = document.querySelector(".sortOrder");
  if (sortBtn) {
    sortBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      try {
        const books = await bookService.getBooks();

        const matchedBooks = books.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        bookView.render(matchedBooks);
      } catch (error) {
        console.log(error, "error fetching input value");
        throw error;
      }
    });
  } else {
    console.log("Button with ID 'sortOrder' not found.");
  }
}

export { sortBtnOrder };
