package io.technicalAssignment.bookStore.persistence.dao.jpa;


import io.technicalAssignment.bookStore.persistence.dao.BookDao;
import io.technicalAssignment.bookStore.persistence.model.Book;
import org.springframework.stereotype.Repository;

@Repository
public class JpaBookDao extends GenericJpaDao<Book> implements BookDao {
    public JpaBookDao() {
        super(Book.class);

    }
}
