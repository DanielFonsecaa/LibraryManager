export default {
  home: {
    path: "/",
    controller: "homeController",
  },
  currentPath: {
    path: "",
    controller: "",
  },
  form: {
    path: `/bookStore/api/form/\[0-9]+`,
    controller: "formController",
  },
  addForm: {
    path: `/bookStore/api/add`,
    controller: "addFormController",
  },
  book: {
    path: "/bookStore/api/books",
    controller: "bookController",
  },
  singleBook: {
    path: `/bookStore/api/books/\[0-9]+`,
    controller: "singleBookController",
  },
};
