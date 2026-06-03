# BÁO CÁO DỰ ÁN CUỐI KỲ - MÔN JAVASCRIPT CƠ BẢN
## Tên dự án: EduManager Pro - Hệ Thống Quản Lý Học Sinh

---

### 1. Giới thiệu tổng quan
**EduManager Pro** là một hệ thống ứng dụng nền web (Web Application) dùng để quản lý thông tin và điểm số của học sinh. 
Dự án được xây dựng với mục tiêu áp dụng các kiến thức cốt lõi của HTML, CSS và đặc biệt là JavaScript cơ bản (Vanilla JS) vào việc giải quyết một bài toán quản lý thực tế, không phụ thuộc vào bất kỳ thư viện hay framework bên thứ ba nào.

### 2. Các công nghệ sử dụng
Dự án sử dụng bộ ba ngôn ngữ nền tảng của lập trình Web Front-end:
*   **HTML5:** Xây dựng bộ khung và cấu trúc ngữ nghĩa cho trang web. Các thẻ Form, Input, Table được tận dụng tối đa để hiển thị và thu thập dữ liệu.
*   **CSS3:** Thiết kế giao diện theo phong cách hiện đại "Glassmorphism" (Hiệu ứng kính mờ). Sử dụng Flexbox và CSS Grid để dàn trang, đảm bảo tính Responsive (Hiển thị tốt trên cả giao diện điện thoại và máy tính).
*   **JavaScript (ES6):** Xử lý toàn bộ logic nghiệp vụ (Business Logic) của ứng dụng, thao tác với cây DOM để cập nhật giao diện thời gian thực và quản lý bộ nhớ cục bộ.

### 3. Tính năng chi tiết của hệ thống

#### 3.1. Hệ thống xác thực và phân quyền (Authentication & Authorization)
*   Hệ thống yêu cầu người dùng xác định vai trò trước khi truy cập.
*   Có hệ thống Đăng nhập / Đăng ký tài khoản.
*   **Giáo viên (Admin):** Có toàn quyền truy cập, hiển thị Form nhập liệu để thực hiện các thao tác Thêm, Cập nhật, và Xóa thông tin học sinh (CRUD).
*   **Học sinh:** Bị giới hạn quyền hạn. Chỉ có thể xem danh sách lớp học và bảng điểm. Form nhập liệu và các nút Hành động (Sửa/Xóa) sẽ tự động bị ẩn đi đối với vai trò này.

#### 3.2. Chức năng quản lý cốt lõi (CRUD)
*   **Create (Thêm mới):** Thêm học sinh với các thông tin (Họ tên, Tuổi, Điểm Toán, Điểm Văn). Có bắt lỗi (Validation) không cho phép nhập rỗng hoặc điểm ngoài phạm vi 0-10.
*   **Read (Đọc/Hiển thị):** Hiển thị dữ liệu dưới dạng bảng trực quan.
*   **Update (Cập nhật):** Cho phép chọn một học sinh để sửa lại thông tin và điểm số.
*   **Delete (Xóa):** Xóa dữ liệu của học sinh khỏi hệ thống.

#### 3.3. Xử lý Logic và Tính toán tự động
*   Dựa vào điểm Toán và Văn được nhập, hệ thống tự động tính toán **Điểm Trung Bình = (Toán + Văn) / 2**.
*   Tự động xếp loại học lực dựa trên điểm trung bình:
    *   Giỏi (>= 8.0)
    *   Khá (>= 6.5)
    *   Trung bình (>= 5.0)
    *   Yếu (< 5.0)
*   Gắn màu sắc tương ứng cho từng loại học lực (Badge color) để dễ dàng nhận biết.

#### 3.4. Lưu trữ dữ liệu vĩnh viễn (Data Persistence)
*   Sử dụng API `localStorage` của trình duyệt. 
*   Mọi thông tin về Tài khoản đăng nhập và Danh sách học sinh đều được mã hóa dưới dạng chuỗi JSON và lưu lại.
*   Dữ liệu không bị mất đi khi người dùng tải lại trang (F5) hoặc đóng mở lại trình duyệt.

### 4. Cấu trúc thư mục mã nguồn
```text
/
├── index.html       # File giao diện chính, chứa các thẻ HTML cấu trúc
├── style.css        # File định dạng giao diện, màu sắc, hiệu ứng
├── script.js        # File chứa toàn bộ logic xử lý JavaScript
└── README.md        # File hướng dẫn nhanh của dự án
```

### 5. Hướng dẫn sử dụng
1.  Giải nén mã nguồn hoặc Clone từ repository.
2.  Mở trực tiếp file `index.html` bằng trình duyệt web (Google Chrome, Firefox, Safari...). Không cần cài đặt server hay Node.js.
3.  Để trải nghiệm đầy đủ tính năng, chọn vai trò **Giáo viên** và đăng nhập bằng tài khoản mặc định: 
    *   Tài khoản: `admin`
    *   Mật khẩu: `123456`
4.  Có thể chuyển đổi sang vai trò Học sinh hoặc tự tạo tài khoản mới ở phần Đăng ký để kiểm tra tính năng phân quyền.

### 6. Kết luận
Dự án **EduManager Pro** tuy có quy mô nhỏ nhưng đã đáp ứng được đầy đủ các yêu cầu cốt lõi của môn học. Qua dự án này, sinh viên đã nắm vững các kiến thức về:
*   Cách tổ chức và cấu trúc một trang web với HTML/CSS.
*   Lắng nghe và xử lý sự kiện (Event Handling) trong JavaScript.
*   Kỹ thuật thao tác DOM (Thêm/Sửa/Xóa các phần tử HTML bằng Code).
*   Cách lưu trữ và lấy dữ liệu bằng LocalStorage (Làm quen với cấu trúc JSON).
*   Tư duy lập trình, xử lý mảng (Array) và đối tượng (Object) trong JavaScript.

---
*Báo cáo được hoàn thành phục vụ cho việc chấm điểm kết thúc môn học.*
