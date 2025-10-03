import { ArrowRight, Github } from "lucide-react"
import project1Image from '@/assets/images/project1.png';
import project2Image from '@/assets/images/project2.png';
import project3Image from '@/assets/images/project3.png';
import project4Image from '@/assets/images/project4.png';
import project5Image from '@/assets/images/project5.png';
import project6Image from '@/assets/images/project6.png';
import project7Image from '@/assets/images/project7.png';
import project8Image from '@/assets/images/project8.png';

const projects = [
    {
        id: 1,
        title: "A Static E-Comemerce Website",
        description: "This project was about a homemade accessories made using beads and yarns. This project was created as a final requirement for INTECH 2100: WEB DESIGN AND MULTIMEDIA subject using HTML, CSS and a little bit of JavaScript.",
        image: project1Image,
        tags: ["HTML", "CSS", "Static Website"],
        githubURL: "https://github.com/ronn-bldv/Static-E-Commerce-Website",
    },

    {
        id: 2,
        title: "Portfolio using WordPress",
        description: "This project was about creating a personal portfolio website using WordPress. This portfolio was created as my requirement for INTECH 2201: Web Application Development.",
        image: project2Image,
        tags: ["wordPress", "Portfolio"],
        githubURL: "https://github.com/ronn-bldv/Portfolio-using-WordPress",
    },

    {
        id: 3,
        title: "Student Management System",
        description: "This system was created as one of my activity in INTECH 2201: Web Application Development. This system is about managing students with functionalities such as adding students as Admin, updating or deleting existing students. ",
        image: project3Image,
        tags: ["HTML", "CSS", "PHP", "Activity"],
        githubURL: "https://github.com/ronn-bldv/Simple-Student-Management-System",
    },

    {
        id: 4,
        title: "Pop'n Lock Kpop Store",
        description: "This projects is about a simple Kpop Store that sells album from different KPop Groups such as Enhypen, BlackPink, Seventeen etc. This project was created as a final term requirement for laboratory subject during my 2nd year student using PHP, MYSQL, HTML, CSS and JavaScript.",
        image: project4Image,
        tags: ["HTML", "CSS", "E-Commerce", "PHP"],
        githubURL: "https://github.com/ronn-bldv/Pop-n-Lock-Kpop-Store",
    }, 


    {
        id: 5,
        title: "BMI Calculator",
        description: "This is one of the activities that we did in our Laboratory Subject. It was created using PHP, HTML and CSS for styling.",
        image: project6Image,
        tags: ["Activity", "PHP", ],
        githubURL: "https://github.com/ronn-bldv/BMI-Calculator"
    }, 

    {
        id: 6,
        title: "RestauSim",
        description: "This is our capstone project, it is about a simulation tool for PoS and Inventory Management System. This system is being used under the Department of Hospitality and Tourism Management for their subject HM 1135 and TM 1135. The TechStack for this, for frontend we use HTML, JavaScript and TailwindCSS, for the backend we use PHP with Laravel as a framework. Currently this is under development. ",
        image: project5Image,
        tags: ["Capstone", "Laravel", "TailwindCSS"],
        githubURL: "https://github.com/ronn-bldv/restausim",
    }, 

    {
        id: 7,
        title: "Student Management System Using Ajax",
        description: "A web app for managing student records with real-time add, update, delete, and view operations using Ajax, improving efficiency without page reloads.",
        image: project7Image,
        tags: ["Ajax", "Activity", "TailwindCSS"],
        githubURL: "https://github.com/ronn-bldv/Student-Management-Using-AJAX",
    },
    {
        id: 8 ,
        title: "Portfolio using React + TailwindCSS",
        description: "A personal portfolio website built with React and TailwindCSS, showcasing projects, skills, and experience in a clean and responsive design.",
        image: project8Image,
        tags: ["Portfolio", "React", "TailwindCSS"],
        githubURL: "https://github.com/ronn-bldv/ronn-portfolio",
    }

]

export const ProjectSection = () => {
    return (
        <section
            id="projects"
            className="py-24 px-4 relative"
        >

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects. Each project was created during my BSIT Student
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 text-justify">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubURL} target="_blank" className="flex mt-auto text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/ronn-bldv" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}