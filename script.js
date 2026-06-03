// ============================================================================
// HỆ THỐNG QUẢN LÝ HỌC SINH - CÓ LƯU TRỮ LOCALSTORAGE
// ============================================================================
// --- 1. LẤY DỮ LIỆU TỪ MÁY (LOCALSTORAGE) ---
// Tạo một mảng (danh sách) rỗng để chứa thông tin học sinh
var danhSachHocSinh = [];
// Tìm trong bộ nhớ của trình duyệt xem có biến nào tên là "duLieuHocSinh" không
var chuoiHocSinh = localStorage.getItem("duLieuHocSinh");
var danhSachTaiKhoan = [];
// Kiểm tra xem dữ liệu lấy ra có khác rỗng (null) hay không
if (chuoiHocSinh !== null) {
    // Nếu có dữ liệu cũ, biến đổi từ chuỗi văn bản (JSON) thành mảng thực tế
    danhSachHocSinh = JSON.parse(chuoiHocSinh);
} else {
    // Nếu chưa có gì (lần đầu vào web), tạo một mảng với 2 người mẫu
    danhSachHocSinh = [
        { maSo: 1, tenDangNhap: "hocsinhA", hoTen: "Nguyễn Văn A", email: "nva@gmail.com", canCuoc: "001002003004", gioiTinh: "Nam", ngaySinh: "2008-05-12", tuoi: 15, diemToan: 8.5, diemVan: 7.0 },
        { maSo: 2, tenDangNhap: "hocsinhB", hoTen: "Trần Thị B", email: "ttb@gmail.com", canCuoc: "001002003005", gioiTinh: "Nữ", ngaySinh: "2007-10-22", tuoi: 16, diemToan: 4.5, diemVan: 5.5 }
    ];
function luuHocSinhVaoMay() { localStorage.setItem("KHO_HOC_SINH", JSON.stringify(danhSachHocSinh)); }
function layHocSinhTuMay() {
    var data = localStorage.getItem("KHO_HOC_SINH");
    if (data !== null) danhSachHocSinh = JSON.parse(data);
}
// Biến đếm dùng để cấp mã số ID mới tự động cho mỗi học sinh thêm vào (bắt đầu từ 3)
var maSoTuDong = 3;
// Thử lấy mã số tự động từ bộ nhớ trình duyệt
var maSoLuuTrongMay = localStorage.getItem("maSoTuDong");
// Nếu trong máy đã có lưu mã số (không phải null)
if (maSoLuuTrongMay !== null) {
    // Ép kiểu chữ thành số nguyên (parseInt) để dùng
    maSoTuDong = parseInt(maSoLuuTrongMay);
function luuTaiKhoanVaoMay() { localStorage.setItem("KHO_TAI_KHOAN", JSON.stringify(danhSachTaiKhoan)); }
function layTaiKhoanTuMay() {
    var data = localStorage.getItem("KHO_TAI_KHOAN");
    if (data !== null) danhSachTaiKhoan = JSON.parse(data);
    else danhSachTaiKhoan = [{ tenDangNhap: "admin", matKhau: "123", vaiTro: "giaovien" }];
}
// Biến dùng để biết người đang đăng nhập hiện tại là ai (mặc định là giáo viên)
var vaiTroHienTai = "giaovien";
// Biến lưu trữ tên tài khoản đang đăng nhập
var taiKhoanHienTai = "";
// Tạo mảng danh sách các tài khoản được phép đăng nhập
var danhSachTaiKhoan = [];
// Tìm bộ nhớ xem đã có tài khoản nào được đăng ký trước đó chưa
var chuoiTaiKhoan = localStorage.getItem("duLieuTaiKhoan");
// Nếu đã có dữ liệu tài khoản trong máy
if (chuoiTaiKhoan !== null) {
    // Dịch chuỗi thành mảng
    danhSachTaiKhoan = JSON.parse(chuoiTaiKhoan);
} else {
    // Nếu không có, tạo sẵn một tài khoản Admin (Giáo viên) mặc định
    danhSachTaiKhoan = [
        { tenDangNhap: "admin", matKhau: "123456", vaiTro: "giaovien" },
        { tenDangNhap: "hocsinhA", matKhau: "123456", vaiTro: "hocsinh" },
        { tenDangNhap: "hocsinhB", matKhau: "123456", vaiTro: "hocsinh" }
    ];
function tinhDiemTB(toan, van, anh) { 
    anh = anh || 0; 
    return ((toan + van + anh) / 3).toFixed(1); 
}
// --- HÀM LƯU DỮ LIỆU VÀO MÁY ---
// Hàm này được gọi mỗi khi có học sinh mới thêm/sửa/xóa để lưu lại không bị mất
function luuHocSinhVaoMay() {
    // Biến mảng danh sách học sinh thành một chuỗi văn bản dài
    var chuoi = JSON.stringify(danhSachHocSinh);
    // Ghi chuỗi đó vào bộ nhớ trình duyệt với tên "duLieuHocSinh"
    localStorage.setItem("duLieuHocSinh", chuoi);
    // Lưu luôn cả biến mã số tự động để lần sau không bị cấp trùng ID
    localStorage.setItem("maSoTuDong", maSoTuDong);
function xepLoaiHS(diemTB) {
    if (diemTB >= 8.0) return "Giỏi";
    if (diemTB >= 6.5) return "Khá";
    if (diemTB >= 5.0) return "TrungBình";
    return "Yếu";
}
// Hàm lưu tài khoản mỗi khi có người mới đăng ký
function luuTaiKhoanVaoMay() {
    // Biến mảng tài khoản thành chuỗi
    var chuoi = JSON.stringify(danhSachTaiKhoan);
    // Lưu vào bộ nhớ với tên "duLieuTaiKhoan"
    localStorage.setItem("duLieuTaiKhoan", chuoi);
function xoaHocSinh(id) {
    if (confirm("Xóa học sinh này?")) {
        danhSachHocSinh = danhSachHocSinh.filter(hs => hs.id !== id);
        luuHocSinhVaoMay(); 
        veLaiBang();
    }
}
// --- 2. HÀM TÍNH ĐIỂM TRUNG BÌNH VÀ XẾP LOẠI ---
// Hàm này nhận vào 2 con số là điểm toán và điểm văn
function tinhDiemTrungBinhVaXepLoai(toan, van) {
    // Tính trung bình cộng của 2 môn
    var diemTrungBinh = (toan + van) / 2;
    // Tạo ra một hộp chứa 3 thứ: điểm TB, chữ xếp loại, và màu sắc để tô lên giao diện
    var ketQua = { diem: diemTrungBinh, xepLoai: "", mauSac: "" };
    // So sánh điểm: Nếu >= 8.0 thì là Giỏi
    if (diemTrungBinh >= 8.0) {
        ketQua.xepLoai = "Giỏi";
        ketQua.mauSac = "excellent"; // Class CSS màu xanh lá
    // Nếu điểm không >= 8.0 nhưng >= 6.5 thì là Khá
    } else if (diemTrungBinh >= 6.5) {
        ketQua.xepLoai = "Khá";
        ketQua.mauSac = "good";      // Class CSS màu xanh dương
    // Nếu >= 5.0 thì là Trung Bình
    } else if (diemTrungBinh >= 5.0) {
        ketQua.xepLoai = "Trung Bình";
        ketQua.mauSac = "average";   // Class CSS màu cam
    // Trái lại (nhỏ hơn 5) thì là Yếu
    } else {
        ketQua.xepLoai = "Yếu";
        ketQua.mauSac = "poor";      // Class CSS màu đỏ
function suaHocSinh(id) {
    var hs = danhSachHocSinh.find(h => h.id === id);
    if (hs) {
        document.getElementById("edit-id").value = hs.id;
        document.getElementById("student-name").value = hs.hoTen;
        document.getElementById("student-sbd").value = hs.sbd || "";
        document.getElementById("student-dob").value = hs.ngaySinh || "";
        document.getElementById("student-gender").value = hs.gioiTinh || "Nam";
        document.getElementById("math-score").value = hs.toan;
        document.getElementById("lit-score").value = hs.van;
        document.getElementById("eng-score").value = hs.anh || 0;
        document.getElementById("form-title").innerText = "Sửa Thông Tin";
    }
    
    // Trả hộp kết quả ra ngoài để hàm khác xài
    return ketQua;
}
// --- 3. HÀM HIỂN THỊ DANH SÁCH ---
// Hàm này quét toàn bộ mảng và vẽ ra màn hình bảng danh sách
function hienThiDanhSachHocSinh() {
    // Lấy thẻ Tbody (thân bảng) bằng ID
    var thanBang = document.getElementById("student-tbody");
    // Lấy thẻ đếm tổng số học sinh
    var theTongSo = document.getElementById("total-students");
    // Lấy dòng chữ "Chưa có dữ liệu"
    var tinNhanTrong = document.getElementById("empty-msg");
    // Lấy thẻ hiển thị thông tin cá nhân của học sinh
    var theThongTinCaNhan = document.getElementById("student-info-card");
document.getElementById("student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var idSua = document.getElementById("edit-id").value;
    
    // Xóa trắng bảng cũ để chuẩn bị vẽ lại từ đầu
    thanBang.innerHTML = "";
    
    // Lọc mảng theo quyền truy cập
    var danhSachHienThi = [];
    if (vaiTroHienTai === "hocsinh") {
        theThongTinCaNhan.style.display = "block";
        for (var k = 0; k < danhSachHocSinh.length; k++) {
            if (danhSachHocSinh[k].tenDangNhap === taiKhoanHienTai) {
                danhSachHienThi.push(danhSachHocSinh[k]);
                // Hiển thị thông tin lên thẻ
                document.getElementById("info-name").innerText = danhSachHocSinh[k].hoTen;
                document.getElementById("info-username").innerText = danhSachHocSinh[k].tenDangNhap || "";
                document.getElementById("info-email").innerText = danhSachHocSinh[k].email || "";
                document.getElementById("info-idcard").innerText = danhSachHocSinh[k].canCuoc || "";
                document.getElementById("info-gender").innerText = danhSachHocSinh[k].gioiTinh || "";
                document.getElementById("info-dob").innerText = danhSachHocSinh[k].ngaySinh || "";
            }
        }
        // Nếu không có dữ liệu khớp (học sinh chưa được thêm vào ds)
        if(danhSachHienThi.length === 0) {
            document.getElementById("info-name").innerText = "Chưa có dữ liệu";
            document.getElementById("info-username").innerText = taiKhoanHienTai;
            document.getElementById("info-email").innerText = "Chưa có dữ liệu";
            document.getElementById("info-idcard").innerText = "Chưa có dữ liệu";
            document.getElementById("info-gender").innerText = "Chưa có dữ liệu";
            document.getElementById("info-dob").innerText = "Chưa có dữ liệu";
        }
    } else {
        theThongTinCaNhan.style.display = "none";
        danhSachHienThi = danhSachHocSinh;
    }
    var ten = document.getElementById("student-name").value;
    var sbd = document.getElementById("student-sbd").value;
    var dob = document.getElementById("student-dob").value;
    var gender = document.getElementById("student-gender").value;
    var toan = parseFloat(document.getElementById("math-score").value);
    var van = parseFloat(document.getElementById("lit-score").value);
    var anh = parseFloat(document.getElementById("eng-score").value);
    // Đếm số phần tử trong mảng (.length) và ghi ra màn hình
    theTongSo.innerText = danhSachHienThi.length;
    // Nếu mảng rỗng (chiều dài = 0)
    if (danhSachHienThi.length === 0) {
        // Hiện dòng chữ "Chưa có dữ liệu" lên
        tinNhanTrong.style.display = "block";
        return; // Dừng hàm lại, không chạy xuống dưới nữa
    if (toan > 10 || toan < 0 || van > 10 || van < 0 || anh > 10 || anh < 0) {
        alert("❌ Lỗi: Điểm số chỉ được phép nhập từ 0 đến 10!");
        return; 
    }
    
    // Nếu có dữ liệu thì giấu dòng chữ "Chưa có dữ liệu" đi
    tinNhanTrong.style.display = "none";
    // Dùng vòng lặp for chạy từ vị trí số 0 đến cuối mảng (mỗi bước tăng i lên 1)
    for (var i = 0; i < danhSachHienThi.length; i = i + 1) {
        // Lấy ra từng đối tượng học sinh
        var hocSinh = danhSachHienThi[i]; 
        // Tính điểm trung bình của học sinh này
        var thongTinDiem = tinhDiemTrungBinhVaXepLoai(hocSinh.diemToan, hocSinh.diemVan);
        
        // Tạo ra một thẻ <tr> (dòng của bảng) mới
        var dongMoi = document.createElement("tr");
        
        // Biến lưu mã HTML, ta sẽ cộng dồn các cột <td> vào đây
        var noiDungHtml = "";
        noiDungHtml = noiDungHtml + "<td>#" + (i + 1) + "</td>"; // Cột số thứ tự (chỉ số mảng + 1)
        noiDungHtml = noiDungHtml + "<td><strong>" + hocSinh.hoTen + "</strong></td>"; // Cột họ tên in đậm
        noiDungHtml = noiDungHtml + "<td>" + hocSinh.tuoi + "</td>"; // Cột tuổi
        noiDungHtml = noiDungHtml + "<td>" + hocSinh.diemToan + "</td>"; // Cột điểm toán
        noiDungHtml = noiDungHtml + "<td>" + hocSinh.diemVan + "</td>"; // Cột điểm văn
        noiDungHtml = noiDungHtml + "<td><strong>" + thongTinDiem.diem + "</strong></td>"; // Cột điểm TB
        noiDungHtml = noiDungHtml + "<td><span class='badge " + thongTinDiem.mauSac + "'>" + thongTinDiem.xepLoai + "</span></td>"; // Cột nhãn xếp loại
        
        // KIỂM TRA QUYỀN: Chỉ vẽ cột "Hành Động" chứa nút Sửa/Xóa nếu đang là Giáo Viên
        if (vaiTroHienTai === "giaovien") {
            // Tạo 2 cái nút HTML và truyền ID của học sinh vào hàm khi click
            var nutSua = "<button class='btn-edit' onclick='suaHocSinh(" + hocSinh.maSo + ")'>Sửa</button>";
            var nutXoa = "<button class='btn-danger' onclick='xoaHocSinh(" + hocSinh.maSo + ")'>Xóa</button>";
            // Cộng 2 nút vào ô <td>
            noiDungHtml = noiDungHtml + "<td>" + nutSua + " " + nutXoa + "</td>";
        }
        
        // Gắn chuỗi HTML vừa cộng xong vào bên trong dòng mới
        dongMoi.innerHTML = noiDungHtml;
        // Nhét dòng mới vào thân bảng trên giao diện
        thanBang.appendChild(dongMoi);
    }
}
// --- 4. HÀM XỬ LÝ KHI BẤM NÚT LƯU TRÊN FORM ---
// Hàm này chạy khi Giáo viên gõ xong thông tin và bấm nút "Lưu"
function xuLyGuiForm() {
    // Tóm lấy tất cả các ô nhập liệu bằng ID của chúng
    var oIdSua = document.getElementById("edit-id");
    var oTaiKhoan = document.getElementById("student-username");
    var oTen = document.getElementById("student-name");
    var oEmail = document.getElementById("student-email");
    var oCanCuoc = document.getElementById("student-idcard");
    var oGioiTinh = document.getElementById("student-gender");
    var oNgaySinh = document.getElementById("student-dob");
    var oTuoi = document.getElementById("student-age");
    var oToan = document.getElementById("math-score");
    var oVan = document.getElementById("lit-score");
    var theThongBao = document.getElementById("form-msg"); // Nơi in chữ báo lỗi
    // Lấy giá trị (chữ gõ vào) từ các ô đó
    var idSua = oIdSua.value;
    var taiKhoanHS = oTaiKhoan.value;
    var ten = oTen.value;
    var email = oEmail.value;
    var canCuoc = oCanCuoc.value;
    var gioiTinh = oGioiTinh.value;
    var ngaySinh = oNgaySinh.value;
    var tuoi = oTuoi.value;
    var toan = oToan.value;
    var van = oVan.value;
    // Kiểm tra xem có ô nào bị bỏ trống hay không (So sánh bằng chuỗi rỗng "")
    if (taiKhoanHS === "" || ten === "" || email === "" || canCuoc === "" || ngaySinh === "" || tuoi === "" || toan === "" || van === "") {
        // Đổi chữ và màu để báo lỗi
        theThongBao.innerText = "Vui lòng nhập đầy đủ thông tin!";
        theThongBao.className = "form-msg error";
        return; // Lỗi thì dừng luôn, không lưu
    }
    // Biến đổi chữ gõ vào (ví dụ "8.5") thành con số thực sự để máy tính hiểu được
    var diemToanSo = parseFloat(toan);
    var diemVanSo = parseFloat(van);
    var tuoiSo = parseInt(tuoi); // Đổi thành số nguyên cho tuổi
    // Điểm thì không thể âm hoặc lớn hơn 10 được
    if (diemToanSo < 0 || diemToanSo > 10 || diemVanSo < 0 || diemVanSo > 10) {
        theThongBao.innerText = "Điểm số phải từ 0 đến 10!";
        theThongBao.className = "form-msg error";
    var trungSbd = danhSachHocSinh.find(h => h.sbd === sbd);
    if (trungSbd && (idSua === "" || trungSbd.id !== parseInt(idSua))) {
        alert("❌ Lỗi: Số báo danh '" + sbd + "' đã được cấp cho người khác!");
        return;
    }
    // Kiểm tra xem ta đang THÊM MỚI hay SỬA LẠI?
    // Nếu ô ID ẩn chứa chữ -> Nghĩa là ta đang bấm nút Sửa
    if (idSua !== "") {
        // Chạy hàm cập nhật
        capNhatHocSinh(parseInt(idSua), taiKhoanHS, ten, email, canCuoc, gioiTinh, ngaySinh, tuoiSo, diemToanSo, diemVanSo);
        hienThiThongBao("Cập nhật thông tin thành công!");
        var hs = danhSachHocSinh.find(h => h.id === parseInt(idSua));
        hs.hoTen = ten; hs.sbd = sbd; 
        hs.ngaySinh = dob; hs.gioiTinh = gender;
        hs.toan = toan; hs.van = van; hs.anh = anh; 
    } else {
        // Nếu rỗng -> Nghĩa là ta đang tạo mới hoàn toàn
        themHocSinh(taiKhoanHS, ten, email, canCuoc, gioiTinh, ngaySinh, tuoiSo, diemToanSo, diemVanSo);
        hienThiThongBao("Thêm học sinh mới thành công!");
        var idMoi = danhSachHocSinh.length > 0 ? danhSachHocSinh[danhSachHocSinh.length - 1].id + 1 : 1;
        danhSachHocSinh.push({ id: idMoi, hoTen: ten, sbd: sbd, ngaySinh: dob, gioiTinh: gender, toan: toan, van: van, anh: anh });
    }
    
    luuHocSinhVaoMay(); 
    donDepForm(); 
    veLaiBang();
});
    // Làm sạch trắng form đi để chuẩn bị cho lần nhập tiếp theo
    lamSachForm();
    // Vẽ lại cái bảng để hiện dữ liệu mới nhất
    hienThiDanhSachHocSinh();
function donDepForm() {
    document.getElementById("student-form").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("form-title").innerText = "Thêm Học Sinh Mới";
}
// --- 5. HÀM THÊM HỌC SINH VÀO MẢNG ---
function themHocSinh(taiKhoanHS, ten, email, canCuoc, gioiTinh, ngaySinh, tuoi, toan, van) {
    // Gom các thông tin lại thành 1 đối tượng duy nhất
    var hocSinhMoi = {
        maSo: maSoTuDong, 
        tenDangNhap: taiKhoanHS,
        hoTen: ten,
        email: email,
        canCuoc: canCuoc,
        gioiTinh: gioiTinh,
        ngaySinh: ngaySinh,
        tuoi: tuoi,
        diemToan: toan,
        diemVan: van
    };
    // Đẩy đối tượng đó vào mảng
    danhSachHocSinh.push(hocSinhMoi);
    // Tăng mã số tự động lên 1 đơn vị để người sau không bị trùng
    maSoTuDong = maSoTuDong + 1; 
function veLaiBang() {
    var theBang = document.getElementById("student-tbody");
    if (!theBang) return; 
    theBang.innerHTML = ""; 
    
    // Lưu ngay danh sách mới này vào máy
    luuHocSinhVaoMay();
}
// --- 6. HÀM CHUẨN BỊ TRƯỚC KHI SỬA ---
// Khi bấm nút Sửa ở bảng, nó sẽ gọi hàm này và truyền vào ID
function suaHocSinh(idGoiRa) {
    var viTri = 0;
    var hocSinhCanSua = null; // Biến tạm để đựng người cần sửa
    
    // Dùng vòng lặp while dò tìm trong mảng xem ai có ID khớp
    while (viTri < danhSachHocSinh.length) {
        if (danhSachHocSinh[viTri].maSo === idGoiRa) {
            hocSinhCanSua = danhSachHocSinh[viTri]; // Bắt được người đó rồi!
            break; // Thoát vòng lặp cho nhẹ máy
        }
        viTri = viTri + 1; // Nhích lên 1 vị trí để tìm tiếp
    }
    // Nếu tìm thấy người đó
    if (hocSinhCanSua !== null) {
        // Đẩy toàn bộ dữ liệu cũ của họ ngược lại lên các ô input trên Form
        document.getElementById("edit-id").value = hocSinhCanSua.maSo;
        document.getElementById("student-username").value = hocSinhCanSua.tenDangNhap || "";
        document.getElementById("student-name").value = hocSinhCanSua.hoTen;
        document.getElementById("student-email").value = hocSinhCanSua.email || "";
        document.getElementById("student-idcard").value = hocSinhCanSua.canCuoc || "";
        document.getElementById("student-gender").value = hocSinhCanSua.gioiTinh || "Nam";
        document.getElementById("student-dob").value = hocSinhCanSua.ngaySinh || "";
        document.getElementById("student-age").value = hocSinhCanSua.tuoi;
        document.getElementById("math-score").value = hocSinhCanSua.diemToan;
        document.getElementById("lit-score").value = hocSinhCanSua.diemVan;
    for (var i = 0; i < danhSachHocSinh.length; i++) {
        var hs = danhSachHocSinh[i];
        
        // Đổi chữ tiêu đề Form cho phù hợp ngữ cảnh
        document.getElementById("form-title").innerText = "Cập Nhật Học Sinh";
        document.getElementById("btn-submit").innerText = "Cập Nhật";
        document.getElementById("form-msg").innerText = "";
    }
}
// --- 7. HÀM LƯU GHI ĐÈ KHI SỬA ---
function capNhatHocSinh(idSua, taiKhoanHS, ten, email, canCuoc, gioiTinh, ngaySinh, tuoi, toan, van) {
    // Vòng lặp tìm lại đúng người đó một lần nữa
    for (var i = 0; i < danhSachHocSinh.length; i = i + 1) {
        if (danhSachHocSinh[i].maSo === idSua) {
            // Thay thế thông tin cũ bằng thông tin mới gõ vào
            danhSachHocSinh[i].tenDangNhap = taiKhoanHS;
            danhSachHocSinh[i].hoTen = ten;
            danhSachHocSinh[i].email = email;
            danhSachHocSinh[i].canCuoc = canCuoc;
            danhSachHocSinh[i].gioiTinh = gioiTinh;
            danhSachHocSinh[i].ngaySinh = ngaySinh;
            danhSachHocSinh[i].tuoi = tuoi;
            danhSachHocSinh[i].diemToan = toan;
            danhSachHocSinh[i].diemVan = van;
            break; 
        }
    }
    // Lưu lại vào máy tính
    luuHocSinhVaoMay();
}
// --- 8. HÀM XÓA HỌC SINH ---
function xoaHocSinh(idXoa) {
    // Hàm confirm sẽ sinh ra một bảng thông báo có 2 nút YES/NO
    var dongY = confirm("Bạn có chắc chắn muốn xóa?");
    
    // Nếu bấm YES (đồng ý)
    if (dongY === true) {
        var mangMoi = []; // Tạo 1 mảng trống
        // Chạy vòng lặp quét qua toàn bộ lớp
        for (var i = 0; i < danhSachHocSinh.length; i = i + 1) {
            // Ai KHÔNG PHẢI là người đang cần xóa thì được nhét vào mảng mới
            if (danhSachHocSinh[i].maSo !== idXoa) {
                mangMoi.push(danhSachHocSinh[i]);
        if (vaiTroHienTai === "hocsinh") {
            if (hs.sbd !== taiKhoanHienTai) continue; 
            else {
                var infoName = document.getElementById("info-name");
                if(infoName) infoName.innerText = hs.hoTen;
                
                var infoSbd = document.getElementById("info-sbd");
                if(infoSbd) infoSbd.innerText = hs.sbd || "";
                
                var infoDob = document.getElementById("info-dob");
                if(infoDob) infoDob.innerText = hs.ngaySinh || "";
                
                var infoGender = document.getElementById("info-gender");
                if(infoGender) infoGender.innerText = hs.gioiTinh || "";
            }
        }
        // Cuối cùng, gán mảng mới thay thế cho mảng cũ (Người cần xóa đã bị loại bỏ)
        danhSachHocSinh = mangMoi;
        
        // Lưu sự thay đổi vào máy
        luuHocSinhVaoMay();
        
        // Vẽ lại bảng mới
        hienThiDanhSachHocSinh();
        hienThiThongBao("Đã xóa thành công!");
    }
}
// --- 9. HÀM DỌN DẸP LÀM SẠCH FORM ---
function lamSachForm() {
    // Gán tất cả giá trị các ô input thành chuỗi rỗng ""
    document.getElementById("edit-id").value = "";
    document.getElementById("student-username").value = "";
    document.getElementById("student-name").value = "";
    document.getElementById("student-email").value = "";
    document.getElementById("student-idcard").value = "";
    document.getElementById("student-gender").value = "Nam";
    document.getElementById("student-dob").value = "";
    document.getElementById("student-age").value = "";
    document.getElementById("math-score").value = "";
    document.getElementById("lit-score").value = "";
    
    // Trả lại tiêu đề mặc định
    document.getElementById("form-title").innerText = "Thêm Học Sinh Mới";
    document.getElementById("btn-submit").innerText = "Lưu Thông Tin";
    document.getElementById("form-msg").innerText = "";
}
        var dtb = tinhDiemTB(hs.toan, hs.van, hs.anh);
        var loai = xepLoaiHS(dtb);
        var btnStr = vaiTroHienTai === "giaovien" ? `<button onclick="suaHocSinh(${hs.id})" class="btn-edit" style="width:auto; padding:5px 10px">Sửa</button> <button onclick="xoaHocSinh(${hs.id})" class="btn-danger" style="width:auto; padding:5px 10px; margin-left:5px;">Xóa</button>` : "";
// --- 10. HÀM HIỂN THỊ CỬA SỔ BÁO THÀNH CÔNG ---
function hienThiThongBao(noiDung) {
    document.getElementById("alert-msg").innerText = noiDung;
    // Thêm class active để cửa sổ hiện lên mượt mà
    document.getElementById("alert-modal").classList.add("active");
        theBang.innerHTML += `<tr>
            <td><strong>${hs.hoTen}</strong><br><small style="color:#64748b">SBD: ${hs.sbd || ""}</small></td>
            <td>${hs.toan}</td>
            <td>${hs.van}</td>
            <td>${hs.anh || 0}</td>
            <td><strong>${dtb}</strong></td>
            <td><span class="badge ${loai}">${loai}</span></td>
            <td>${btnStr}</td>
        </tr>`;
    }
}
function dongThongBao() {
    // Gỡ class active để giấu cửa sổ đi
    document.getElementById("alert-modal").classList.remove("active");
}
var vaiTroHienTai = ""; var taiKhoanHienTai = ""; 
// window.onload: Sự kiện kích hoạt khi trình duyệt tải xong trang web
window.onload = function() {
    // Tự động vẽ bảng danh sách
    hienThiDanhSachHocSinh();
};
// ============================================================================
// --- 11. HỆ THỐNG ĐĂNG NHẬP VÀ PHÂN QUYỀN VAI TRÒ ---
// ============================================================================
// Biến lưu tạm vai trò mà người dùng đã bấm chọn ở màn hình "Bạn là ai?"
var vaiTroChonTruoc = ""; 
// Hàm chạy khi người dùng bấm nút Chọn Giáo viên hoặc Học sinh
function chonVaiTroBatDau(vaiTro) {
    // Lưu lại vai trò
    vaiTroChonTruoc = vaiTro;
    // Giấu bảng hỏi "Bạn là ai?" đi
    document.getElementById("role-panel").style.display = "none";
    // Hiển thị khung đăng nhập lên
    document.getElementById("login-panel-container").style.display = "block";
function chuyenCheDo(laDangKy) {
    var loginForm = document.getElementById("login-form");
    var regForm = document.getElementById("register-form");
    var title = document.getElementById("auth-title");
    
    // Sửa chữ trên tiêu đề cho thân thiện hơn
    var textVaiTro = (vaiTro === "giaovien") ? "Giáo Viên" : "Học Sinh";
    document.getElementById("auth-title").innerText = "Đăng Nhập (" + textVaiTro + ")";
    if (loginForm) loginForm.style.display = laDangKy ? "none" : "block";
    if (regForm) regForm.style.display = laDangKy ? "block" : "none";
    if (title) title.innerText = laDangKy ? "Đăng Ký Tài Khoản" : "Đăng Nhập";
}
// Hàm chạy khi bấm nút "Quay lại" ở màn hình đăng nhập
function quayLaiChonVaiTro() {
    // Xóa vai trò đã lưu
    vaiTroChonTruoc = "";
    // Hiện lại màn hình "Bạn là ai?"
    document.getElementById("role-panel").style.display = "block";
    // Giấu khung đăng nhập đi
    document.getElementById("login-panel-container").style.display = "none";
function xuLyDangKy() {
    var roleDangKy = document.getElementById("reg-role").value;
    var tk = document.getElementById("reg-username").value;
    var mk = document.getElementById("reg-password").value;
    
    // Trả màn hình đăng nhập về lại mặc định, lỡ người dùng đang dở tay đăng ký
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-msg").innerText = "";
    document.getElementById("register-msg").innerText = "";
}
// Hàm quan trọng nhất để điều khiển giao diện theo chức vụ
function hienThiGiaoDienTheoVaiTro() {
    // Tóm lấy cột Form nhập liệu
    var khuVucForm = document.getElementById("form-section");
    // Tóm lấy cột "Hành Động" ở tiêu đề bảng
    var cotHanhDong = document.getElementById("th-hanh-dong");
    // Tóm lấy khung chứa toàn bộ nội dung web
    var noiDungChinh = document.querySelector(".main-content");
    // Nếu người vừa đăng nhập thành công là Học Sinh
    if (vaiTroHienTai === "hocsinh") {
        // Giấu toàn bộ Form đi
        khuVucForm.style.display = "none";
        // Giấu luôn chữ "Hành Động" trên bảng
        cotHanhDong.style.display = "none";
        // Gắn thêm class CSS này vào để bảng điểm tự động phình to ra giữa trang
        noiDungChinh.classList.add("student-view");
    } else {
        // Nếu là Giáo Viên thì hiện lại bình thường
        khuVucForm.style.display = "block";
        cotHanhDong.style.display = "table-cell";
        // Bỏ chế độ phóng to bảng đi
        noiDungChinh.classList.remove("student-view");
    }
    if (mk.length < 6) { alert("Mật khẩu quá ngắn! Phải có ít nhất 6 ký tự."); return; }
    if (danhSachTaiKhoan.find(user => user.tenDangNhap === tk)) { alert("Tên đăng nhập đã tồn tại! Vui lòng chọn tên khác."); return; }
    
    // Cần vẽ lại bảng một lần nữa để nút bấm Sửa/Xóa cũng bị giấu/hiện theo quyền
    hienThiDanhSachHocSinh();
    danhSachTaiKhoan.push({ tenDangNhap: tk, matKhau: mk, vaiTro: roleDangKy });
    luuTaiKhoanVaoMay(); 
    alert("Đăng ký thành công! Mời bạn đăng nhập."); 
    chuyenCheDo(false);
}
// Hàm chạy khi bấm chuyển đổi qua lại giữa Đăng nhập và Đăng ký
function chuyenDoiCheDoDangNhap(laDangKy) {
    var formDangNhap = document.getElementById("login-form");
    var formDangKy = document.getElementById("register-form");
    var tieuDe = document.getElementById("auth-title");
    // Làm sạch chữ báo lỗi cũ nếu có
    document.getElementById("login-msg").innerText = "";
    document.getElementById("register-msg").innerText = "";
    
    // Lấy lại cái tên vai trò (Giáo viên hay Học sinh) để in lên màn hình
    var textVaiTro = (vaiTroChonTruoc === "giaovien") ? "Giáo Viên" : "Học Sinh";
    // laDangKy = true tức là người dùng vừa bấm "Đăng ký ngay"
    if (laDangKy === true) {
        formDangNhap.style.display = "none"; // Ẩn đăng nhập
        formDangKy.style.display = "block";  // Hiện đăng ký
        tieuDe.innerText = "Đăng Ký (" + textVaiTro + ")";
    } else {
        // Trái lại, người dùng vừa bấm "Đăng nhập"
        formDangNhap.style.display = "block";
        formDangKy.style.display = "none";
        tieuDe.innerText = "Đăng Nhập (" + textVaiTro + ")";
    }
}
// Hàm xử lý việc xác thực Đăng nhập
function xuLyDangNhap() {
    // Lấy tài khoản và mật khẩu gõ vào
    var taiKhoan = document.getElementById("username").value;
    var matKhau = document.getElementById("password").value;
    var theThongBao = document.getElementById("login-msg");
    var roleChon = document.getElementById("login-role").value;
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var found = danhSachTaiKhoan.find(u => u.tenDangNhap === user && u.matKhau === pass && u.vaiTro === roleChon);
    // Rỗng thì cự tuyệt
    if (taiKhoan === "" || matKhau === "") {
        theThongBao.innerText = "Vui lòng nhập tài khoản và mật khẩu!";
        theThongBao.className = "form-msg error";
        return;
    }
    // Đặt biến trạng thái ban đầu là Chưa đăng nhập thành công (false)
    var dangNhapThanhCong = false;
    
    // Vòng lặp For chạy dò từng tài khoản trong dữ liệu
    for (var i = 0; i < danhSachTaiKhoan.length; i = i + 1) {
        // Cần cả 2 thứ cùng đúng (dùng &&)
        if (danhSachTaiKhoan[i].tenDangNhap === taiKhoan && danhSachTaiKhoan[i].matKhau === matKhau) {
            // Trùng mật khẩu rồi, kiểm tra xem có đi nhầm cổng phân quyền không?
            // (Ví dụ bạn là tài khoản Học sinh nhưng lại chọn nhầm nút Giáo viên ban đầu)
            if (danhSachTaiKhoan[i].vaiTro === vaiTroChonTruoc) {
                dangNhapThanhCong = true;
                // Lưu lại chức vụ người này làm chức vụ chung của cả trang web hiện tại
                vaiTroHienTai = danhSachTaiKhoan[i].vaiTro; 
                break; // Xong rồi thì thoát lặp
            } else {
                // Nếu đi nhầm cổng thì báo lỗi và dừng lại
                var tenDung = (vaiTroChonTruoc === "giaovien") ? "Giáo Viên" : "Học Sinh";
                theThongBao.innerText = "Tài khoản này không phải là " + tenDung + "!";
                theThongBao.className = "form-msg error";
                return;
            }
        }
    }
    // Nếu biến trạng thái bật xanh (true)
    if (dangNhapThanhCong === true) {
        taiKhoanHienTai = taiKhoan;
        // Thì giấu luôn tấm màn đen chắn màn hình (login-overlay)
        document.getElementById("login-overlay").classList.add("hidden");
        // Xóa sạch chữ ở 2 ô tài khoản mật khẩu
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    if (found) {
        vaiTroHienTai = found.vaiTro; taiKhoanHienTai = found.tenDangNhap; 
        
        // Gọi hàm để chia lại cấu hình layout website tùy theo chức vụ người này
        hienThiGiaoDienTheoVaiTro();
    } else {
        // Sai tài khoản thì báo lỗi liền
        theThongBao.innerText = "Sai tài khoản hoặc mật khẩu!";
        theThongBao.className = "form-msg error";
    }
}
        var overlay = document.getElementById("login-overlay");
        if (overlay) overlay.style.display = "none"; 
// Hàm đăng ký tài khoản mới
function xuLyDangKy() {
    // Bốc dữ liệu từ các ô input của form Đăng Ký
    var taiKhoanMoi = document.getElementById("reg-username").value;
    var matKhauMoi = document.getElementById("reg-password").value;
    var xacNhan = document.getElementById("reg-password-confirm").value;
    var theThongBao = document.getElementById("register-msg");
        var formSection = document.getElementById("form-section");
        var cotHanhDong = document.getElementById("cot-hanh-dong");
        var infoCard = document.getElementById("student-info-card");
    // Cũng không cho phép rỗng
    if (taiKhoanMoi === "" || matKhauMoi === "" || xacNhan === "") {
        theThongBao.innerText = "Vui lòng điền đủ thông tin!";
        theThongBao.className = "form-msg error";
        return;
    }
    // Hai mật khẩu phải gõ y hệt nhau (khác nhau !== là báo lỗi)
    if (matKhauMoi !== xacNhan) {
        theThongBao.innerText = "Mật khẩu xác nhận không giống!";
        theThongBao.className = "form-msg error";
        return;
    }
    // Vòng lặp dò xem đã ai xí mất cái tên tài khoản này chưa
    var biTrung = false;
    for (var i = 0; i < danhSachTaiKhoan.length; i = i + 1) {
        if (danhSachTaiKhoan[i].tenDangNhap === taiKhoanMoi) {
            biTrung = true; // Bị trùng tên rồi
            break;
        if (vaiTroHienTai === "hocsinh") {
            if(formSection) formSection.style.display = "none";
            if(cotHanhDong) cotHanhDong.style.display = "none";
            if(infoCard) infoCard.style.display = "block";
        } else {
            if(formSection) formSection.style.display = "block"; 
            if(cotHanhDong) cotHanhDong.style.display = "table-cell";
            if(infoCard) infoCard.style.display = "none";
        }
    }
    // Nếu trùng tên thì báo lỗi
    if (biTrung === true) {
        theThongBao.innerText = "Tên này đã có người dùng!";
        theThongBao.className = "form-msg error";
        return;
    }
    // Gom dữ liệu tạo thành 1 đối tượng Tài Khoản
    // Tự động gán cho họ vai trò mà họ đã bấm chọn ở màn hình đầu tiên (vaiTroChonTruoc)
    var taiKhoanObject = { tenDangNhap: taiKhoanMoi, matKhau: matKhauMoi, vaiTro: vaiTroChonTruoc };
    // Nhét vào danh sách
    danhSachTaiKhoan.push(taiKhoanObject);
    
    // Lưu vào máy ngay lập tức
    luuTaiKhoanVaoMay();
    
    // Báo xanh cho vui
    theThongBao.innerText = "Đăng ký thành công! Vui lòng chờ...";
    theThongBao.className = "form-msg success";
    
    // Tự động điền dùm tên tài khoản sang ô form Đăng Nhập cho tiện
    document.getElementById("username").value = taiKhoanMoi;
    document.getElementById("password").value = "";
    
    // Tính giờ (setTimeout) - Đợi đúng 1500 mili-giây (1.5 giây)
    setTimeout(function() {
        // Rồi tự động gọi hàm chuyển ngược về form Đăng Nhập
        chuyenDoiCheDoDangNhap(false);
    }, 1500);
        veLaiBang(); 
    } else alert("Đăng nhập thất bại! Kiểm tra lại tài khoản, mật khẩu hoặc CHỨC VỤ.");
}
// --- 12. HÀM ĐĂNG XUẤT ---
function dangXuat() {
    // Hiện lại tấm màn đen che phủ toàn bộ trang (bằng cách xóa class hidden)
    document.getElementById("login-overlay").classList.remove("hidden");
    
    // Xóa trí nhớ về vai trò hiện tại
    vaiTroHienTai = "";
    taiKhoanHienTai = "";
    
    // Tự động gọi hàm để đưa màn hình về lại bảng chọn vai trò ban đầu "Bạn là ai?"
    quayLaiChonVaiTro();
    vaiTroHienTai = ""; taiKhoanHienTai = "";
    var overlay = document.getElementById("login-overlay");
    var form = document.getElementById("login-form");
    if(overlay) overlay.style.display = "flex"; 
    if(form) form.reset();
}
window.onload = function() { layHocSinhTuMay(); layTaiKhoanTuMay(); };
