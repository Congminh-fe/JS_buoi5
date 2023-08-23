/**
 * input:
 * ma khach hang
 * loai khach hang
 * ++if laf doanh nghiep => so ket noi display
 * ++ nha dan ==> hide so ket noi
 * so ket noi
 * so ketNoi cao cap
 *
 * progess:
 * tong hoa don ( nha dan) = 4.5 + 20.5 + 7.5* so ketNoi
 * nha dan:
 * tong (cong ty) = if cables <= 10 => 15 + 75 + 50 * so ketNoi;
 * if cables > 10 => 15 + 75 + (cable - 10) * 5 +50 * so ketNoi
 *
 * output:
 *
 * tong hoa don:
 *
 *
 *
 */
function chonAnHien(typeOfCus) {
  switch (typeOfCus) {
    case "civilian":
      document.getElementById("anHien").style.display = "none";
      break;

    case "Bussiness":
      document.getElementById("anHien").style.display = "block";
      break;
    default:
      alert("Vui lòng chọn loại khách hàng");
      break;
  }
}
//chọn loại kh
function typeCap() {
  var typeOfCus = document.getElementById("typeCap").value;
  chonAnHien(typeOfCus);
}

//  tính dich vu doanh nghiep
function PhiDichVuDoanhNghiep(soKetNoi) {
  if (soKetNoi > 0 && soKetNoi <= 10) {
    return 75;
  } else {
    return 80
  }
}

//tính tiền cao theo loại KH



//tính tiền cáp
 document.getElementById("btn_cap").onclick = function () {
   var typeOfCus = document.getElementById("typeCap").value;
  var idCustomer = document.getElementById("customerID").value;
  var kenhCaoCap = document.getElementById("kenhCaoCap").value * 1;
  var PhiDichVu = 0;
  var soKetNoi = document.getElementById("cables").value * 1;
  var Bill = 0
  if(soKetNoi < 0){
    alert('Vui lòng nhập lại')
  }else if( soKetNoi <= 10){
    PhiDichVu = 75;
  }else{
    PhiDichVu = 75 + (soKetNoi - 10) * 5;
  }
  

  //tinh tien
  switch(typeOfCus){
    case "civilian":
        Bill = 4.5 + 20.5 + 7.5 * kenhCaoCap;
        break;
    case "Bussiness":
        Bill = 15 + PhiDichVu + 50 * kenhCaoCap;
        break;
    default:
    alert('nhap lai');
  }
  document.getElementById(
    "inKetQua"
  ).innerHTML = `Mã khách hàng: ${idCustomer} với hóa đơn cáp:  $${Bill.toLocaleString()} `;

  
 }