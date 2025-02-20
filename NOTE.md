# **Tính năng nổi bật**

## 1. Routing dựa trên file:
Chỉ cần thêm các file vào thư mục pages (ví dụ: ), Next.js sẽ tự động tạo các route tương ứng, không cần phải config thêm.

## 2. Hỗ trợ CSS tích hợp:
Sử dụng CSS global cho kiểu áp dụng trên toàn ứng dụng (được import trong layout.js) và CSS Modules cho kiểu riêng của từng component, giúp việc quản lý và bảo trì kiểu trở nên dễ dàng và hiệu quả hơn.

```javascript
import "./globals.css";
```

## 4. Layout for reuse
Next.js hỗ trợ layout cố định để tái sử dụng Navbar, Footer, Background mà không cần tải lại khi chuyển trang.

Trong Next.js 13+, app/layout.js thay thế _app.js, giúp giữ nguyên các thành phần giao diện khi chuyển trang.   