async function getBook(id) {
  try {
    const api = `http://localhost:8080/bookStore/api/books/${id}`;

    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok || body.Response === "False") {
      throw new Error(body.Error);
    }

    return body;
  } catch (error) {
    console.error("error fetching character", error);
    throw error;
  }
}

async function getBooks() {
  try {
    const api = `http://localhost:8080/bookStore/api/books`;
    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok || body.Response === "False") {
      throw new Error(body.Error);
    }

    return body;
  } catch (error) {
    console.error("error fetching character", error);
    throw error;
  }
}

export default { getBook, getBooks };
