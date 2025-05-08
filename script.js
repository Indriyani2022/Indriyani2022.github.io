document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const books = document.querySelectorAll('.book');

    function filterBooks() {
        const query = searchInput.value.toLowerCase();
        books.forEach(function (book) {
            const title = book.querySelector('.card-title').textContent.toLowerCase();
            const description = book.querySelector('.card-text').textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', function () {
        filterBooks();
    });

    searchInput.addEventListener('input', function () {
        filterBooks();
    });
});
