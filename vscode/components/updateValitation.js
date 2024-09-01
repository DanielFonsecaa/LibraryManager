import { isValid } from "../js/view/form.js";

export function validate(book) {
  // Title validation
  if (book.title.length < 3) {
    document.getElementById("titleError").textContent =
      "Title must be at least 3 letters long.";
    document.getElementById("titleError").style.display = "inline";
    isValid = false;
  }

  // Author validation
  if (book.author.length < 3) {
    document.getElementById("authorError").textContent =
      "Author must be at least 3 letters long.";
    document.getElementById("authorError").style.display = "inline";
    isValid = false;
  }

  // Isbn validation
  if (book.isbn.length < 9 || book.isbn.length > 13) {
    document.getElementById("authorError").textContent =
      "Isbn must be between 9 and 13.";
    document.getElementById("isbnError").style.display = "inline";
    isValid = false;
  }

  // Published Year validation
  if (isNaN(book.publishedYear)) {
    document.getElementById("publishedYearError").textContent =
      "Published Year must be a positive number.";
    document.getElementById("publishedYearError").style.display = "inline";
    isValid = false;
  }

  // Publisher validation
  if (book.publisher.length === 0) {
    document.getElementById("publisherError").textContent =
      "Publisher is required.";
    document.getElementById("publisherError").style.display = "inline";
    isValid = false;
  }

  // Quantity validation
  if (book.quantity < 0) {
    document.getElementById("quantityError").textContent =
      "Quantity must be a non-negative number.";
    document.getElementById("quantityError").style.display = "inline";
    isValid = false;
  }

  // Price validation
  if (isNaN(book.price) || book.price < 1) {
    document.getElementById("priceError").textContent =
      "Price must 1 or higher";
    document.getElementById("priceError").style.display = "inline";
    isValid = false;
  }
}
