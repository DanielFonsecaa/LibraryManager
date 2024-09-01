package io.technicalAssignment.bookStore.controller.web;

import io.technicalAssignment.bookStore.command.BookDto;
import io.technicalAssignment.bookStore.command.converter.BookDtoToBook;
import io.technicalAssignment.bookStore.command.converter.BookToBookDTO;
import io.technicalAssignment.bookStore.exceptions.BookNotFoundException;
import io.technicalAssignment.bookStore.exceptions.NoMoreBooksException;
import io.technicalAssignment.bookStore.persistence.enumerator.Genre;
import io.technicalAssignment.bookStore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import io.technicalAssignment.bookStore.persistence.model.Book;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/book")
public class BookController {

    private BookDtoToBook bookDtoToBook;
    private BookToBookDTO bookToBookDTO;
    private BookService bookService;

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
    public void setBookToBookDto(BookToBookDTO bookToBookDTO) {
        this.bookToBookDTO = bookToBookDTO;
    }


    /**
     * Renders a view with a list of books
     *
     * @param model the model object
     * @return the view to render
     */
    @RequestMapping(method = RequestMethod.GET, path = {"/list", "/", ""})
    public String listBooks(Model model) {
        List<Book> books = bookService.list();
        model.addAttribute("books", books);
        return "book/list";
    }


    /**
     * Renders a view with book details
     *
     * @param id    the book id
     * @param model the model object
     * @return the view to render
     */
    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public String showBook(@PathVariable Integer id, Model model){

        Book book = bookService.get(id);
        // command objects for book show view
        model.addAttribute("book", book);



        return "book/show";
    }

    /**
     * Adds a book
     *
     * @param model the model object
     * @return the view to render
     */
    @RequestMapping(method = RequestMethod.GET, path = "/add")
    public String addBook(Model model) {
        model.addAttribute("book", new BookDto());
        model.addAttribute("genres", Genre.values());
        return "book/add-update";
    }


    /**
     * Edits a book
     *
     * @param id    the book id
     * @param model the model object
     * @return the view to render
     */
    @RequestMapping(method = RequestMethod.GET, path = "/{id}/edit")
    public String editBook(@PathVariable Integer id, Model model) {
        model.addAttribute("book", bookToBookDTO.convert(bookService.get(id)));
        model.addAttribute("genres", Genre.values());
        return "book/add-update";
    }

    /**
     * Saves the book form submission and renders a view
     *
     * @param bookDto       the book object
     * @param bindingResult      the binding result object
     * @param redirectAttributes the redirect attributes object
     * @return the view to render
     */
    @RequestMapping(method = RequestMethod.POST, path = {"/", ""}, params = "action=save")
    public String saveBook(@Valid @ModelAttribute("book") BookDto bookDto, BindingResult bindingResult, RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            return "book/add-update";
        }

        Book savedBook = bookService.save(bookDtoToBook.convert(bookDto));

        redirectAttributes.addFlashAttribute("lastAction", "Saved " + savedBook.getTitle() + " " + savedBook.getAuthor());
        return "redirect:/book/" + savedBook.getId();
    }

    /**
     * Cancels the book submission and renders the default the book view
     *
     * @return the view to render
     */
    @RequestMapping(method = RequestMethod.POST, path = {"/", ""}, params = "action=cancel")
    public String cancelSaveBook() {
        // we could use an anchor tag in the view for this, but we might want to do something clever in the future here
        return "redirect:/book/";
    }

    /**
     * Deletes the book and renders the default book view
     *
     * @param id                 the book id
     * @param redirectAttributes the redirect attributes object
     * @return the view to render
     * @throws BookNotFoundException
     * @throws NoMoreBooksException
     */
    @RequestMapping(method = RequestMethod.GET, path = "{id}/delete")
    public String deleteBook(@PathVariable Integer id, RedirectAttributes redirectAttributes) throws NoMoreBooksException, BookNotFoundException {
        Book book = bookService.get(id);
        bookService.delete(id);
        redirectAttributes.addFlashAttribute("lastAction", "Deleted " + book.getTitle() + " " + book.getAuthor());
        return "redirect:/book";
    }

}