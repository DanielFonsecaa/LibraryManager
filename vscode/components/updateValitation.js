import { isValid } from "../js/view/form.js";

export function validate(book) {
  // Title validation
  if (book.title.length < 3) {
    document.getElementById("titleError").textContent =
      "Title must be at least 3 letters long.";
    document.getElementById("titleError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("titleError").style.display = "none";
  }

  // Author validation
  if (book.author.length < 3) {
    document.getElementById("authorError").textContent =
      "Author must be at least 3 letters long.";
    document.getElementById("authorError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("authorError").style.display = "none";
  }

  // Published Year validation
  if (isNaN(book.publishedYear) || book.publishedYear <= 0) {
    document.getElementById("publishedYearError").textContent =
      "Published Year must be a positive number.";
    document.getElementById("publishedYearError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("publishedYearError").style.display = "none";
  }

  // Publisher validation
  if (book.publisher.length === 0) {
    document.getElementById("publisherError").textContent =
      "Publisher is required.";
    document.getElementById("publisherError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("publisherError").style.display = "none";
  }

  // Quantity validation
  if (book.quantity < 0) {
    document.getElementById("quantityError").textContent =
      "Quantity must be a non-negative number.";
    document.getElementById("quantityError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("quantityError").style.display = "none";
  }

  // Price validation
  if (isNaN(book.price) || book.price < 1) {
    document.getElementById("priceError").textContent =
      "Price must be 1 or higher.";
    document.getElementById("priceError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("priceError").style.display = "none";
  }

  // Synopsis validation
  if (book.synopsis.length > 100) {
    document.getElementById("synopsisError").textContent =
      "Synopsis must be 100 characters or fewer.";
    document.getElementById("synopsisError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("synopsisError").style.display = "none";
  }
  const imageUrlRegex = /^https?:\/\/.*\.(png|jpg)$/i;
  // Image URL validation
  if (!imageUrlRegex.test(book.imageUrl)) {
    document.getElementById("imageUrlError").textContent =
      "Image URL must start with http:// or https:// and end with .png or .jpg.";
    document.getElementById("imageUrlError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("imageUrlError").style.display = "none";
  }
}
