package io.technicalAssignment.bookStore.exceptions;

/**
 * A generic Bookstore exception to be used as base for concrete types of exceptions
 *
 * @see Exception
 */
public class BookStoreException extends Exception {

    /**
     * @see Exception#Exception(String)
     */
    public BookStoreException(String message) {
        super(message);
    }
}
