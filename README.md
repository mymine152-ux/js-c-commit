# EduManager Pro - Hệ Thống Quản Lý Học Sinh

Hệ thống quản lý học sinh đơn giản được xây dựng bằng HTML, CSS và JavaScript thuần (Vanilla JS). Dự án này hỗ trợ phân quyền người dùng (Giáo viên / Học sinh), cung cấp các chức năng CRUD cơ bản và lưu trữ dữ liệu vĩnh viễn trên trình duyệt thông qua `localStorage`.

## 🚀 Tính năng nổi bật

- **Phân quyền người dùng:** 
  - **Giáo viên:** Có toàn quyền Thêm, Cập nhật, và Xóa thông tin học sinh.
  - **Học sinh:** Chỉ có quyền xem danh sách và bảng điểm (Giao diện tự động điều chỉnh phù hợp).
- **Tính toán tự động:** Tự động tính điểm trung bình từ điểm Toán và Văn, đồng thời xếp loại học lực (Giỏi, Khá, Trung Bình, Yếu) kèm màu sắc trực quan.
- **Lưu trữ cục bộ:** Mọi dữ liệu (Tài khoản và Danh sách học sinh) đều được lưu trong `localStorage` của trình duyệt, không lo mất dữ liệu khi tải lại trang.
- **Giao diện hiện đại:** Thiết kế theo phong cách Glassmorphism với giao diện responsive, thân thiện trên cả máy tính và điện thoại di động.

## 🛠️ Công nghệ sử dụng

- **HTML5:** Cấu trúc giao diện ngữ nghĩa.
- **CSS3:** Thiết kế layout bằng Grid, Flexbox và tùy chỉnh biến môi trường (CSS Variables).
- **JavaScript (ES5/ES6):** Xử lý logic, thao tác DOM và giao tiếp với Local Storage (Không sử dụng bất kỳ thư viện bên thứ 3 nào).

## 📂 Cấu trúc thư mục

```text
/
├── index.html       # Giao diện chính của ứng dụng
├── style.css        # File định dạng (Styles)
├── script.js        # Logic xử lý chính (CRUD, Phân quyền)
└── README.md        # Tài liệu hướng dẫn
```

## ⚙️ Hướng dẫn cài đặt và sử dụng

1. **Clone dự án về máy:**
   ```bash
   git clone https://github.com/your-username/edumanager-pro.git
   ```
2. **Khởi chạy:**
   - Không cần cài đặt server hay Node.js.
   - Chỉ cần nhấp đúp vào file `index.html` để mở bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox...).
3. **Tài khoản mặc định (Admin/Giáo viên):**
   - **Tên đăng nhập:** `admin`
   - **Mật khẩu:** `123456`
   *(Bạn cũng có thể tự tạo tài khoản mới bằng nút Đăng Ký).*

## 📚 Tác giả
Dự án cuối kỳ môn JavaScript cơ bản.
