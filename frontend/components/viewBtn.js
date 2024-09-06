import { getSingleId, setSingleId } from "../js/view/bookView.js";

export function viewButtonListeners(router, routes) {
  const view = document.getElementsByClassName(`view`);

  [...view].forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.closest(".view");

      if (target.classList.contains("view")) {
        const idMatch = target.id.match(/view-(\d+)/);

        if (idMatch) {
          const id = idMatch[1];

          setSingleId(id);
          const dinamicPath = routes.singleBook.path;

          router.navigate(dinamicPath);
        }
      }
    });
  });
}
