export default function WorkExperience() {
    const experiences = [
        {
            company: "PIXTA Vietnam Co. Ltd.",
            role: "AI Engineer Intern",
            duration: "Oct 2024 - Present",
            skills: "Deep Learning, Computer Vision, PyTorch, Vector Database, LLM, MLOps",
        },
    ];

    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-white">Work Experience</h1>
            <ul className="space-y-6 w-full max-w-2xl">
                {experiences.map((exp, index) => (
                    <li 
                        key={index} 
                        className="border border-white/[.2] p-6 rounded-xl bg-white/[.1] backdrop-blur-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        <h2 className="text-xl font-semibold text-white">{exp.company}</h2>
                        <p className="text-sm text-gray-300 italic">{exp.role} ({exp.duration})</p>
                        <p className="text-gray-300 mt-2"><b>Skills:</b> {exp.skills}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
