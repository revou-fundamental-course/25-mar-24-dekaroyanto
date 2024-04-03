let validasicuy = (event) => {
  event.preventDefault();
  let tinggi = parseFloat(document.getElementById("tinggiInput").value);
  let berat = parseFloat(document.getElementById("beratInput").value);
  let cowo = document.getElementById("cowo").checked;
  let cewe = document.getElementById("cewe").checked;

  if (isNaN(tinggi) || isNaN(berat) || (!cowo && !cewe)) {
    alert("Lengkapi data untuk menghitung BMI.");
    return false;
  }
  calculateBMI();
  document.getElementById("downloadhasil").style.display = "block";
  document.getElementById("konsultasi").style.display = "block";
  document.getElementById("registrasi").style.display = "block";
  document.getElementById("featuretest").style.display = "block";
  document.getElementById("boxhasilpenyakit").style.display = "block";
  document.getElementById("textdonglot").style.display = "block";
  document.getElementById("donglot").style.display = "flex";
  return false;
};

let calculateBMI = () => {
  let tinggi = parseFloat(document.getElementById("tinggiInput").value);
  let berat = parseFloat(document.getElementById("beratInput").value);
  let cowo = document.getElementById("cowo").checked;
  let cewe = document.getElementById("cewe").checked;
  let gender = cowo ? "Pria" : "Wanita";
  let bmi = berat / (tinggi / 100) ** 2;

  let kategori = "";
  let keterangan = "";
  let penjelasan = "";
  let penjelasanlagi = "";
  let judulpenyakit = "";
  let penyakit1 = "";
  let penyakit2 = "";
  let penyakit3 = "";
  let penyakit4 = "";

  if (bmi < 18.5) {
    kategori = "Kekurangan Berat Badan";
    keterangan = "Anda kekurangan berat badan";
    penjelasan = "Hasil BMI kurang dari 18.5";
    penjelasanlagi =
      "Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk menaikan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal.";
    judulpenyakit =
      "Beberapa penyakit yang berasal dari kekurangan berat badan";
    penyakit1 = "Osteoporosis";
    penyakit2 = "Penurunan sistem kekebalan tubuh";
    penyakit3 = "Gangguan kardiovaskular";
  } else if (bmi < 25) {
    kategori = "Normal (Ideal)";
    keterangan = "Berat badan anda normal";
    penjelasan = "Hasil BMI diantara 18.5 dan 24.9";
    penjelasanlagi =
      "Anda berada dalam kategori berat badan normal (ideal). Untuk menjaga keseimbangan berat badan, disarankan untuk mempertahankan pola makan yang seimbang dan rutin berolahraga.";
    perhatian =
      "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    judulpenyakit =
      "Pertahankan berat badan anda. Jangan lupa berolahraga dan tetap menjaga pola makan, ya!";
  } else if (bmi < 30) {
    kategori = "Kelebihan Berat Badan";
    keterangan = "Anda kelebihan berat badan (Gemuk)";
    penjelasan = "Hasil BMI diantara 25.0 - 29.9";
    penjelasanlagi =
      "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    judulpenyakit = "Beberapa penyakit yang berasal dari kelebihan berat badan";
    penyakit1 = "Diabetes";
    penyakit2 = "Hipertensi";
    penyakit3 = "Sakit Jantung";
    penyakit4 = "Osteoarthritis";
  } else {
    kategori = "Kegemukan (Obesitas)";
    keterangan = "Anda mengalami kegemukan (obesitas)";
    penjelasan = "Hasil BMI diantara 30 atau lebih";
    penjelasanlagi =
      "Anda berada dalam kategori obesitas atau kegemukan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    judulpenyakit = "Beberapa penyakit yang berasal dari kegemukan (obesitas)";
    penyakit1 = "Diabetes";
    penyakit2 = "Hipertensi";
    penyakit3 = "Sakit Jantung";
    penyakit4 = "Osteoarthritis";
  }

  let hasilcuy = document.getElementById("hasilkategori");
  hasilcuy.innerHTML = `${kategori} - ${gender}`;

  let perhitungan = document.getElementById("hasilperhitungan");
  perhitungan.innerHTML = bmi.toFixed(2);

  let keterangancuy = document.getElementById("hasilketerangan");
  keterangancuy.innerHTML = keterangan;

  let penjelasancuy = document.getElementById("hasilpenjelasan");
  penjelasancuy.innerHTML = penjelasan;

  let penjelasanlagicuy = document.getElementById("hasilpenjelasanlagi");
  penjelasanlagicuy.innerHTML = penjelasanlagi;

  let judulpenyakitcuy = document.getElementById("judulpenyakit");
  judulpenyakitcuy.innerHTML = judulpenyakit;

  let penyakitcuy1 = document.getElementById("penyakit1");
  penyakitcuy1.innerHTML = penyakit1;

  let penyakitcuy2 = document.getElementById("penyakit2");
  penyakitcuy2.innerHTML = penyakit2;

  let penyakitcuy3 = document.getElementById("penyakit3");
  penyakitcuy3.innerHTML = penyakit3;

  let penyakitcuy4 = document.getElementById("penyakit4");
  penyakitcuy4.innerHTML = penyakit4;
};

document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("resetButton");

  resetButton.addEventListener("click", () => {
    const confirmReset = confirm(
      "Apakah Anda yakin ingin mereset nilai input dan hasil perhitungan?"
    );

    if (confirmReset) {
      location.reload();
    }
  });
});

let downloadcuy = () => {
  alert("Hasil sudah di download cuy");
};

let donglotapk = () => {
  alert("Aplikasi sedang diunduh...");
};

let konsultasicuy = () => {
  alert("Konsultasi sedang di proses...");
};

let registrasicuy = () => {
  let nama = prompt("Masukkan nama Anda:");

  if (nama !== null && nama !== "") {
    alert(
      `Halo ${nama}, data anda sudah ditaftarkan. Silahkan download aplikasinya ya!`
    );
  } else {
    alert("Registrasi telah dibatalkan.");
  }
};
