import router from "./router.js";
import bookService from "../js/service/bookService.js";
import bookView from "./view/bookView.js";

function keyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    let searchBtn = document.getElementsByClassName("searchSubmit");
    [...searchBtn].forEach((button) => button.click());
  }
}

addEventListener("DOMContentLoaded", () => {
  router.init();

  const searchBigScreen = document.getElementById("inputBtn");
  const searchSmallScreen = document.getElementById("inputNav");
  const searchBtn = document.getElementsByClassName("searchSubmit");
  const searchDiv = document.querySelector(".searchNav");

  searchBigScreen.addEventListener("keydown", keyDown);
  searchSmallScreen.addEventListener("keydown", keyDown);

  [...searchBtn].forEach((elem) => {
    elem.addEventListener("click", async (e) => {
      e.preventDefault();
      let query = "";

      if (window.getComputedStyle(searchDiv).display !== "none") {
        query = searchBigScreen.value;
      } else {
        query = searchSmallScreen.value;
      }

      if (query != "") {
        try {
          const books = await bookService.getBooks();

          const matchedBooks = books.filter((book) => {
            const titleMatch = book.title.toLowerCase().includes(query);
            const authorMatch = book.author.toLowerCase().includes(query);
            const yearMatch = book.publishedYear.toString().includes(query);
            const isbnMatch = book.isbn.toString().includes(query);
            const publiserMatch = book.publisher.toLowerCase().includes(query);

            return (
              titleMatch ||
              authorMatch ||
              yearMatch ||
              isbnMatch ||
              publiserMatch
            );
          });

          bookView.render(matchedBooks);

          searchBigScreen.value = "";
          searchSmallScreen.value = "";
        } catch (error) {
          console.log(error, "error fetching input value");
          throw error;
        }
      }
    });
  });
});
