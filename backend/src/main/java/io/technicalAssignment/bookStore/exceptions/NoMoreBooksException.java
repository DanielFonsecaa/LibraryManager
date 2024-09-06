package io.technicalAssignment.bookStore.exceptions;


import io.technicalAssignment.bookStore.errors.ErrorMessage;

/**
 * Thrown to indicate that the book was not found
 */
public class NoMoreBooksException extends BookStoreException {

    /**
     * @see BookStoreException#BookStoreException(String)
     */
    public NoMoreBooksException() {
        super(ErrorMessage.NO_MORE_BOOKS);
    }
}
