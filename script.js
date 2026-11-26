
const tombol = document.getElementById("tombol");

// Event ketika kursor mendekati tombol
tombol.addEventListener("mouseenter", function() {

    // Mengambil ukuran layar
    const lebar = window.innerWidth;
    const tinggi = window.innerHeight;

    // Menentukan posisi secara acak
    const posisiX = Math.random() * (lebar - tombol.offsetWidth);
    const posisiY = Math.random() * (tinggi - tombol.offsetHeight);

    // Memindahkan tombol
    tombol.style.left = posisiX + "px";
    tombol.style.top = posisiY + "px";

});

// Event ketika tombol berhasil diklik
tombol.addEventListener("click", function() {
    alert("Wah, kamu berhasil klik tombolnya!");
});
