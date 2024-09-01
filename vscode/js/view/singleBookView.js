import router from "../router.js";
import routes from "../routes.js";

function render(book) {
  const buttonContainer = document.querySelector("#button-container");
  const container = document.querySelector("#container");
  const div = document.createElement("div");

  container.innerHTML = ""; //removes the previous elements

  const elem = document.createElement("div");
  elem.id = "personalCard";
  elem.className = `text-center`;
  elem.style = "text-align: center; justify-content: center;";
  elem.innerHTML = `<div class="card text-white bg-dark mb-3" style="width: 18rem;border: 2px solid black;">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">
                    <p>author: ${book.author}</p>
                    <p>isbn: ${book.isbn}</p>
                    <p>publishedYear: ${book.publishedYear}</p>
                    <p>genre: ${book.genre}</p>
                    <p>publisher: ${book.publisher}</p>
                    <p>price: € ${book.price}</p>
                    <p>quantity: ${book.quantity}</p>
                    </p>
                    <button id="goBack" class="btn btn-primary">Go back</button>
            </div>
    </div>`;
  if (container.childElementCount > 1) {
    container.removeChild(container.lastChild);
  }
  container.appendChild(elem);

  container.appendChild(div);
  const goBackButton = document.getElementById(`goBack`); // Get specific button
  goBackButton.addEventListener("click", () => {
    router.navigate(routes.book.path);
  });
}

export default { render };
