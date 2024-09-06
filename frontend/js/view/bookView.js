import router from "../router.js";
import routes from "../routes.js";
import { viewButtonListeners } from "../../components/viewBtn.js";
import { sortBtnOrder } from "../../components/sortBtn.js";
import { defaultBtnOrder } from "../../components/defaultBtn.js";
import { genreData } from "../../components/updateFormUtils.js";
import { selectBtnFilter } from "../../components/selectBtn.js";

export let singleId = null;

export function getSingleId() {
  return singleId;
}

export function setSingleId(id) {
  singleId = id;
}

function render(books) {
  const container = document.querySelector("#container");

  container.innerHTML = "<br class='br'>";
  const sortBtns = document.createElement("div");

  sortBtns.className = "btnToSort";
  sortBtns.innerHTML = `
    <button class="default">Default</button>
    <button class="sortOrder">Order A-Z</button>
    <select class="sortGenre"> Select Genre</select>
  `;
  container.appendChild(sortBtns);

  const sortBtn = document.querySelector(".sortOrder");
  sortBtn.addEventListener("click", sortBtnOrder());

  const defaultBtn = document.querySelector(".default");
  defaultBtn.addEventListener("click", defaultBtnOrder());

  const selectBtn = document.querySelector(".sortGenre");

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Filter by Genre";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectBtn.appendChild(defaultOption);

  genreData.forEach((genre) => {
    const option = document.createElement("option");
    option.textContent = genre;
    option.value = genre;
    selectBtn.appendChild(option);
  });

  selectBtn.addEventListener("change", (e) => {
    const selectedGenre = e.target.value;
    if (selectedGenre) {
      selectBtnFilter(selectedGenre);
      selectBtn.value = selectedGenre;
    }
  });

  const list = document.createElement("div");
  list.className = "listOfBooks";
  books.forEach(({ title, author, isbn, price, quantity, id, imageUrl }) => {
    const item = document.createElement("div");
    item.className = "book-container";
    item.innerHTML = `<a id="view-${id}" href="#" class="view">
                        <div class="book-card">

                          <div class="book-image">
                              <img src="${imageUrl}" alt="Book Cover">
                          </div> 
                          
                          <!--div class="actions">
                              <a id="edit-${id}" href="#" class="edit"><img src="/rsc/pen.png" alt="trash"></a>
                              <a id="delete-${id}" href="#" class="delete"><img src="/rsc/trash.png" alt="trash"></a>
                          </div-->

                          <div class="book-details">
                              <div class="primaryInfo">
                              <p class="infoText"># ${id}</p>
                              <h2 class="book-title">${title}</h2>
                              <p class="book-author">${author}</p>
                              </div>
                            
                              <hr>

                              <div class="midlePart">
                                  <div class="book-price">
                                    <span class="infoText">Price</span>
                                    <span class="price">${price}€</span>
                                  </div>

                                  <div class="book-isbn">
                                      <span class="infoText">ISBN</span>
                                      <span class="isbn">${isbn}</span>
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
  addBookAnchor.innerHTML = `<a class="addAnchor" href="#">
                              <i class="fa-solid fa-square-plus fa-2xl" style="color: #2ec27e;"></i>
                              Add new book
                              </a>`;
  addBookAnchor.addEventListener("click", (e) => {
    if (e.target.closest(".addAnchor")) {
      e.preventDefault();
      router.navigate(routes.addForm.path);
    }
  });

  container.appendChild(addBookAnchor);
  container.appendChild(list);
  viewButtonListeners(router, routes);
}

export default { render };
