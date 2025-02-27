# **Tính năng nổi bật**

## 1. Routing dựa trên file:
Chỉ cần thêm các file vào thư mục pages (ví dụ: ), Next.js sẽ tự động tạo các route tương ứng, không cần phải config thêm.

## 2. Hỗ trợ CSS tích hợp:
Sử dụng CSS global cho kiểu áp dụng trên toàn ứng dụng (được import trong layout.js) và CSS Modules cho kiểu riêng của từng component, giúp việc quản lý và bảo trì kiểu trở nên dễ dàng và hiệu quả hơn.

```javascript
import "./globals.css";
```

## 3. Layout for reuse
Next.js hỗ trợ layout cố định để tái sử dụng Navbar, Footer, Background mà không cần tải lại khi chuyển trang.

Trong Next.js 13+, app/layout.js thay thế _app.js, giúp giữ nguyên các thành phần giao diện khi chuyển trang.


## 4. API Routes:
Next.js cung cấp chức năng API tích hợp sẵn thông qua thư mục app/api. Ta có thể tạo các điểm cuối API serverless mà không cần thiết lập máy chủ backend riêng biệt, như đã được minh họa trong file app/api/hello/route.js với hàm GET.


## 5. Font Optimization:
Next.js có sẵn tính năng tối ưu hóa font thông qua module next/font. Dự án của bạn sử dụng các font Geist và Geist_Mono được import từ Google, được tối ưu hóa tự động, lưu trữ nội bộ và loại bỏ các yêu cầu mạng bên ngoài nhằm cải thiện quyền riêng tư và hiệu suất.


## 6. Vercel Deployment Integration:
Next.js được phát triển bởi Vercel và có tích hợp liền mạch với nền tảng Vercel deployment. Dự án Next.js có thể được triển khai đơn giản thông qua Vercel với chỉ vài cú nhấp chuột, mang lại tính năng CI/CD tự động, SSL miễn phí, CDN toàn cầu và tối ưu hóa hiệu suất. Việc triển khai preview tự động cho mỗi branch cũng giúp cho quá trình review code trở nên dễ dàng hơn.