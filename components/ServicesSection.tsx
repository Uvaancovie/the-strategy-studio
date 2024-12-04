import { FaBriefcase, FaUserTie, FaUsers } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description:
        "Transform your business with proven strategies designed to optimize operations and drive growth.",
      icon: <FaBriefcase className="text-6xl text-primary-green" />,
    },
    {
      title: "Executive Coaching",
      description:
        "Empower leaders to unlock their full potential through personalized coaching and leadership development.",
      icon: <FaUserTie className="text-6xl text-primary-turquoise" />,
    },
    {
      title: "Team Development",
      description:
        "Build high-performing teams, streamline operations, and enhance collaboration for sustainable success.",
      icon: <FaUsers className="text-6xl text-primary-yellow" />,
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600">
            Explore our specialized services tailored to help your business thrive and excel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              {/* Icon Section */}
              <div className="flex justify-center items-center bg-gray-200 h-48">
                {service.icon}
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                {/* Description */}
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
