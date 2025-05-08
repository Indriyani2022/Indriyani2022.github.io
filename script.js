document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const books = document.querySelectorAll('.col'); // Perhatikan bahwa ini menargetkan elemen .col, bukan .book

    function filterBooks() {
        const query = searchInput.value.toLowerCase();
        books.forEach(function (book) {
            const title = book.querySelector('.card-title').textContent.toLowerCase();
            const description = book.querySelector('.card-text').textContent.toLowerCase();

            // Tampilkan atau sembunyikan buku sesuai dengan pencarian
            if (title.includes(query) || description.includes(query)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    }

    // Fungsi pencarian berdasarkan klik tombol
    searchButton.addEventListener('click', function () {
        filterBooks();
    });

    // Fungsi pencarian berdasarkan input (realtime)
    searchInput.addEventListener('input', function () {
        filterBooks();
    });

    // Fungsi untuk menampilkan deskripsi lengkap ketika gambar diklik
    document.querySelectorAll('.card-img-top').forEach(function(img) {
        img.addEventListener('click', function () {
            var shortDesc = this.closest('.card-body').querySelector('.short-desc');
            var fullDesc = this.closest('.card-body').querySelector('.full-desc');
            
            if (fullDesc.style.display === 'none') {
                fullDesc.style.display = 'block';
                shortDesc.style.display = 'none';
            } else {
                fullDesc.style.display = 'none';
                shortDesc.style.display = 'block';
            }
        });
    });
});
