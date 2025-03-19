// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the dark mode toggle button
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        // Function to update the button text based on current mode
        function updateButtonText() {
            if (document.body.classList.contains('dark-mode')) {
                darkModeToggle.textContent = 'Switch to Light Mode';
            } else {
                darkModeToggle.textContent = 'Switch to Dark Mode';
            }
        }
        
        // Toggle dark mode when the button is clicked
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            updateButtonText();
            
            // Save preference to localStorage so it persists between page loads
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
        
        // Check for saved preference when page loads
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            updateButtonText();
        }
    }
});

// Data buku (dalam aplikasi nyata ini akan diambil dari database)
const books = [
    {
        id: 1,
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        category: "philosophy",
        cover: "https://tse4.mm.bing.net/th?id=OIP.JLtFuN0RwdCDLAJ5IB5YHAHaLa&pid=Api&P=0&h=220",
        rating: 4.7,
        status: "available"
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "education",
        cover: "https://tse2.mm.bing.net/th?id=OIP.oPBHxFOpihWoMXww6JFnwQHaLH&pid=Api&P=0&h=220",
        rating: 4.8,
        status: "borrowed"
    },
    {
        id: 3,
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        category: "novel",
        cover: "https://tse3.mm.bing.net/th?id=OIP.p_z9kRuYq8Di6iUecQE4LwHaLS&pid=Api&P=0&h=220",
        rating: 4.6,
        status: "available"
    },
    {
        id: 4,
        title: "Sang Pemimpi",
        author: "Andrea Hirata",
        category: "novel",
        cover: "https://tse2.mm.bing.net/th?id=OIP.aO_dTxpgL-_3OxiK2q67jgHaKq&pid=Api&P=0&h=220",
        rating: 4.5,
        status: "available"
    },
    {
        id: 5,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "science",
        cover: "https://tse1.mm.bing.net/th?id=OIP.5L5ODdSVjVKu8xrG5cN7kgHaLS&pid=Api&P=0&h=220",
        rating: 4.9,
        status: "borrowed"
    },
    {
        id: 6,
        title: "Perpustakaan Digital",
        author: "Putu Laxman Pendit",
        category: "education",
        cover: "https://tse3.mm.bing.net/th?id=OIP.kL2soIXeqZ_uLSPEBQab6wAAAA&pid=Api&P=0&h=220",
        rating: 4.3,
        status: "available"
    },
    {
        id: 7,
        title: "Ilmu Perpustakaan & Informasi",
        author: "Sulistyo Basuki",
        category: "education",
        cover: "https://tse1.mm.bing.net/th?id=OIP.QcmPVnUsOe2frB0xL2-2ZAAAAA&pid=Api&P=0&h=220",
        rating: 4.4,
        status: "available"
    },
    {
        id: 8,
        title: "Metode Penelitian Perpustakaan",
        author: "Khatib A. Latief",
        category: "research",
        cover: "https://tse3.mm.bing.net/th?id=OIP.Lz41U2TPXuHhVlW3c2TDRgHaJ4&pid=Api&P=0&h=220",
        rating: 4.2,
        status: "borrowed"
    }
];

// Fungsi untuk menampilkan buku
function displayBooks(bookArray) {
    const bookCollection = document.getElementById('book-collection');
    bookCollection.innerHTML = '';
    
    if (bookArray.length === 0) {
        bookCollection.innerHTML = '<div class="no-results">Tidak ada buku yang ditemukan</div>';
        return;
    }
    
    bookArray.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <span class="book-category">${book.category}</span>
                <div class="book-details">
                    <div class="book-rating">★ ${book.rating}</div>
                    <div class="book-status ${book.status}">${book.status === 'available' ? 'Tersedia' : 'Dipinjam'}</div>
                </div>
            </div>
        `;
        // Tambahkan event listener untuk detail buku
        bookItem.addEventListener('click', function() {
            alert(`Buku: ${book.title}\nPenulis: ${book.author}\nStatus: ${book.status === 'available' ? 'Tersedia' : 'Dipinjam'}`);
            // Dalam aplikasi nyata, ini bisa mengarahkan ke halaman detail buku
        });
        bookCollection.appendChild(bookItem);
    });
}

// Fungsi pencarian
function searchBooks() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const activeCategory = document.querySelector('.category-button.active').dataset.category;
    
    let filteredBooks = books;
    
    // Filter berdasarkan kategori jika bukan "all"
    if (activeCategory !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.category === activeCategory);
    }
    
    // Filter berdasarkan pencarian
    if (searchTerm) {
        filteredBooks = filteredBooks.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayBooks(filteredBooks);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan semua buku saat halaman dimuat
    displayBooks(books);
    
    // Event listener untuk tombol pencarian
    document.getElementById('search-button').addEventListener('click', searchBooks);
    document.getElementById('search-input').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchBooks();
        }
    });
    
    // Event listener untuk filter kategori
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus class active dari semua tombol
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan class active pada tombol yang diklik
            this.classList.add('active');
            // Terapkan pencarian dengan filter baru
            searchBooks();
        });
    });
    
    // Event listener untuk pagination
    const paginationButtons = document.querySelectorAll('.pagination button');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Dalam aplikasi nyata, ini akan memuat halaman buku yang berbeda
            displayBooks(books);
        });
    });
});
