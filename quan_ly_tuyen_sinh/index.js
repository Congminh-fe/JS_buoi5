/*
input: 
-subject 1 score: num
-subject 2 score: num
-subject 3 score: num
-benchmark : num

area: 
+ Area a: 2
+area b:1
+area c:0.5
+area x:0
/
priority object
+obj 1:
+obj 2:
obj 3:
+obj x:


output:
result:
total score:
*/



document.getElementById('btn_submit').onclick = function(){
    var area = document.querySelector('#priArea').value * 1;
    var priorityObject = document.querySelector('#PriObject').value *1;
    var firstSCore = document.getElementById("1stSubjectScore").value *1;
    var secondScore = document.getElementById("2ndSubjectScore").value *1;
    var thirdScore = document.getElementById("3rthSubjectScore").value * 1;
    var benchMark = document.getElementById("benchmark").value *1;

   //if
   if (document.querySelector("#priArea").value == 'NaN') {
     return alert("Xin chọn khu vực ưu tiên");
   }
   if (document.querySelector("#PriObject").value == 'null') {
    return alert("Xin chọn đối tượng ưu tiên");
   }
//    tong diem
   var totalScore = (firstSCore + secondScore + thirdScore) + area + priorityObject

   if(totalScore >= benchMark && firstSCore > 0 && secondScore > 0 && thirdScore > 0){
    document.getElementById('resultt').innerHTML = `Bạn đã ĐẬU với tổng điểm : ${totalScore} Điểm`
   }else{
    document.getElementById(
      "resultt"
    ).innerHTML = `Bạn đã TRƯỢT với tổng điểm : ${totalScore} Điểm`;
   } 


   
   


    
}