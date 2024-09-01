package io.technicalAssignment.bookStore.command.converter;


import io.technicalAssignment.bookStore.command.BookDto;
import io.technicalAssignment.bookStore.persistence.model.Book;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * A {@link Converter} implementation, responsible for {@link Book} to {@link BookDto} type conversion
 */

@Component
public class BookToBookDTO extends AbstractConverter<Book, BookDto> {

    /**
     * Converts the book model object into a book DTO
     *
     * @param book the book
     * @return the book DTO
     */
    @Override
    public BookDto convert(Book book) {

        BookDto bookDto = new BookDto();
        bookDto.setId(book.getId());
        bookDto.setIsbn(book.getIsbn());
        bookDto.setAuthor(book.getAuthor());
        bookDto.setGenre(book.getGenre());
        bookDto.setPrice(book.getPrice());
        bookDto.setPublishedYear(book.getPublishedYear());
        bookDto.setPublisher(book.getPublisher());
        bookDto.setQuantity(book.getQuantity());
        bookDto.setTitle(book.getTitle());
        bookDto.setImage(book.getImage());

        return bookDto;
    }
}