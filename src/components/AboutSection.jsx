import { Cloud, Coffee, Globe } from "lucide-react";

const experienceList = [
  {
    id: 1,
    icon: <Coffee className="h-6 w-6 text-primary" />,
    heading: "Java Development",
    description:
      "Developed multithreaded Java applications with optimized performance and clean architecture.",
  },
  {
    id: 2,
    icon: <Globe className="h-6 w-6 text-primary" />,
    heading: "Spring Boot Development",
    description:
      "Created scalable REST APIs and microservices using Spring Boot and JPA.",
  },
  {
    id: 3,
    icon: <Cloud className="h-6 w-6 text-primary" />,
    heading: "Cloud Development",
    description:
      "Deployed cloud-native apps on AWS using EC2, Lambda, and RDS.",
  },
];

export const AboutSection = () => {
  const getYears = (date1, date2) => {
    if (date1 > date2) {
      [date1, date2] = [date2, date1]; // Swap dates if date1 is later
    }

    let years = date2.getFullYear() - date1.getFullYear();

    // Adjust for cases where the end date's month/day is before the start date's month/day
    if (
      date2.getMonth() < date1.getMonth() ||
      (date2.getMonth() === date1.getMonth() &&
        date2.getDate() < date1.getDate())
    ) {
      years--;
    }

    return years;
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Development Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a passionate Software Development Engineer with more than 
              <strong>
                { ` ${getYears(new Date("2022-06-01"), new Date())} ` } 
              </strong>
              years of hands-on experience in building scalable backend systems
              and cloud-native applications. My core expertise lies in Java,
              Spring Boot, and multithreaded programming, along with proficiency
              in front-end development using JavaScript and React.
            </p>

            <p className="text-muted-foreground">
              I have contributed to enterprise-grade solutions in domains like
              manufacturing and healthcare, optimizing legacy systems and
              enabling seamless cloud migration using AWS services. I enjoy
              solving real-world problems with clean, efficient code and am
              always eager to explore new technologies that enhance system
              performance and developer productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://github.com/Pragyanshu-rai/Pragyanshu-rai/blob/master/Pragyanshu-Rai-Java-Developer-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {experienceList.map((experience) => (
              <div
                key={experience.id}
                className="gradient-border p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {experience.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      {" "}
                      {experience.heading}
                    </h4>
                    <p className="text-muted-foreground">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
