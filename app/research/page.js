export default function Research() {
    const researchPapers = [
        {
            title: "An Enhanced Deep Learning Model for Image Classification and Facial Expression Recognition Using Self-Distillation",
            role: "Co-author",
            abstract: "Facial Expression Recognition (FER) is a critical research area with wide-ranging applications. While advanced convolutional neural networks have enhanced FER performance...",
            link: "https://ieeexplore.ieee.org/abstract/document/10818346",
        },
        {
            title: "A Unified Framework for Depth-Assisted Monocular Object Pose Estimation",
            role: "Research Assistant",
            abstract: "Developing a unified deep learning framework leveraging depth information for robust monocular object pose estimation.",
            link: "https://ieeexplore.ieee.org/document/10634508",
        },
        {
            title: "Unsupervised Visual-to-Geometric Feature Reconstruction for Vision-Based Industrial Anomaly Detection",
            role: "Research Assistant",
            abstract: "Proposing a novel unsupervised approach to reconstruct geometric features from visual inputs for industrial anomaly detection.",
            link: "https://ieeexplore.ieee.org/document/10820339",
        },
        {
            title: "Efficient Multimodal Fusion For Hand Pose Estimation With Hourglass Network",
            role: "Research Assistant",
            abstract: "Optimizing multimodal fusion techniques for accurate hand pose estimation using hourglass network architectures.",
            link: "https://ieeexplore.ieee.org/document/10820339",
        },
    ];

    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-white">Research</h1>
            <ul className="space-y-6 w-full max-w-2xl">
                {researchPapers.map((paper, index) => (
                    <li 
                        key={index} 
                        className="border border-white/[.2] p-6 rounded-xl bg-white/[.1] backdrop-blur-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        <h2 className="text-xl font-semibold text-white">{paper.title}</h2>
                        <p className="text-sm text-gray-300 italic">Role: {paper.role}</p>
                        <p className="text-gray-300 mt-2">{paper.abstract}</p>
                        <a
                            className="mt-3 inline-block text-blue-400 hover:text-blue-300 underline"
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read More
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
