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
  list.className = "listOfBooks";
  books.forEach(({ title, author, isbn, price, quantity, id, image }) => {
    const item = document.createElement("div");
    item.className = "book-container";
    item.innerHTML = `<a id="view-${id}" href="#" class="view">
                        <div class="book-card">

                          <div class="book-image">
                              <img src="/rsc/theCatcher.png" alt="Book Cover">
                          </div> 
                          
                          <!--div class="actions">
                              <a id="edit-${id}" href="#" class="edit"><img src="/rsc/pen.png" alt="trash"></a>
                              <a id="delete-${id}" href="#" class="delete"><img src="/rsc/trash.png" alt="trash"></a>
                          </div-->

                          <div class="book-details">
                              <div class="higlofishfa">
                              <p class="book-id"># ${id}</p>
                              <h2 class="book-title">${title}</h2>
                              <p class="book-author">${author}</p>
                              </div>
                            
                              <hr>

                              <div class="bottomPart">
                                  <div class="book-price">
                                    <span class="infoText">Price</span>
                                    <span class="price">${price}</span>
                                  </div>

                                  <div class="book-isbn">
                                      <span class="infoText">ISBN</span>
                                      <span class="isbn">${isbn}€</span>
                                  </div>

                                  <div class="book-unit">
                                      <span class="infoText">Units</span>
                                      <span class="book-quantity">${quantity}</span>
                                  </div>
                    
                                </div>
                            </div>
                        </div>
                      </a>`;
    list.appendChild(item);
  });

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
