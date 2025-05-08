// Fungsi untuk menampilkan atau menyembunyikan deskripsi lengkap
function toggleDescription(element) {
    const currentBook = element.closest('.book-item');
    const fullDesc = currentBook.querySelector('.full-desc');
    const shortDesc = currentBook.querySelector('.short-desc');

    // Toggle the display of the description
    if (fullDesc.style.display === "none") {
        fullDesc.style.display = "block";
        shortDesc.style.display = "none";
    } else {
        fullDesc.style.display = "none";
        shortDesc.style.display = "block";
    }
}

// Fungsi pencarian buku
function searchBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const bookItems = document.querySelectorAll('.book-item');

    bookItems.forEach(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        const description = item.getAttribute('data-description').toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
