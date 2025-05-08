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

   function searchBooks() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const books = document.querySelectorAll(".book-card-grid");

      books.forEach(book => {
        const title = book.querySelector("h3").textContent.toLowerCase();
        if (title.includes(input)) {
          book.style.display = "block";
        } else {
          book.style.display = "none";
        }
      });
    }

 AOS.init({
      duration: 800,
      once: true
    });
