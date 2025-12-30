import React from 'react';
import { motion } from 'framer-motion';

const newsArticles = [
  {
    title: "Greenwich Việt Nam ghi dấu ấn học thuật với 7 báo cáo khoa học và Best Paper Award tại CSoNet 2025",
    description: "Sinh viên Bùi Sơn Anh trình bày tại phiên thảo luận CSoNet 2025...",
    url: "https://greenwich.edu.vn/greenwich-viet-nam-ghi-dau-an-hoc-thuat-voi-7-bao-cao-khoa-hoc-va-best-paper-award-tai-csonet-2025/#:~:text=Sinh%20vi%C3%AAn%20B%C3%B9i%20S%C6%A1n%20Anh%20tr%C3%ACnh%20b%C3%A0y%20t%E1%BA%A1i%20phi%C3%AAn%20th%E1%BA%A3o%20lu%E1%BA%ADn",
  },
  {
    title: "Sinh viên FPT Edu dùng AI phát triển mô hình nhận diện cảm xúc",
    description: "Nhóm sinh viên: Bùi Sơn Anh, Tạ Hữu Anh Dương và Nguyễn Thanh Hùng (Greenwich Việt Nam, cơ sở Hà Nội thuộc FPT Edu) đã triển khai nghiên cứu...",
    url: "https://dantri.com.vn/giao-duc/sinh-vien-fpt-edu-dung-ai-phat-trien-mo-hinh-nhan-dien-cam-xuc-20240823142351982.htm",
  },
  {
    title: "Sinh viên Greenwich phát triển mô hình nhận diện cảm xúc sử dụng AI",
    description: "Trong khuôn khổ cuộc thi nghiên cứu khoa học FPT Edu Research Festival 2024, nhóm sinh viên Greenwich Việt Nam đã giành ngôi vị Quán quân...",
    url: "https://greenwich.edu.vn/sinh-vien-greenwich-phat-trien-mo-hinh-nhan-dien-cam-xuc-su-dung-ai/",
  },
  {
    title: "Gương mặt Green Talent 2022",
    description: "Gương mặt Green Talent 2022",
    url: "https://greenwich.edu.vn/guong-mat-green-talent-2022-chu-trang-web-ve-thiet-ke-va-lap-trinh-gianh-hoc-bong-green-talent/",
  },
];

const News = () => (
  <section id="news" className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">News</h2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {newsArticles.map((article, idx) => (
          <div key={idx} className="h-full flex flex-col rounded-2xl border border-gray-700 bg-gradient-to-br from-black via-zinc-900 to-gray-900 p-7 shadow-xl shadow-black/30 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{article.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline text-base font-medium mt-auto">Read Article</a>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);


export default News; 
