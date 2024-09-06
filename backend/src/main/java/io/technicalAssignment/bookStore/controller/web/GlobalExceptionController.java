package io.technicalAssignment.bookStore.controller.web;

import io.technicalAssignment.bookStore.exceptions.BookNotFoundException;
import io.technicalAssignment.bookStore.exceptions.NoMoreBooksException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class GlobalExceptionController {

    /**
     * Handles NoMoreBooksException and returns a custom error page.
     *
     * @param ex The exception
     * @param model The model object
     * @return The name of the error view
     */
    @ExceptionHandler(NoMoreBooksException.class)
    public String handleNoMoreBooksException(NoMoreBooksException ex, Model model) {
        model.addAttribute("message", ex.getMessage());
        return "error/no-more-books";
    }

    /**
     * Handles BookNotFoundException and returns a custom error page.
     *
     * @param ex The exception
     * @param model The model object
     * @return The name of the error view
     */
    @ExceptionHandler(BookNotFoundException.class)
    public String handleBookNotFoundException(BookNotFoundException ex, Model model) {
        model.addAttribute("message", ex.getMessage());
        return "error/book-not-found";
    }
}