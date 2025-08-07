import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState(
    [1, 2, 3].map((key) => {
      return {
        id: key,
        name: "Loading...",
        description: "Loading...",
        topics: [],
        demoUrl: "#",
        githubUrl: "#",
      };
    })
  );

  useEffect(() => {

    const cleanName = (name) => {
      return name.toUpperCase().replaceAll("-"," ").replaceAll("_", " ").replaceAll(".", " ");
    };

    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://api.github.com/users/Pragyanshu-rai/repos"
        );
        let json = await response.json();
        const projectList = json.filter((element) => {
          return element["topics"].includes("display");
        });
        response = await fetch("https://api.github.com/users/Phylax-iam/repos");
        json = await response.json();
        projectList.push(
          ...json.filter((element) => {
            return element["topics"].includes("display");
          })
        );
        setProjects(
          projectList.map((project) => {
            return {
              id: project["id"],
              name: cleanName(project["name"]),
              description: project["description"],
              topics: project["topics"].filter((topic) => topic !== "display"),
              demoUrl: project["html_url"],
              githubUrl: project["html_url"],
            };
          })
        );
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
            >
              {/* Title Banner */}
              <div className="h-48 bg-muted flex items-center justify-center">
                <h2 className="text-2xl font-bold transition-transform duration-500 group-hover:scale-110">
                  {project.name}
                </h2>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Pragyanshu-rai"
          >
            Checkout My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
