package io.technicalAssignment.bookStore.persistence.model;


/**
 * Common interface for a model, provides methods to get and set ids
 */

public interface Model {

    /**
     * @return the model id
     */
    Integer getId();

    /**
     * @param id the id to set
     */
    void setId(Integer id);
}
