import { getSingleId, setSingleId } from "../js/view/bookView.js";

export const editButtonListeners = (router, routes) => {
  const editAnchors = document.getElementsByClassName("edit");

  [...editAnchors].forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.closest(".edit"); // Find the closest element

      if (target) {
        const idMatch = target.id.match(/edit-(\d+)/);

        if (idMatch) {
          const id = idMatch[1];
          console.log("Editing book with ID:", id);

          setSingleId(id);
          const dynamicPath = routes.form.path;

          router.navigate(dynamicPath);
        }
      }
    });
  });
};
