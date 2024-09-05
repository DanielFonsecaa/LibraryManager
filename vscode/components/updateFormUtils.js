export function createInput(type, placeholder, value) {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  input.value = value || "";
  return input;
}

export function createLabel(text) {
  const label = document.createElement("label");
  label.textContent = text;
  return label;
}

export const genreData = [
  "Adventure",
  "Dystopian",
  "Fantasy",
  "Fiction",
  "Historical",
  "History",
  "Nonfiction",
  "Romance",
  "Satire",
  "Science",
  "Tragedy",
];
