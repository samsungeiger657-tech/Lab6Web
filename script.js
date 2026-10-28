// Praktikum 6: DOM dan Event Handling
const judul=document.getElementById("judul"), pesan=document.getElementById("pesan");
judul.textContent="Belajar JavaScript DOM"; pesan.textContent="Konten berhasil disiapkan oleh JavaScript.";
document.getElementById("tombolAksi").addEventListener("click",()=>{pesan.textContent="Tombol diklik pada "+new Date().toLocaleTimeString("id-ID");});
const teksGaya=document.getElementById("teksGaya");
document.getElementById("tombolGaya").addEventListener("click",()=>{teksGaya.classList.toggle("highlight");teksGaya.classList.toggle("teks-besar");});
const namaInput=document.getElementById("namaInput"), jumlah=document.getElementById("jumlahKarakter");
namaInput.addEventListener("input",()=>{jumlah.textContent=namaInput.value.length;});
const form=document.getElementById("formPendaftaran"), pesanForm=document.getElementById("pesanForm"), ringkasan=document.getElementById("ringkasan"), sesi=document.getElementById("sesi");
sesi.addEventListener("change",()=>{document.getElementById("sesiTerpilih").textContent="Sesi yang dipilih: "+(sesi.value||"belum ada");});
form.addEventListener("submit",event=>{event.preventDefault();const nama=document.getElementById("nama").value.trim(),email=document.getElementById("email").value.trim(),sesiValue=sesi.value,polaEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;pesanForm.className="status error";ringkasan.hidden=true;
if(nama.length<3){pesanForm.textContent="Nama wajib diisi dan minimal terdiri dari 3 karakter.";}
else if(!polaEmail.test(email)){pesanForm.textContent="Masukkan alamat email yang valid.";}
else if(!sesiValue){pesanForm.textContent="Silakan pilih sesi workshop terlebih dahulu.";}
else{pesanForm.className="status success";pesanForm.textContent="Pendaftaran berhasil divalidasi. Terima kasih!";ringkasan.textContent="Ringkasan: "+nama+" • "+email+" • Sesi "+sesiValue;ringkasan.hidden=false;}});
form.addEventListener("reset",()=>{pesanForm.textContent="";pesanForm.className="status";ringkasan.hidden=true;setTimeout(()=>{document.getElementById("sesiTerpilih").textContent="Sesi yang dipilih: belum ada";},0);});
const inputTugas=document.getElementById("inputTugas"), tambah=document.getElementById("tambahTugas"), daftar=document.getElementById("daftarTugas"), pesanTugas=document.getElementById("pesanTugas");
function buatTugas(teks){const item=document.createElement("li");item.className="task-item";const label=document.createElement("span");label.textContent=teks+" ";const selesai=document.createElement("button");selesai.type="button";selesai.textContent="Tandai selesai";selesai.addEventListener("click",()=>{item.classList.toggle("selesai");selesai.textContent=item.classList.contains("selesai")?"Batalkan selesai":"Tandai selesai";});const hapus=document.createElement("button");hapus.type="button";hapus.className="delete-button";hapus.textContent="Hapus";hapus.addEventListener("click",()=>{item.remove();pesanTugas.textContent="Tugas dihapus.";});item.append(label,selesai,hapus);daftar.appendChild(item);}
tambah.addEventListener("click",()=>{const teks=inputTugas.value.trim();if(!teks){pesanTugas.textContent="Tulis tugas terlebih dahulu.";pesanTugas.className="status error";return;}buatTugas(teks);inputTugas.value="";pesanTugas.textContent="Tugas ditambahkan.";pesanTugas.className="status success";inputTugas.focus();});
inputTugas.addEventListener("keydown",event=>{if(event.key==="Enter")tambah.click();});
const teksToggle=document.getElementById("teksToggle"), tombolToggle=document.getElementById("tombolToggle");
tombolToggle.addEventListener("click",()=>{teksToggle.classList.toggle("hidden-text");tombolToggle.textContent=teksToggle.classList.contains("hidden-text")?"Tampilkan paragraf":"Sembunyikan paragraf";});
