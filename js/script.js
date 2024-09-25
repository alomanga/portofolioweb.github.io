// Ambil semua tautan navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// tambahkan event listener untuk setiap tautan
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Hapus kelas 'active' dari semua tautan
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Tambahkan kelas 'active' pada tautan yang di click
        this.classList.add('active');
    })
})


//Ambil elemen navbar
const navbar = document.querySelector('.navbar');

// Fungsi untuk menambahkan kelas 'scrolled' saat scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Jika halaman di-scroll lebih dari 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});