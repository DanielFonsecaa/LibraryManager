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
    path: `/bookStore/api/form/:id`,
    controller: "formController",
  },
  addForm: {
    path: `/bookStore/api/add`,
    controller: "addFormController",
  },
  singleBook: {
    path: `/bookStore/api/books/:id`,
    controller: "singleBookController",
  },
};
