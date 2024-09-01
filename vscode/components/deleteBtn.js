import { getSingleId, setSingleId } from "../js/view/bookView.js";

export function deleteButtonListeners() {
  const deleteBtn = document.getElementsByClassName("delete");

  [...deleteBtn].forEach((elem) => {
    elem.addEventListener("click", async (e) => {
      e.preventDefault();
      const target = e.target.closest(".delete"); // Find the closest element

      if (target.classList.contains("delete")) {
        const idMatch = target.id.match(/delete-(\d+)/);

        if (idMatch) {
          const id = idMatch[1];
          setSingleId(id);

          const confirmed = confirm(
            `Are you sure you want to delete book ID: ${id}?`
          );

          if (confirmed) {
            try {
              // Send to backend
              const response = await fetch(
                `http://localhost:8080/bookStore/api/books/${id}`,
                {
                  method: "DELETE",
                }
              );

              if (response.ok) {
                // Successfully deleted, remove the book
                const book = document.querySelector(`#info-${id}`);
                if (book) {
                  book.parentNode.removeChild(book);
                }
                alert("Book successfully deleted!");
                return;
              }

              //fail
              const errorMessage = await response.text();
              console.error("Failed to delete book:", errorMessage);
              alert(
                "Failed to delete the book. Please try again. \n\nCan only delete books with 0 quantity"
              );
            } catch (error) {
              console.error("Error deleting book:", error);
              alert("An error occurred while deleting the book.");
            }
          }
        }
      }
    });
  });
}
