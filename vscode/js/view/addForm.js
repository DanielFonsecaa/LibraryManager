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
      router.navigate(routes.book.path); // Redirect to the book list page
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
  container.innerHTML = "<br>"; // Clears the previous content

  const form = document.createElement("form");
  form.setAttribute("method", "POST");
  form.setAttribute("action", "#");

  // Form fields
  const titleField = createInput("text", "Title");

  const authorField = createInput("text", "Author");

  const isbnField = createInput("text", "ISBN");

  const publishedYearField = createInput("number", "Published Year");
  const quantityField = createInput("number", "Quantity", 1);

  const priceField = createInput("number", "Price", 10.0);
  priceField.setAttribute("step", "0.01");

  const publisherField = createInput("text", "Publisher");

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
    { label: "Isbn", element: isbnField, errorId: "isbnError" },
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

    const newBook = {
      title: titleField.value.trim(),
      author: authorField.value.trim(),
      isbn: isbnField.value.trim(),
      publishedYear: parseInt(publishedYearField.value, 10),
      publisher: publisherField.value,
      genre: genreSelect.value,
      quantity: parseInt(quantityField.value, 10),
      price: parseFloat(priceField.value),
    };

    validate(newBook);

    // If all fields are valid, send the updated data
    if (isValid) {
      await createBook(newBook);
      return;
    }
  });

  // Creating submit button
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Create";

  // Creating cancel button
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    //Set the value of the input back to what it was

    clearFormFields();
    router.navigate(routes.book.path);
  });

  form.appendChild(submitBtn);
  form.appendChild(cancelBtn);
  container.appendChild(form);
}

export default { render };
