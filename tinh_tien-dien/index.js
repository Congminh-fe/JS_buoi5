document.getElementById("btn_tienDien").onclick = function(){
    var soKW = document.getElementById("soKw").value * 1;
    var khachHang = document.getElementById("customerName").value;
    var tongTien = 0;

   
    if(soKW <= 50 && soKW >= 0){
        tongTien = soKW * 500
    }else if( soKW > 50 && soKW <=100){
      // vd 51kw = 50 kw * 500) + (sokw - 50)* 650
        tongTien = (50 * 500) + (soKW - 50) *650;
    }else if (soKW > 100 && soKW <= 200) {
      tongTien = (50 * 500 + (50) * 650) + (soKW - 100)* 850;
    } else if (soKW > 200 && soKW <= 350) {
      tongTien = 142500 + (soKW - 200) * 1100 ;
    }else if( soKW < 0){
      return alert('Vui lòng nhập số KW hợp lệ')
    }else{
      tongTien = 307500 + (soKW - 350) * 1300;
      
    }
    


    document.getElementById("result").innerHTML = `${khachHang} với hóa đơn là ${tongTien.toLocaleString()} VNĐ`;
    
};