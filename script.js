var danhSachHocSinh = [];
var danhSachTaiKhoan = [];

function luuHocSinhVaoMay() { localStorage.setItem("KHO_HOC_SINH", JSON.stringify(danhSachHocSinh)); }
function layHocSinhTuMay() {
    var data = localStorage.getItem("KHO_HOC_SINH");
    if (data !== null) danhSachHocSinh = JSON.parse(data);
}

function luuTaiKhoanVaoMay() { localStorage.setItem("KHO_TAI_KHOAN", JSON.stringify(danhSachTaiKhoan)); }
function layTaiKhoanTuMay() {
    var data = localStorage.getItem("KHO_TAI_KHOAN");
    if (data !== null) danhSachTaiKhoan = JSON.parse(data);
    else danhSachTaiKhoan = [{ tenDangNhap: "admin", matKhau: "123", vaiTro: "giaovien" }];
}

function tinhDiemTB(toan, van, anh) { 
    anh = anh || 0; 
    return ((toan + van + anh) / 3).toFixed(1); 
}

function xepLoaiHS(diemTB) {
    if (diemTB >= 8.0) return "Giỏi";
    if (diemTB >= 6.5) return "Khá";
    if (diemTB >= 5.0) return "TrungBình";
    return "Yếu";
}

function xoaHocSinh(id) {
    if (confirm("Xóa học sinh này?")) {
        danhSachHocSinh = danhSachHocSinh.filter(hs => hs.id !== id);
        luuHocSinhVaoMay(); 
        veLaiBang();
    }
}

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
}

document.getElementById("student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var idSua = document.getElementById("edit-id").value;
    
    var ten = document.getElementById("student-name").value;
    var sbd = document.getElementById("student-sbd").value;
    var dob = document.getElementById("student-dob").value;
    var gender = document.getElementById("student-gender").value;
    var toan = parseFloat(document.getElementById("math-score").value);
    var van = parseFloat(document.getElementById("lit-score").value);
    var anh = parseFloat(document.getElementById("eng-score").value);

    if (toan > 10 || toan < 0 || van > 10 || van < 0 || anh > 10 || anh < 0) {
        alert("❌ Lỗi: Điểm số chỉ được phép nhập từ 0 đến 10!");
        return; 
    }

    var trungSbd = danhSachHocSinh.find(h => h.sbd === sbd);
    if (trungSbd && (idSua === "" || trungSbd.id !== parseInt(idSua))) {
        alert("❌ Lỗi: Số báo danh '" + sbd + "' đã được cấp cho người khác!");
        return;
    }

    if (idSua !== "") {
        var hs = danhSachHocSinh.find(h => h.id === parseInt(idSua));
        hs.hoTen = ten; hs.sbd = sbd; 
        hs.ngaySinh = dob; hs.gioiTinh = gender;
        hs.toan = toan; hs.van = van; hs.anh = anh; 
    } else {
        var idMoi = danhSachHocSinh.length > 0 ? danhSachHocSinh[danhSachHocSinh.length - 1].id + 1 : 1;
        danhSachHocSinh.push({ id: idMoi, hoTen: ten, sbd: sbd, ngaySinh: dob, gioiTinh: gender, toan: toan, van: van, anh: anh });
    }
    
    luuHocSinhVaoMay(); 
    donDepForm(); 
    veLaiBang();
});

function donDepForm() {
    document.getElementById("student-form").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("form-title").innerText = "Thêm Học Sinh Mới";
}

function veLaiBang() {
    var theBang = document.getElementById("student-tbody");
    if (!theBang) return; 
    theBang.innerHTML = ""; 
    
    for (var i = 0; i < danhSachHocSinh.length; i++) {
        var hs = danhSachHocSinh[i];
        
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

        var dtb = tinhDiemTB(hs.toan, hs.van, hs.anh);
        var loai = xepLoaiHS(dtb);
        var btnStr = vaiTroHienTai === "giaovien" ? `<button onclick="suaHocSinh(${hs.id})" class="btn-edit" style="width:auto; padding:5px 10px">Sửa</button> <button onclick="xoaHocSinh(${hs.id})" class="btn-danger" style="width:auto; padding:5px 10px; margin-left:5px;">Xóa</button>` : "";

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

var vaiTroHienTai = ""; var taiKhoanHienTai = ""; 

function chuyenCheDo(laDangKy) {
    var loginForm = document.getElementById("login-form");
    var regForm = document.getElementById("register-form");
    var title = document.getElementById("auth-title");
    
    if (loginForm) loginForm.style.display = laDangKy ? "none" : "block";
    if (regForm) regForm.style.display = laDangKy ? "block" : "none";
    if (title) title.innerText = laDangKy ? "Đăng Ký Tài Khoản" : "Đăng Nhập";
}

function xuLyDangKy() {
    var roleDangKy = document.getElementById("reg-role").value;
    var tk = document.getElementById("reg-username").value;
    var mk = document.getElementById("reg-password").value;
    
    if (mk.length < 6) { alert("Mật khẩu quá ngắn! Phải có ít nhất 6 ký tự."); return; }
    if (danhSachTaiKhoan.find(user => user.tenDangNhap === tk)) { alert("Tên đăng nhập đã tồn tại! Vui lòng chọn tên khác."); return; }
    
    danhSachTaiKhoan.push({ tenDangNhap: tk, matKhau: mk, vaiTro: roleDangKy });
    luuTaiKhoanVaoMay(); 
    alert("Đăng ký thành công! Mời bạn đăng nhập."); 
    chuyenCheDo(false);
}

function xuLyDangNhap() {
    var roleChon = document.getElementById("login-role").value;
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var found = danhSachTaiKhoan.find(u => u.tenDangNhap === user && u.matKhau === pass && u.vaiTro === roleChon);

    if (found) {
        vaiTroHienTai = found.vaiTro; taiKhoanHienTai = found.tenDangNhap; 
        
        var overlay = document.getElementById("login-overlay");
        if (overlay) overlay.style.display = "none"; 

        var formSection = document.getElementById("form-section");
        var cotHanhDong = document.getElementById("cot-hanh-dong");
        var infoCard = document.getElementById("student-info-card");

        if (vaiTroHienTai === "hocsinh") {
            if(formSection) formSection.style.display = "none";
            if(cotHanhDong) cotHanhDong.style.display = "none";
            if(infoCard) infoCard.style.display = "block";
        } else {
            if(formSection) formSection.style.display = "block"; 
            if(cotHanhDong) cotHanhDong.style.display = "table-cell";
            if(infoCard) infoCard.style.display = "none";
        }
        veLaiBang(); 
    } else alert("Đăng nhập thất bại! Kiểm tra lại tài khoản, mật khẩu hoặc CHỨC VỤ.");
}

function dangXuat() {
    vaiTroHienTai = ""; taiKhoanHienTai = "";
    var overlay = document.getElementById("login-overlay");
    var form = document.getElementById("login-form");
    if(overlay) overlay.style.display = "flex"; 
    if(form) form.reset();
}

window.onload = function() { layHocSinhTuMay(); layTaiKhoanTuMay(); };
