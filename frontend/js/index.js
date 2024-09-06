import router from "./router.js";
import { searchBtn } from "../components/searchBtn.js";
import { sortBtnOrder } from "../components/sortBtn.js";

addEventListener("DOMContentLoaded", () => {
  router.init();

  searchBtn();
});
