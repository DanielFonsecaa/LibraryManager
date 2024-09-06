package io.technicalAssignment.bookStore.exceptions;


import io.technicalAssignment.bookStore.errors.ErrorMessage;

/**
 * Thrown to indicate that the book was not found
 */
public class BookNotFoundException extends BookStoreException {

    /**
     * @see BookStoreException#BookStoreException(String)
     */
    public BookNotFoundException() {
        super(ErrorMessage.BOOK_NOT_FOUND);
    }
}