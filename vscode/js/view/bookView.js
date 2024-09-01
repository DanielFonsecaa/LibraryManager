import router from "../router.js";
import routes from "../routes.js";
import { deleteButtonListeners } from "../../components/deleteBtn.js";
import { editButtonListeners } from "../../components/editBtn.js";
import { viewButtonListeners } from "../../components/viewBtn.js";

export let singleId = null; // Declare the shared singleId variable

// Function to get the current singleId
export function getSingleId() {
  return singleId;
}

// Function to set the singleId
export function setSingleId(id) {
  singleId = id;
}

function render(books) {
  const container = document.querySelector("#container");
  container.innerHTML = "<br>"; //removes the previous elements
  const list = document.createElement("div");
  list.className = `text-center bookCard`;

  books.forEach(
    ({
      title,
      author,
      isbn,
      publishedYear,
      genre,
      publisher,
      price,
      quantity,
      id,
    }) => {
      const item = document.createElement("div");
      item.style.fontSize = "x-small";
      item.innerHTML = `<div id="info-${id}" class="card fullCard text-white bg-dark mb-3" style="width: 18rem;border: 2px solid black;">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                    <p>author: ${author}</p>
                    <p>isbn: ${isbn}</p>
                    <p>publishedYear: ${publishedYear}</p>
                    <p>genre: ${genre}</p>
                    <p>publisher: ${publisher}</p>
                    <p>price: € ${price}</p>
                    <p>quantity: ${quantity}</p>
                    </p>
                    <div class="button-container">
                      <a id="view-${id}" href="#" class="a-view view"><i class="fa-solid fa-eye fa-3x" style="color: #63E6BE;"></i></a>
                      <a id="edit-${id}" href="#" class="a-edit edit"><i class="fa-solid fa-pen-fancy fa-3x" style="color: #1c71d8;"></i></a>
                      <a id="delete-${id}" href="#" class="a-delete delete"><i class="fa-solid fa-trash-can fa-3x" style="color: #c01c28;"></i></a>
                    </div>

            </div>
    </div>`;

      list.appendChild(item);
    }
  );

  const addBookAnchor = document.createElement("div");
  addBookAnchor.className = "addBook";
  addBookAnchor.innerHTML = `<a class="addAchor" href="#">
                              <i class="fa-solid fa-square-plus fa-2xl" style="color: #2ec27e;"></i>
                              Add new book
                              </a>`;

  addBookAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.closest(".addAchor");
    router.navigate(routes.addForm.path);
  });

  container.appendChild(addBookAnchor);
  container.appendChild(list);
  viewButtonListeners(router, routes);

  editButtonListeners(router, routes);

  deleteButtonListeners();
}

export default { render };
