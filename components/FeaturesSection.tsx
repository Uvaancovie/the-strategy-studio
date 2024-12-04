import { FaBriefcase, FaUserTie, FaUsers } from "react-icons/fa";

const features = [
  {
    title: "Strategic Consulting",
    description: "Transform your business with proven strategies designed to optimize operations and drive growth.",
    icon: <FaBriefcase className="text-4xl text-primary-green" />,
  },
  {
    title: "Executive Coaching",
    description: "Empower leaders to unlock their full potential through personalized coaching and leadership development.",
    icon: <FaUserTie className="text-4xl text-primary-turquoise" />,
  },
  {
    title: "Team Development",
    description: "Build high-performing teams, streamline operations, and enhance collaboration for sustainable success.",
    icon: <FaUsers className="text-4xl text-primary-yellow" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">Our Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
