package io.technicalAssignment.bookStore.command;

import io.technicalAssignment.bookStore.persistence.enumerator.Genre;
import io.technicalAssignment.bookStore.persistence.model.Book;
import javax.validation.constraints.*;


/**
 * The {@link Book} data transfer object
 */
public class BookDto {

    private Integer id;

    @NotNull(message = "Title is mandatory")
    @NotBlank(message = "Title is mandatory")
    @Size(min = 2, max = 64)
    private String title;

    @NotNull(message = "Author is mandatory")
    @NotBlank(message = "Author is mandatory")
    @Size(min = 3, max = 64)
    private String author;


    @NotBlank(message = "Isbn is mandatory")
    @Size(min = 9, max = 15)
    private String isbn;
    private double price = 10.00;

    private String publisher = "Unknown Publisher";
    private int quantity = 1;
    private int publishedYear = 0000;
    private Genre genre;
    private String imageUrl;
    private String synopsis;

    /**
     * Gets the imageUrl of the book
     *
     * @return the imageUrl title
     */
    public String getImageUrl() {
        return imageUrl;
    }
    /**
     * Sets the imageUrl of the book
     *
     * @param imageUrl the imageUrl to set
     */
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    /**
     * Gets the synopsis of the book
     *
     * @return the synopsis title
     */
    public String getSynopsis() {
        return synopsis;
    }
    /**
     * Sets the synopsis of the book
     *
     * @param synopsis the synopsis to set
     */
    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    /**
     * Gets the id of the book DTO
     *
     * @return the book DTO id
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the id of the book DTO
     *
     * @param id the id to set
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the title of the book DTO
     *
     * @return the book DTO title
     */
    public String getTitle() {
        return title;
    }
    /**
     * Sets the title of the book DTO
     *
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }
    /**
     * Gets the author of the book DTO
     *
     * @return the book DTO author
     */
    public String getAuthor() {
        return author;
    }
    /**
     * Sets the author of the book DTO
     *
     * @param author the author to set
     */
    public void setAuthor(String author) {
        this.author = author;
    }
    /**
     * Gets the isbn of the book DTO
     *
     * @return the book DTO isbn
     */
    public String getIsbn() {
        return isbn;
    }
    /**
     * Sets the isbn of the book DTO
     *
     * @param isbn the isbn to set
     */
    public void setIsbn( String isbn) {
        this.isbn = isbn;
    }
    /**
     * Gets the price of the book DTO
     *
     * @return the book DTO price
     */
    public double getPrice() {
        return price;
    }
    /**
     * Sets the price of the book DTO
     *
     * @param price the price to set
     */
    public void setPrice(double price) {
        this.price = price;
    }
    /**
     * Gets the publisher of the book DTO
     *
     * @return the book DTO publisher
     */
    public String getPublisher() {
        return publisher;
    }
    /**
     * Sets the publisher of the book DTO
     *
     * @param publisher the publisher to set
     */
    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }
    /**
     * Gets the quantity of the book DTO
     *
     * @return the book DTO quantity
     */
    public int getQuantity() {
        return quantity;
    }
    /**
     * Sets the quantity of the book DTO
     *
     * @param quantity the quantity to set
     */
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    /**
     * Gets the publishedYear of the book DTO
     *
     * @return the book DTO publishedYear
     */
    public int getPublishedYear() {
        return publishedYear;
    }

    /**
     * Sets the publishedYear of the book DTO
     *
     * @param publishedYear the publishedYear to set
     */
    public void setPublishedYear(int publishedYear) {
        this.publishedYear = publishedYear;
    }

    /**
     * Gets the genre of the book DTO
     *
     * @return the book DTO genre
     */
    public Genre getGenre() {
        return genre;
    }

    /**
     * Sets the genre of the book DTO
     *
     * @param genre the genre to set
     */
    public void setGenre(Genre genre) {
        this.genre = genre;
    }
}
