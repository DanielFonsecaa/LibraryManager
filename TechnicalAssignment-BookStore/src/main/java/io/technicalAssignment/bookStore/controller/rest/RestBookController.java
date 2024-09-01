package io.technicalAssignment.bookStore.controller.rest;

import io.technicalAssignment.bookStore.command.BookDto;
import io.technicalAssignment.bookStore.command.converter.BookDtoToBook;
import io.technicalAssignment.bookStore.command.converter.BookToBookDTO;
import io.technicalAssignment.bookStore.exceptions.BookNotFoundException;
import io.technicalAssignment.bookStore.exceptions.NoMoreBooksException;
import io.technicalAssignment.bookStore.persistence.model.Book;
import io.technicalAssignment.bookStore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

/**
 * REST controller responsible for {@link Book} related CRUD operations
 */
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/api/books")
public class RestBookController {

    private BookService bookService;
    private BookToBookDTO bookToBookDTO;
    private BookDtoToBook bookDtoToBook;

    /**
     * Sets the book service
     *
     * @param bookService the book service to set
     */
    @Autowired
    public void setBookService(BookService bookService) {
        this.bookService = bookService;
    }

    /**
     * Sets the converter for converting between book DTO and book model objects
     *
     * @param bookDtoToBook the book DTO to book converter to set
     */
    @Autowired
    public void setBookDtoToBook(BookDtoToBook bookDtoToBook) {
        this.bookDtoToBook = bookDtoToBook;
    }

    /**
     * Sets the converter for converting between book model objects and book DTO
     *
     * @param bookToBookDTO the book to book DTO converter to set
     */
    @Autowired
    public void setBookToBookDTO(BookToBookDTO bookToBookDTO) {
        this.bookToBookDTO = bookToBookDTO;
    }

    /**
     * Retrieves a representation of the list of books
     *
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.GET, path = {"/", ""})
    public ResponseEntity<List<BookDto>> listBooks() {

        List<BookDto> bookDtos = bookService.list().stream()
                .map(book -> bookToBookDTO.convert(book))
                .collect(Collectors.toList());

        return new ResponseEntity<>(bookDtos, HttpStatus.OK);
    }

    /**
     * Retrieves a representation of the given book
     *
     * @param id the book id
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<BookDto> showBook(@PathVariable Integer id) {

        Book book = bookService.get(id);

        if (book == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(bookToBookDTO.convert(book), HttpStatus.OK);
    }

    /**
     * Adds a book
     *
     * @param bookDto          the book DTO
     * @param bindingResult        the binding result object
     * @param uriComponentsBuilder the uri components builder
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.POST, path = {"/", ""})
    public ResponseEntity<?> addBook(@Valid @RequestBody BookDto bookDto, BindingResult bindingResult, UriComponentsBuilder uriComponentsBuilder) {

        if (bindingResult.hasErrors() || bookDto.getId() != null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Book savedBook = bookService.save(bookDtoToBook.convert(bookDto));

        // get help from the framework building the path for the newly created resource
        UriComponents uriComponents = uriComponentsBuilder.path("/api/customer/" + savedBook.getId()).build();

        // set headers with the created path
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    /**
     * Edits a book
     *
     * @param bookDto   the book DTO
     * @param bindingResult the binding result
     * @param id            the book id
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public ResponseEntity<BookDto> editBook(@Valid @RequestBody BookDto bookDto, BindingResult bindingResult, @PathVariable Integer id) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if (bookDto.getId() != null && !bookDto.getId().equals(id)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if (bookService.get(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        bookDto.setId(id);

        bookService.save(bookDtoToBook.convert(bookDto));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * Deletes a book
     *
     * @param id the book id
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity<BookDto> deleteBook(@PathVariable Integer id) {

        try {

            bookService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } catch (NoMoreBooksException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        } catch (BookNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
