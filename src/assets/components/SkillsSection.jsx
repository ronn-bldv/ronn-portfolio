import { useState } from "react"
import { cn } from "@/lib/util";

const skills =[
    //front end
    {name: "HTML", level:75, category: "frontend"},
    {name: "CSS", level:60, category: "frontend"},
    {name: "JavaScript", level:45, category: "frontend"},
    {name: "Tailwind CSS", level:80, category: "frontend"},

    //backend
    {name: "PHP", level:80, category: "backend"},
    {name: "MySQL", level:65, category: "backend"},
    {name: "Django", level:40, category: "backend"},

    //tools
    {name: "VS Code", level:90, category: "tools"},
    {name: "Git/Github", level:30, category: "tools"},
    {name: "AWS", level:20, category: "tools"},
    {name: "WordPress", level:40, category: "tools"},

    //prog languages
    {name: "C++", level:50, category: "Programming Languages"},
    {name: "Java", level:55, category: "Programming Languages"},
    {name: "Python", level:60, category: "Programming Languages"},
    
]

const categories = ["all", "frontend", "backend", "tools", "Programming Languages"]   

export const SkillsSection = () =>{

    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_put"
                                style={{width: skill.level + '%'}}>
                            </div>
                        </div>
                        <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}