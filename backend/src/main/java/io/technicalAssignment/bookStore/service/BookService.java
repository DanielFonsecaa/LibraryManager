package io.technicalAssignment.bookStore.service;


import io.technicalAssignment.bookStore.exceptions.BookNotFoundException;
import io.technicalAssignment.bookStore.exceptions.NoMoreBooksException;
import io.technicalAssignment.bookStore.persistence.model.Book;

import java.util.List;

/**
 * Common interface for book services, provides methods to manage books
 */
public interface BookService {

    /**
     * Gets the book with the given id
     *
     * @param id the book id
     * @return the book
     */
    Book get(Integer id);

    /**
     * Gets a list of the books
     *
     * @return the books list
     */
    List<Book> list();

    /**
     * Saves a book
     *
     * @param book the book to save
     * @return the saved book
     */
    Book save(Book book);

    /**
     * Deletes the book
     *
     * @param id the book id
     * @throws BookNotFoundException
     * @throws NoMoreBooksException
     */
    void delete(Integer id) throws NoMoreBooksException, BookNotFoundException;
}