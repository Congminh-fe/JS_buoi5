

document.getElementById('btn_tinh').onclick = function(){
    var name = document.getElementById('Name').value;
    var thuNhapNam = Number((document.getElementById('yearSalary').value));
    var soNguoiPhuThuoc = document.getElementById("people").value * 1;
    if (thuNhapNam <= 999999 || soNguoiPhuThuoc < 0){
        return alert('Xin nhập lại ')
    }
    var thuNhapChiuThue = thuNhapNam - 4000000 -(soNguoiPhuThuoc *1600000);

    var ThueCaNhan = 0;
    if (thuNhapChiuThue > 0 && thuNhapChiuThue < 60000000){
        ThueCaNhan = (thuNhapChiuThue * 0.05)
    }else if(thuNhapChiuThue <= 120000000){
        ThueCaNhan = thuNhapChiuThue * 0.1;
    }else if(thuNhapChiuThue <= 210000000){
        ThueCaNhan = thuNhapChiuThue * 0.15;
    }else if(thuNhapChiuThue <= 384000000){
        ThueCaNhan = thuNhapChiuThue * 0.2
    }else if( thuNhapChiuThue <= 624000000){
        ThueCaNhan = thuNhapChiuThue * 0.25;
    }else if( thuNhapChiuThue <= 960000000){
        ThueCaNhan = thuNhapChiuThue * 0.3;
    }else{
        ThueCaNhan = thuNhapChiuThue * 0.35
    }
    document.getElementById("thuNhapChiuThue").innerText = thuNhapChiuThue.toLocaleString() + " VNĐ";
    document.getElementById("thuePhaiTra").innerHTML = ThueCaNhan.toLocaleString() + " VNĐ";
    

    
}