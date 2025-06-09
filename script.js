function tampilkan(id) {
  // Sembunyikan semua bagian konten
  document.getElementById("tentang").style.display = "none";
  document.getElementById("kontak").style.display = "none";
  document.getElementById("pengaduhan").style.display = "none";
  // Tampilkan bagian yang dipilih
  document.getElementById(id).style.display = "block";
}
