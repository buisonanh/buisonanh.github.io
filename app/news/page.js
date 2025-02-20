export default function News() {
    const newsArticles = [
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

    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-white">News</h1>
            <ul className="space-y-6 w-full max-w-2xl">
                {newsArticles.map((news, index) => (
                    <li 
                        key={index} 
                        className="border border-white/[.2] p-6 rounded-xl bg-white/[.1] backdrop-blur-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        <h2 className="text-lg font-semibold text-white">{news.title}</h2>
                        <p className="text-gray-300 mt-2">{news.description}</p>
                        <a
                            className="mt-3 inline-block text-gray-400 hover:text-white underline"
                            href={news.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read more →
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
