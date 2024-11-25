import { FaCertificate } from "react-icons/fa";
import Image from "next/image";

const StatsSection = () => {
  const stats = [
    {
      label: "Analytical Skills",
      value: 90,
      color: "bg-blue-600",
    },
    {
      label: "Strategic Thinking",
      value: 85,
      color: "bg-green-500",
    },
    {
      label: "Financial Modeling",
      value: 80,
      color: "bg-yellow-500",
    },
    {
      label: "Commercial Management",
      value: 75,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <h3 className="text-2xl font-bold mb-6 text-center">Professional Skills & Experience</h3>

      {/* Add a background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/accounting-blue.jpg"
          alt="Accounting"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Stats */}
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{stat.label}</span>
              <span className="text-sm font-medium text-gray-700">{stat.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${stat.color} h-2.5 rounded-full`}
                style={{ width: `${stat.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      type: "Certification",
      icon: <FaCertificate />,
      title: "CA(SA) - Chartered Accountant",
      date: "2004 - 2007",
      description: "Certified by SAICA in Accounting, Tax, Audit, and Managerial Accounting.",
    },
    {
      type: "Certification",
      icon: <FaCertificate />,
      title: "Executive and Management Coaching",
      date: "2021",
      description:
        "Completed at the University of Cape Town Business School, specializing in Business and Leadership Coaching.",
    },
    {
      type: "Certification",
      icon: <FaCertificate />,
      title: "Strategic Thinking and Execution for Growth",
      date: "2019",
      description: "Certification from the University of Cape Town Graduate School of Business.",
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">
            A Journey of Growth and Excellence
          </h2>
          <p className="text-gray-600 text-lg">
            Highlighting professional milestones and showcasing core competencies.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timeline */}
          <div className="relative border-l-4 border-blue-600">
            {timelineData.map((item, index) => (
              <div key={index} className="mb-8 ml-6 relative flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg absolute -left-5">
                  {item.icon}
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="flex justify-center items-center">
            <StatsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
