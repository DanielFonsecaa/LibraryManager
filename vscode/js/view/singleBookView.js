import router from "../router.js";
import routes from "../routes.js";
import { deleteButtonListeners } from "../../components/deleteBtn.js";
import { editButtonListeners } from "../../components/editBtn.js";

function render(book) {
  const container = document.querySelector("#container");

  container.innerHTML = "";
  const elem = document.createElement("div");
  elem.id = "personalCard";
  elem.innerHTML = `
                <div class="singleBook-card">

                    <div class="book-image">
                        <img src="${book.imageUrl}" alt="Book Cover">
                    </div> 
                    
                    <div class="actions">
                        <a id="goBack" href="#" class="back"><i class="fa-regular fa-circle-left fa-xl"></i></a>
                        <a id="edit-${book.id}" href="#" class="edit"><img src="/rsc/pen.png" alt="trash"></a>
                        <a id="delete-${book.id}" href="#" class="delete"><img src="/rsc/trash.png" alt="trash"></a>
                    </div>

                    <div class="single-book-details">
                        <div class="primaryInfo">
                        <p class="infoText infoId"># ${book.id}</p>
                        <h2 class="book-title">${book.title}</h2>
                        <p class="book-author">${book.author}</p>
                    </div>
                        
                    <hr>

                    <div class="midlePart">
                        <div class="single-book-price">
                          <span class="infoText">Price</span>
                          <span class="price">${book.price}€</span>
                        </div>

                        <div class="single-book-isbn">
                          <span class="infoText">ISBN</span>
                          <span class="isbn">${book.isbn}</span>
                        </div>

                        <div class="single-book-unit">
                          <span class="infoText">Units</span>
                          <span class="book-quantity">${book.quantity}</span>
                        </div>
                    </div>

                    <div class="bottomPart">
                        <div class="book-publisher">
                          <span class="infoText">Publisher</span>
                          <span class="publisher">${book.publisher}</span>
                        </div>
        
                        <div class="book-year">
                          <span class="infoText">Year</span>
                          <span class="year">${book.publishedYear}</span>
                        </div>
        
                        <div class="book-genre">
                          <span class="infoGenre">Genre</span>
                          <span class="genre">${book.genre}</span>
                        </div>
                
                    </div>

                    <div class="synopse">
                      <p class="synopseText">${book.synopsis}</p>
                    </div>

                </div>`;

  container.appendChild(elem);

  const goBackButton = document.getElementById(`goBack`);
  goBackButton.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate(routes.home.path);
  });
  editButtonListeners(router, routes);
  deleteButtonListeners(router, routes);
}

export default { render };
