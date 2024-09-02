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

async function createBook(newBook) {
  try {
    const response = await fetch(`http://localhost:8080/bookStore/api/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (response.ok) {
      alert("Book has been created");
      router.navigate(routes.home.path); // Redirect to the book list page
      return;
    }

    console.error("Failed to create book:", await response.text());
  } catch (error) {
    console.error("Error creating book:", error);
  }
}

function clearFormFields() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

function render() {
  const container = document.querySelector("#container");
  container.innerHTML = "<br>";

  const form = document.createElement("form");
  form.setAttribute("method", "POST");
  form.setAttribute("action", "#");
  form.classList.add("book-form");

  // Form fields
  const titleField = createInput("text", "Title");
  const authorField = createInput("text", "Author");
  const isbnField = createInput("text", "ISBN");
  const publishedYearField = createInput("number", "Published Year");
  const quantityField = createInput("number", "Quantity", 1);
  const priceField = createInput("number", "Price", 10.0);
  priceField.setAttribute("step", "0.01");

  const publisherField = createInput("text", "Publisher");

  const synopsisField = document.createElement("textarea");
  synopsisField.name = "synopsis";
  synopsisField.rows = 4; // Set the number of rows to 4
  synopsisField.placeholder = "Enter synopsis...";

  const imageField = createInput("text", "Imagem Url");

  // Creating genre dropdown
  const genreSelect = document.createElement("select");
  genreData.forEach((genre) => {
    const option = document.createElement("option");
    option.textContent = genre;
    option.value = genre;
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
    { label: "ISBN", element: isbnField, errorId: "isbnError" },
    { label: "Genre", element: genreSelect, errorId: "genreError" },
    { label: "Publisher", element: publisherField, errorId: "publisherError" },
    { label: "Quantity", element: quantityField, errorId: "quantityError" },
    { label: "Price", element: priceField, errorId: "priceError" },
    { label: "Synopsis", element: synopsisField, errorId: "synopsisError" },
    { label: "Image Url", element: imageField, errorId: "imageUrlError" },
  ];

  fields.forEach(({ label, element, errorId }) => {
    form.appendChild(createLabel(label));
    form.appendChild(document.createElement("br"));
    form.appendChild(element);
    form.appendChild(document.createElement("br"));

    // Create and append error message element
    const error = document.createElement("span");
    error.id = errorId;
    error.classList.add("error-message");
    form.appendChild(error);
  });

  // Form validation logic
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const newBook = {
      title: titleField.value.trim(),
      author: authorField.value.trim(),
      isbn: isbnField.value.trim(),
      publishedYear: parseInt(publishedYearField.value, 10),
      publisher: publisherField.value,
      genre: genreSelect.value,
      quantity: parseInt(quantityField.value, 10),
      price: parseFloat(priceField.value),
      synopsis: synopsisField.value,
      imageUrl: imageField.value,
    };

    validate(newBook);
    // ISBN validation
    if (newBook.isbn.length < 9 || newBook.isbn.length > 13) {
      document.getElementById("isbnError").textContent =
        "ISBN must be between 9 and 13 characters.";
      document.getElementById("isbnError").style.display = "inline";
      isValid = false;
    } else {
      document.getElementById("isbnError").style.display = "none";
    }

    // If all fields are valid, send the updated data
    if (isValid) {
      await createBook(newBook);
      return;
    }
  });

  // Creating submit button
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Create";
  submitBtn.classList.add("submit-button");

  // Creating cancel button
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("cancel-button");

  cancelBtn.addEventListener("click", () => {
    clearFormFields();
    router.navigate(routes.home.path);
  });

  form.appendChild(submitBtn);
  form.appendChild(cancelBtn);
  container.appendChild(form);
}

export default { render };
