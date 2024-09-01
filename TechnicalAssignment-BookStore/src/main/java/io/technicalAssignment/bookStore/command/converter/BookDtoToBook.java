package io.technicalAssignment.bookStore.command.converter;

import io.technicalAssignment.bookStore.command.BookDto;
import io.technicalAssignment.bookStore.persistence.model.Book;
import io.technicalAssignment.bookStore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * A {@link Converter} implementation, responsible for {@link BookDto} to {@link Book} type conversion
 */
@Component
public class BookDtoToBook implements Converter<BookDto, Book> {

    private BookService bookService;

    /**
     * Sets the book Service
     *
     * @param bookService the book service to set
     */
    @Autowired
    public void setBookService(BookService bookService) {
        this.bookService = bookService;
    }

    /**
     * Converts the book DTO into a book model object
     *
     * @param bookDto the book DTO
     * @return the book
     */
    @Override
    public Book convert(BookDto bookDto) {
        Book book = (bookDto.getId() != null ? bookService.get(bookDto.getId()) : new Book());


        book.setTitle(bookDto.getTitle());
        book.setAuthor(bookDto.getAuthor());
        book.setGenre(bookDto.getGenre());
        book.setPublisher(bookDto.getPublisher());
        book.setPublishedYear(bookDto.getPublishedYear());
        book.setQuantity(bookDto.getQuantity());
        book.setPrice(bookDto.getPrice());
        book.setIsbn(bookDto.getIsbn());
        book.setImage(bookDto.getImage());

        return book;
    }
}