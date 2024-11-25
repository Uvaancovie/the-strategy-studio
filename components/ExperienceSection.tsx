
import { FaBriefcase } from "react-icons/fa";

const ExperienceSection = () => {
  const experienceData = [
    {
        role: "Senior Accountant – Real Estate, Europe",
        company: "The Blackstone Group International",
        duration: "Oct 2007 - Aug 2008 · 11 mos",
        location: "London, United Kingdom",
        description: "Preparation of financial statements, management reporting, banking facilities, and systems conversions.",
        flag: "/images/uk-flag.png", // Add a flag image
      },
    {
        
      role: "Founder",
      company: "The Strategy Studio · Self-employed",
      duration: "May 2024 - Present",
      location: "Durban, KwaZulu-Natal, South Africa · Hybrid",
      skills: "Strategy Consultant and Executive Coach",
    },
    {
      role: "Commercial Manager",
      company: "SIQALO FOODS · Full-time",
      duration: "Nov 2022 - Jan 2024",
      location: "Durban, KwaZulu-Natal, South Africa",
      skills: "Analytical Skills",
    },
    {
      role: "Financial Manager - Feed",
      company: "RCL FOODS · Full-time",
      duration: "Jul 2019 - Nov 2022",
      location: "Westville, South Africa",
      skills: "Financial Modeling · Commercial Management · Strategic Planning · Analytical Skills",
    },
    {
      role: "Master Data Manager",
      company: "RCL FOODS",
      duration: "Jan 2016 - Jul 2019",
      location: "Westville, South Africa",
      skills: "Financial Modeling · Strategic Planning · Analytical Skills",
    },
    {
      role: "Regional Financial Controller",
      company: "South African Breweries",
      duration: "Jan 2012 - Dec 2013",
      location: "Durban, South Africa",
      skills: "Financial Modeling · Strategic Planning",
    },
  ];

  return (
    <section
      className="relative py-20 text-primary-white"
      style={{
        backgroundImage: "url('/images/blue-corporate.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-primary-blue p-6 rounded-lg shadow-lg flex flex-col items-start space-y-4"
            >
              {/* Role and Company */}
              <div className="flex items-center space-x-4">
                <FaBriefcase className="text-primary-pink text-3xl" />
                <div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="text-sm font-medium text-gray-600">{item.company}</p>
                </div>
              </div>

              {/* Details */}
              <p className="text-sm text-gray-500">
                <strong>Duration:</strong> {item.duration}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Skills:</strong> {item.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
