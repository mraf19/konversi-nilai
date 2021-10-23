let check = true
function cekNilai (nilai) {
    if (nilai !== null){
        if ( nilai <=100 && nilai >= 90){
            alert("Grade A")
        } else if (nilai < 90 && nilai >= 85){
            alert("Grade B")
        }else if (nilai < 85 && nilai >= 60) {
            alert("Grade C")
        }else if (nilai < 60 && nilai >= 40){
            alert("Grade D")
        }else if (nilai < 40 && nilai >= 0){
            alert("Grade E")
        }else {
            alert("Nilai yang anda Masukkan tidak valid. Masukkan nilai dengan rentang dari 0 sampai dengan 100")
        }
    }
    return
}

while(check){
    let nilai = prompt("Masukkan nilai anda ")
    cekNilai(nilai)
    check = confirm("Apakah masih ingin mengecek nilai?")
}