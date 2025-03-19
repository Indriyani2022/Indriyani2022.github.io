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

// Data buku
const books = [
    {
        title: "Educated",
        description: "“ “It’s strange how you give the people you love so much power over you.”― Tara Westover, Educated",
        cover: "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lw8nssous496c8",
        pdf: "https://drive.google.com/drive/folders/1k69XiEQ5Uh7j5VzgTAkak0X5VMX7oLcd" // Ganti dengan path ke file PDF yang benar
    },
    {
        title: "filosofi Teras",
        description: "“ Learn to light a candle in the darkest moments of someone’s life. Be the light that helps others see; it is what gives life its deepest significance. ” ― Roy T. Bennett",
        cover: "https://ebooks.gramedia.com/ebook-covers/45496/image_highres/ID_FITE2018MTH12.jpg",
        pdf: "https://drive.google.com/drive/folders/1k69XiEQ5Uh7j5VzgTAkak0X5VMX7oLcd" // Ganti dengan path ke file PDF
    },
];

const searchInput = document.getElementById('search');
const bookList = document.getElementById('bookList');

// Fungsi untuk menampilkan buku
function displayBooks(books) {
    bookList.innerHTML = ''; // Kosongkan daftar buku
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover" style="width: 100px; height: auto; margin-right: 10px;">
            <div>
                <h4>${book.title}</h4>
                <p>${book.description}</p>
            </div>
        `;
        
        // Tambahkan event listener untuk membuka detail buku
        bookItem.addEventListener('click', () => openBookDetail(book));
        
        bookList.appendChild(bookItem);
    });
}

// Tampilkan 2 buku pertama saat halaman dimuat
displayBooks(books.slice(0, 2));

// Event listener untuk pencarian
searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter));
    displayBooks(filteredBooks);
});

// Fungsi untuk membuka detail buku
function openBookDetail(book) {
    // Membuat modal untuk menampilkan detail buku
    const modal = document.createElement('div');
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Latar belakang transparan
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "2000"; // Pastikan modal di atas elemen lainnya

    // Konten modal
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "10px";
    modalContent.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    modalContent.style.maxWidth = "500px";
    modalContent.style.width = "100%";

    // Menambahkan detail buku ke modal
    modalContent.innerHTML = `
        <h2>${book.title}</h2>
        <img src="${book.cover}" alt="${book.title} Cover" style="width: 100px; height: auto; margin-bottom: 10px;">
        <p>${book.description}</p>
        <a href="${book.pdf}" target="_blank" style="display: inline-block; margin-bottom: 10px; padding: 10px 15px; background-color: #00796b; color: white; text-decoration: none; border-radius: 5px;">Baca PDF</a>
        <button id="downloadButton" style="padding: 10px 15px; background-color: #00796b; color: white; border: none; border-radius: 5px; cursor: pointer;">Download PDF</button>
        <button id="closeModal" style="padding: 10px 15px; background-color: #00796b; color: white; border: none; border-radius: 5px; cursor: pointer;">Tutup</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Event listener untuk menutup modal
    document.getElementById('closeModal').addEventListener('click', () => {
        document.body.removeChild(modal); // Menghapus modal dari body
    });

    // Event listener untuk tombol download
    document.getElementById('downloadButton').addEventListener('click', () => {
        const link = document.createElement('a'); // Membuat elemen <a> baru
        link.href = book.pdf; // Mengatur href ke URL PDF
        link.download = ''; // Mengatur atribut download
        document.body.appendChild(link); // Menambahkan link ke body
        link.click(); // Mengklik link untuk memulai unduhan
        document.body.removeChild(link); // Menghapus link dari body
        alert(`Anda telah mengunduh buku: "${book.title}"`); // Tampilkan pesan konfirmasi
    });
}
const flower = document.getElementById('flower');

// Fungsi untuk menggerakkan bunga
function animateFlower() {
    let position = 0; // Posisi awal
    const maxHeight = 20; // Jarak maksimum bunga bergerak ke atas
    const speed = 0.5; // Kecepatan gerakan

    // Mengubah posisi bunga secara berkala
    setInterval(() => {
        // Mengubah posisi bunga
        position += speed;
        
        // Jika bunga sudah mencapai batas maksimum, ubah arah
        if (position > maxHeight || position < 0) {
            speed *= -1; // Ubah arah
        }

        // Mengatur posisi bunga
        flower.style.transform = `translate(-50%, -${position}px)`;
    }, 20); // Interval waktu dalam milidetik
}

// Memulai animasi bunga
animateFlower();
document.addEventListener("DOMContentLoaded", function() {
    let footer = document.querySelector("footer");

    // Efek muncul saat scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) { // Muncul setelah scroll 100px
            footer.classList.add("visible");
        } else {
            footer.classList.remove("visible");
        }
    });

    // Efek teks animasi
    let textElement = document.createElement("p");
    textElement.classList.add("animated-text");
    footer.appendChild(textElement);

    let text = "Terima kasih telah mengunjungi perpustakaan kami!";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    setTimeout(typeEffect, 500); // Delay sebelum animasi dimulai
});
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let particle of particles) {
        particle.update();
        particle.draw();
    }

    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
