package io.technicalAssignment.bookStore.service;


import io.technicalAssignment.bookStore.exceptions.*;
import io.technicalAssignment.bookStore.persistence.dao.BookDao;
import io.technicalAssignment.bookStore.persistence.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    private BookDao bookDao;

    /**
     * Sets the book data access object
     *
     * @param bookDao the account DAO to set
     */
    @Autowired
    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }

    /**
     * @see BookService#get(Integer)
     */
    @Override
    public Book get(Integer id) {

        System.out.println("##########################");
        Book book = bookDao.findById(id);
        System.out.println("book :::::" + book);
        System.out.println("##########################");
        return book;
    }

    /**
     * @see BookService#list()
     */
    @Override
    public List<Book> list() {
        return bookDao.findAll();
    }

    /**
     * @see BookService#save(Book)
     */
    @Transactional
    @Override
    public Book save(Book book) {
        return bookDao.saveOrUpdate(book);
    }

    /**
     * @see BookService#delete(Integer)
     */
    @Transactional
    @Override
    public void delete(Integer id) throws NoMoreBooksException, BookNotFoundException {
        Book book = Optional.ofNullable(bookDao.findById(id))
                .orElseThrow(BookNotFoundException::new);

        if (book.getQuantity() != 0) {
            throw new NoMoreBooksException();
        }

        bookDao.delete(id);
    }
}