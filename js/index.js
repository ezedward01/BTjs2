// bài tập 1: tính tiền lương nhân viên
// b1: Input 
// - lương 1 ngày 100000, số ngày làm việc n
// b2: Handle
// - tạo biến lươngNgay vs n vs lương, gán giá trị cho n, lương = luongNgay * n, in kết quả clg
// b3: Output
// - Xuất kết quả
var luongMotNgay = 100000;
var soNgayLam = document.getElementById('soNgayLam');
var luongThucNhan = document.getElementById('pLuongThucNhan');

btnSubmit.onclick = function(){
    var soNgayLam = document.getElementById('soNgayLam').value;
    // var luongThucNhan = document.getElementById('pLuongThucNhan');
    luongThucNhan = luongMotNgay * soNgayLam;
    pLuongThucNhan.innerHTML = luongThucNhan;
}



//bài tập 2: tính giá trị trung bình 
// b1: Input
// - 5 số thực
// b2: Handle 
// - tạo biến a, b, c, d, e vs tB, gán giá trị cho các biến trừ tB, tB = (a + b + c + d + e)/5, in kết quả console
// b3: Out put 
// - Xuất kết quả tB
var a = document.getElementById('a');
var b = document.getElementById('b'); 
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var giaTriTrungBinh = document.getElementById('pGiaTriTrungBinh');//undified
btnSubmit1.onclick = function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value; 
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    var e = document.getElementById('e').value;
    giaTriTrungBinh = (parseInt(a) +parseInt(b) +parseInt(c) +parseInt(d) +parseInt(e)) / 5;
    pGiaTriTrungBinh.innerHTML = giaTriTrungBinh;
}


//bài tập 3: quy đổi tiền
// b1: Input 
// - giaUsd
// b2: Handle
// - tạo biến giaUsd, giaVnd, gán giá trị cho biến giaUsd, giaVnd = giaUsd * 23500, in kết quả console
// b3: Output
// - Xuất kết quả giaVnd VND

var giaTriUSD = 23500;
var soTienCanQuyDoi = document.getElementById('soTienCanQuyDoi');
var soTienSauQuyDoi = document.getElementById('pSoTienSauQuyDoi');

btnSubmit2.onclick = function(){
    var soTienCanQuyDoi = document.getElementById('soTienCanQuyDoi').value;
    soTienSauQuyDoi = soTienCanQuyDoi * giaTriUSD;
    pSoTienSauQuyDoi.innerHTML = soTienSauQuyDoi + ' VND'
}



//bài tập 4: tính diện tích chu vi hình chữ nhật
// b1: Input
// - chiều dài và chiều rộng
// b2: Handle 
// - tạo biến cD, cR, chuVi, dienTich, gán giá trị cho biến cD, cR, chuVi = (cD + cR)/2, dienTich = cD * cR, in kết quả console
// b3: Output
// - Xuất kết quả chuVi , dienTich

var cD = document.getElementById('cD');
var cR = document.getElementById('cR');
var chuVi = document.getElementById('pChuVi');
var dienTich = document.getElementById('pDienTich');

btnSubmit3.onclick = function(){
    var cD = document.getElementById('cD').value;
    var cR = document.getElementById('cR').value;
    chuVi = (parseInt(cD) + parseInt(cR)) / 2;
    dienTich = cD * cR;
    pChuVi.innerHTML = 'Chu vi: ' + chuVi;
    pDienTich.innerHTML ='Diện tích: ' + dienTich;
}



//bài tập 5: Tính tổng 2 ký số
// b1: Input
// - số nguyên dương n có 2 chữ số
// b2: Handle
// - tạo biến n, unit, ten vs sum, gán giá trị cho n, tách số hàng chục ten = Math.floor(n/10), tách số hàng đơn vị unit = n % 10 , sum = ten + unit, in kết quả console
// b3: Output
// - Xuất kết quả sum 
var n = document.getElementById('n');
var sum = document.getElementById('pSum')
var ten = 0;
var unit = 0;

btnSubmit4.onclick = function(){
    var n = document.getElementById('n').value;
    ten = Math.floor(n/10);
    unit = n % 10;
    sum = ten + unit;
    pSum.innerHTML = 'Tổng 2 ký số là: ' + sum;
}
