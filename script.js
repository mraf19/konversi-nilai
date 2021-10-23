let check = true
function cekNilai (nilai) {
    if (nilai !== null && nilai !== ""){
        if ( nilai <=100 && nilai >= 90){
            alert("Grade A")
        } else if (nilai < 90 && nilai >= 75){
            alert("Grade B")
        }else if (nilai < 75 && nilai >= 55) {
            alert("Grade C")
        }else if (nilai < 55 && nilai >= 30){
            alert("Grade D")
        }else if (nilai < 30 && nilai >= 0){
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