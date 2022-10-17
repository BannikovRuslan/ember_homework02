import Service from '@ember/service';
import ENV from 'ember-homework02/config/environment';

export default Service.extend({

    getBooks(search) {
        let queryParams ='';
        if (search) {
            queryParams = `?q=${search}`;
        }
        return fetch(`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
    },

    getBook(id) {
        return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
    },

    updateBook(book) {
        return fetch(`${ENV.backendURL}/books/${book.id}`, { 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    },


    getAuthors(search) {
        let queryParams ='';
        if (search) {
            queryParams = `?q=${search}`;
        }
        return fetch(`${ENV.backendURL}/authors${queryParams}`).then((response) => response.json());
    },

    getAuthor(id) {
        return fetch(`${ENV.backendURL}/authors/${id}`).then((response) => response.json());
    },

    deleteAuthor(author) {
        return fetch(`${ENV.backendURL}/authors/${author.id}`, { method: 'DELETE'});
    },

    updateAuthor(author) {
        return fetch(`${ENV.backendURL}/authors/${author.id}`, { 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(author)
        });
    },

    async createAuthor(author) {
        return fetch(`${ENV.backendURL}/authors`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(author)
        });
    }
});
