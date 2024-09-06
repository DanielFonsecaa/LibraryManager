import router from "../router.js";
import routes from "../routes.js";
import { validate } from "../../components/updateValitation.js";
import {
  createInput,
  createLabel,
  genreData,
} from "../../components/updateFormUtils.js";

export let isValid = true;

async function updateBook(id, updatedBook) {
  try {
    const response = await fetch(
      `http://localhost:8080/bookStore/api/books/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      }
    );

    if (response.ok) {
      router.navigate(routes.singleBook.path);
    }
  } catch (error) {
    console.error("Error updating book:", error);
  }
}

function render(book) {
  const container = document.querySelector("#container");
  container.innerHTML = "<br>";

  const form = document.createElement("form");
  form.setAttribute("method", "put");
  form.setAttribute("action", "#");
  form.classList.add("book-form");

  const titleField = createInput("text", "Title", book.title);
  const authorField = createInput("text", "Author", book.author);
  const publishedYearField = createInput(
    "number",
    "Published Year",
    book.publishedYear
  );
  const quantityField = createInput("number", "Quantity", book.quantity);
  const priceField = createInput("number", "Price", book.price);
  priceField.setAttribute("step", "0.01");
  const publisherField = createInput("text", "Publisher", book.publisher);

  const genreSelect = document.createElement("select");
  genreData.forEach((genre) => {
    const option = document.createElement("option");
    option.textContent = genre;
    option.value = genre;
    if (genre === book.genre) option.selected = true;
    genreSelect.appendChild(option);
  });
  const synopsisField = document.createElement("textarea");
  synopsisField.name = "synopsis";
  synopsisField.rows = 4;
  synopsisField.placeholder = "Enter synopsis...";
  synopsisField.value = book.synopsis;

  const imageField = createInput("text", "Image URL", book.imageUrl);

  const fields = [
    { label: "Title", element: titleField, errorId: "titleError" },
    { label: "Author", element: authorField, errorId: "authorError" },
    {
      label: "Published Year",
      element: publishedYearField,
      errorId: "publishedYearError",
    },
    { label: "Genre", element: genreSelect, errorId: "genreError" },
    { label: "Publisher", element: publisherField, errorId: "publisherError" },
    {
      label: "Quantity",
      element: quantityField,
      errorId: "quantityError",
    },
    { label: "Price", element: priceField, errorId: "priceError" },
    { label: "Synopsis", element: synopsisField, errorId: "synopsisError" },
    { label: "Image Url", element: imageField, errorId: "imageUrlError" },
  ];

  fields.forEach(({ label, element, errorId }) => {
    form.appendChild(createLabel(label));
    form.appendChild(document.createElement("br"));
    form.appendChild(element);
    form.appendChild(document.createElement("br"));

    const error = document.createElement("span");
    error.id = errorId;
    error.classList.add("error-message");
    form.appendChild(error);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const updatedBook = {
      id: book.id,
      title: titleField.value.trim(),
      author: authorField.value.trim(),
      isbn: book.isbn,
      publishedYear: parseInt(publishedYearField.value, 10),
      publisher: publisherField.value,
      genre: genreSelect.value,
      quantity: parseInt(quantityField.value, 10),
      price: parseFloat(priceField.value),
      synopsis: synopsisField.value,
      imageUrl: imageField.value,
    };

    validate(updatedBook);

    if (isValid) {
      await updateBook(book.id, updatedBook);
      return;
    }
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("submit-button");

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("cancel-button");

  cancelBtn.addEventListener("click", () => {
    titleField.value = book.title;
    authorField.value = book.author;
    publishedYearField.value = book.publishedYear;
    genreSelect.value = book.genre;
    publisherField.value = book.publisher;
    quantityField.value = book.quantity;
    priceField.value = book.price;
    synopsisField.value = book.synopsis;
    imageField.value = book.imageUrl;

    router.navigate(routes.home.path);
  });

  form.appendChild(submitBtn);
  form.appendChild(cancelBtn);
  container.appendChild(form);
}

export default { render };
