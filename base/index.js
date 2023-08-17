// Bai Tap 1

function tinhTien() {
  var soNgay = document.getElementById("so-ngay").value * 1;

  var soTien = document.getElementById("so-tien").value * 1;

  var KetQua = soNgay * soTien;

  Swal.fire(`Số Tiền: ${KetQua} VND`, "Tiền lương của bạn", "success");
}

// Bai Tap 2

function trungBinh(){
    var soThuNhat = document.getElementById("so1").value;
    var soThuHai = document.getElementById("so2").value;
    var soThuBa = document.getElementById("so3").value;
    var soThuTu = document.getElementById("so4").value;
    var soThuNam = document.getElementById("so5").value;

    var soTrungBinh = (Number(soThuNhat) + Number(soThuHai) + Number(soThuBa) + Number(soThuTu) + Number(soThuNam))/5;
    console.log(soTrungBinh);

    document.getElementById(`git init
`).innerHTML = soTrungBinh;
}

// Bai Tap 3
function chuyenDoi() {
  var USD = document.getElementById("USD").value * 1;

  var VND = document.getElementById("VND").value;

  var KetQua = USD * VND;

  Swal.fire(`Số Tiền: ${KetQua} VND`, "You clicked the button!", "success");
}
// Bài 4
function tinhDienTich(){
  var chieuDai = document.getElementById("chieu-dai").value;
  var chieuRong = document.getElementById("chieu-rong").value;

  var dienTich = chieuDai * chieuRong;
  var chuVi = 2 * (Number(chieuDai) + Number(chieuRong));

  document.getElementById(`chuVi`).innerHTML = chuVi;
  document.getElementById(`dienTich`).innerHTML = dienTich;
}