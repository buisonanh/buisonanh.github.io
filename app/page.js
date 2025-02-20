import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si"; // Google Scholar Icon

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-8 pb-20 gap-16 sm:p-20 text-center">

      <main className="flex flex-col gap-10 items-center sm:items-start">

        {/* Big Title */}
        <h1 className="text-6xl font-bold">Bui Son Anh</h1>

        {/* Tagline/Introduction */}
        <p className="text-2xl mb-4 sm:text-left sm:max-w-[80ch]">
          With expertise in Deep Learning, Computer Vision and Natural Language Processing, I leverage advanced technologies to tackle complex challenges and deliver transformative innovation across various industries.
        </p>

        {/* 🔹 Social Buttons */}
        <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
          <a
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center bg-transparent text-white gap-2 hover:bg-white hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-32"
            href="https://github.com/buisonanh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
            <b>GitHub</b>
          </a>
          <a
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center bg-transparent text-white gap-2 hover:bg-white hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-32"
            href="https://scholar.google.com/citations?user=7orNp3QAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGooglescholar size={20} />
            <b>Scholar</b>
          </a>
          <a
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center bg-transparent text-white gap-2 hover:bg-white hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-32"
            href="https://www.linkedin.com/in/son-anh-bui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
            <b>LinkedIn</b>
          </a>
        </div>
      </main>

    </div>
  );
}
