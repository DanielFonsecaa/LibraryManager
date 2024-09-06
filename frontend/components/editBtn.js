import { getSingleId, setSingleId } from "../js/view/bookView.js";

export function editButtonListeners(router, routes) {
  const editAnchors = document.getElementsByClassName("edit");

  [...editAnchors].forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.closest(".edit");

      if (target) {
        const idMatch = target.id.match(/edit-(\d+)/);

        if (idMatch) {
          const id = idMatch[1];

          setSingleId(id);
          const dynamicPath = routes.form.path;

          router.navigate(dynamicPath);
        }
      }
    });
  });
}
