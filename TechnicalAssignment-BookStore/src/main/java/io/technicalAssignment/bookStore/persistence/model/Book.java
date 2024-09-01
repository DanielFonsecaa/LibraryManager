package io.technicalAssignment.bookStore.persistence.model;


import io.technicalAssignment.bookStore.persistence.enumerator.Genre;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * The book model entity
 */
@Entity
@Table(name = "book")
public class Book extends AbstractModel{

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "isbn", unique = true, nullable = false)
    private String isbn;
    private int publishedYear;

    @Enumerated(EnumType.STRING)
    private Genre genre;
    private int quantity = 1;
    private String author;
    private String publisher;
    private double price;
    private String imageUrl;



    public String getImage() {
        return imageUrl;
    }

    public void setImage(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    /**
     * Gets the price of the book
     *
     * @return the price title
     */
    public double getPrice() {
        return price;
    }

    /**
     * Sets the price of the book
     *
     * @param price the price to set
     */
    public void setPrice(double price) {
        this.price = price;
    }

    /**
     * Gets the title of the book
     *
     * @return the book title
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets the title of the book
     *
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets the isbn of the book
     *
     * @return the book isbn
     */
    public String getIsbn() {
        return isbn;
    }

    /**
     * Sets the isbn of the book
     *
     * @param isbn the isbn to set
     */
    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    /**
     * Gets the publishedYear of the book
     *
     * @return the book publishedYear
     */
    public int getPublishedYear() {
        return publishedYear;
    }

    /**
     * Sets the publishedYear of the book
     *
     * @param publishedYear the publishedYear to set
     */
    public void setPublishedYear(int publishedYear) {
        this.publishedYear = publishedYear;
    }

    /**
     * Gets the genre of the book
     *
     * @return the book genre
     */
    public Genre getGenre() {
        return genre;
    }

    /**
     * Sets the genre of the book
     *
     * @param genre the genre to set
     */
    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    /**
     * Gets the quantity of books
     *
     * @return the book quantity
     */
    public int getQuantity() {
        return quantity;
    }

    /**
     * Sets the quantity of books
     *
     * @param quantity the quantity to set
     */
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    /**
     * Gets the author of the book
     *
     * @return the book author
     */
    public String getAuthor() {
        return author;
    }

    /**
     * Sets the author of the book
     *
     * @param author the author to set
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * Gets the publisher of the book
     *
     * @return the book publisher
     */
    public String getPublisher() {
        return publisher;
    }


    /**
     * Sets the publisher of the book
     *
     * @param publisher the publisher to set
     */
    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }


}

