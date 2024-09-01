import router from "../router.js";
import routes from "../routes.js";
import { validate } from "../../components/updateValitation.js";
import {
  createInput,
  createLabel,
  genreData,
} from "../../components/updateFormUtils.js";

// Validation
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
      router.navigate(routes.book.path);
    }
  } catch (error) {
    console.error("Error updating book:", error);
  }
}

function render(book) {
  const container = document.querySelector("#container");
  container.innerHTML = "<br>"; // Clears the previous content

  const form = document.createElement("form");
  form.setAttribute("method", "put");
  form.setAttribute("action", "#");

  // Form fields
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

  // Creating genre dropdown
  const genreSelect = document.createElement("select");
  genreData.forEach((genre) => {
    const option = document.createElement("option");
    option.textContent = genre;
    option.value = genre;
    if (genre === book.genre) option.selected = true;
    genreSelect.appendChild(option);
  });

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
    { label: "Quantity", element: quantityField, errorId: "quantityError" },
    { label: "Price", element: priceField, errorId: "priceError" },
  ];

  fields.forEach(({ label, element, errorId }) => {
    form.appendChild(createLabel(label));
    form.appendChild(document.createElement("br"));
    form.appendChild(element);
    form.appendChild(document.createElement("br"));

    // Create and append error message element
    const error = document.createElement("span");
    error.id = errorId;
    error.style.color = "red";
    error.style.display = "none";
    form.appendChild(error);
  });

  // Form validation logic
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const updatedBook = {
      id: book.id, // Ensure this matches server expectations
      title: titleField.value.trim(),
      author: authorField.value.trim(),
      isbn: book.isbn, // Make sure this field is valid or required
      publishedYear: parseInt(publishedYearField.value, 10),
      publisher: publisherField.value,
      genre: genreSelect.value,
      quantity: parseInt(quantityField.value, 10),
      price: parseFloat(priceField.value),
    };

    //Validation
    validate(updatedBook);

    // If all fields are valid, send the updated data
    if (isValid) {
      await updateBook(book.id, updatedBook);
      return;
    }
  });

  // Creating submit button
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";

  // Creating cancel button
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    //Set the value of the input back to what it was
    titleField.value = book.title;
    authorField.value = book.author;
    publishedYearField.value = book.publishedYear;
    genreSelect.value = book.genre;
    publisherField.value = book.publisher;
    quantityField.value = book.quantity;
    priceField.value = book.price;

    router.navigate(routes.book.path);
  });

  form.appendChild(submitBtn);
  form.appendChild(cancelBtn);
  container.appendChild(form);
}

export default { render };
