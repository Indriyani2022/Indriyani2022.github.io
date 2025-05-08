ocument.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Memperbarui teks tombol berdasarkan mode saat ini
    function updateButtonText() {
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Switch to Light Mode';
        } else {
            darkModeToggle.textContent = 'Switch to Dark Mode';
        }
    }

    // Menangani klik pada tombol dark mode
    darkModeToggle.addEventListener('click', function (event) {
        // Pastikan ini adalah tombol, bukan tautan
        event.preventDefault();

        // Menambahkan atau menghapus class dark-mode
        document.body.classList.toggle('dark-mode');
        updateButtonText();

        // Menyimpan preferensi dark mode
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Mengecek preferensi saat halaman dimuat
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    updateButtonText(); // Set awal tombol
});
// Contoh data buku (dalam aplikasi sebenarnya, ini bisa berasal dari database)
        const books = [
            { id: 1, title: "Educated", author: "Tara Westover", keywords: ["novel", "pendidikan", "motivasi"] },
            { id: 2, title: "Laskar Pelangi", author: "Andrea Hirata", keywords: ["pendidikan", "indonesia", "belitung"] },
            { id: 3, title: "Bumi Manusia", author: "Pramoedya Ananta Toer", keywords: ["sejarah", "kolonial", "indonesia"] },
            { id: 4, title: "Perahu Kertas", author: "Dee Lestari", keywords: ["romance", "persahabatan"] },
            { id: 5, title: "Negeri 5 Menara", author: "Ahmad Fuadi", keywords: ["pendidikan", "pesantren", "motivasi"] },
            { id: 6, title: "Pulang", author: "Leila S. Chudori", keywords: ["sejarah", "politik", "indonesia"] },
            { id: 7, title: "Filosofi Kopi", author: "Dee Lestari", keywords: ["kopi", "filosofi", "cerita pendek"] },
            { id: 8, title: "Cantik Itu Luka", author: "Eka Kurniawan", keywords: ["sejarah", "indonesia", "keluarga"] }
        ];

        // Fungsi pencarian
        function searchBooks() {
            const searchTerm = document.getElementById('search').value.toLowerCase().trim();
            const resultsContainer = document.getElementById('results');
            
            // Reset hasil pencarian
            resultsContainer.innerHTML = '';
            
            if (searchTerm === '') {
                return;
            }
            
            // Filter buku berdasarkan kata kunci pencarian
            const filteredBooks = books.filter(book => {
                return book.title.toLowerCase().includes(searchTerm) ||
                       book.author.toLowerCase().includes(searchTerm) ||
                       book.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));
            });
            
            // Tampilkan hasil pencarian
            if (filteredBooks.length > 0) {
                filteredBooks.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book-item';
                    bookElement.innerHTML = `
                        <div class="book-title">${book.title}</div>
                        <div class="book-author">Penulis: ${book.author}</div>
                        <div>Kata kunci: ${book.keywords.join(', ')}</div>
                    `;
                    resultsContainer.appendChild(bookElement);
                });
            } else {
                resultsContainer.innerHTML = '<div class="no-results">Tidak ada hasil yang cocok dengan pencarian Anda.</div>';
            }
        }
        
        // Tambahkan event listener untuk tombol pencarian
        document.getElementById('search-button').addEventListener('click', searchBooks);
        
        // Tambahkan event listener untuk input pencarian (saat menekan tombol Enter)
        document.getElementById('search').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchBooks();
            }
        });
