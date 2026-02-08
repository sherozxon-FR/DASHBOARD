
import styles from './Azolar.module.css'
import { NavLink, Outlet } from 'react-router-dom';

function Azolar() {

    const UserS = [

        {
            name: 'islom',
            lastName: 'islomov',
            kasb: 'senior frontend developer',
            yoshi: 25,
            Skills: [
                { name: "HTML5", details: "SEO, Accessibility", level: "Advanced", category: "Markup" },
                { name: "CSS3", details: "Flexbox, Grid", level: "Advanced", category: "Styling" },
                { name: "JavaScript", details: "ES6+", level: "Advanced", category: "Language" },
                { name: "TypeScript", details: "Strong Typing", level: "Advanced", category: "Language" },
                { name: "React.js", details: "Advanced Patterns", level: "Advanced", category: "Framework" },
                { name: "Git & GitHub", details: "Code Review", level: "Advanced", category: "Tools" }
            ]
        },

        {
            name: 'aziz',
            lastName: 'karimov',
            kasb: 'middle frontend developer',
            yoshi: 23,
            Skills: [
                { name: "HTML5", details: "Semantic HTML", level: "Intermediate", category: "Markup" },
                { name: "CSS3", details: "Responsive Design", level: "Intermediate", category: "Styling" },
                { name: "JavaScript", details: "ES6+", level: "Intermediate", category: "Language" },
                { name: "React.js", details: "Hooks", level: "Intermediate", category: "Framework" },
                { name: "React Router", details: "Routing", level: "Intermediate", category: "Routing" },
                { name: "REST API", details: "Axios / Fetch", level: "Intermediate", category: "Networking" }
            ]
        },

        {
            name: 'jamshid',
            lastName: 'rahmonov',
            kasb: 'junior frontend developer',
            yoshi: 21,
            Skills: [
                { name: "HTML", details: "Basics", level: "Beginner", category: "Markup" },
                { name: "CSS", details: "Flexbox", level: "Beginner", category: "Styling" },
                { name: "JavaScript", details: "Basics", level: "Beginner", category: "Language" },
                { name: "React", details: "Components", level: "Beginner", category: "Framework" },
                { name: "Git", details: "Basic Commands", level: "Beginner", category: "Tools" },
                { name: "Responsive Design", details: "Mobile First", level: "Beginner", category: "Design" }
            ]
        },
        {
            name: 'ali',
            lastName: 'hakimov',
            kasb: 'senior backend developer',
            yoshi: 27,
            Skills: [
                { name: "Node.js", details: "Event Loop", level: "Advanced", category: "Runtime" },
                { name: "Express.js", details: "Middleware", level: "Advanced", category: "Framework" },
                { name: "Databases", details: "MongoDB, PostgreSQL", level: "Advanced", category: "Database" },
                { name: "Authentication", details: "JWT, OAuth", level: "Advanced", category: "Security" },
                { name: "REST API", details: "Architecture", level: "Advanced", category: "API" },
                { name: "Docker", details: "Containers", level: "Advanced", category: "DevOps" }
            ]
        },

        {
            name: 'bekzod',
            lastName: 'sodiqov',
            kasb: 'middle backend developer',
            yoshi: 24,
            Skills: [
                { name: "Node.js", details: "Async Programming", level: "Intermediate", category: "Runtime" },
                { name: "Express.js", details: "Routing", level: "Intermediate", category: "Framework" },
                { name: "MongoDB", details: "CRUD", level: "Intermediate", category: "Database" },
                { name: "REST API", details: "Integration", level: "Intermediate", category: "API" },
                { name: "JWT", details: "Auth", level: "Intermediate", category: "Security" },
                { name: "Git", details: "Version Control", level: "Intermediate", category: "Tools" }
            ]
        },

        {
            name: 'sardor',
            lastName: 'nazarov',
            kasb: 'junior backend developer',
            yoshi: 22,
            Skills: [
                { name: "JavaScript", details: "Basics", level: "Beginner", category: "Language" },
                { name: "Node.js", details: "Basics", level: "Beginner", category: "Runtime" },
                { name: "Express.js", details: "Simple APIs", level: "Beginner", category: "Framework" },
                { name: "MongoDB", details: "Basic Queries", level: "Beginner", category: "Database" },
                { name: "REST API", details: "CRUD", level: "Beginner", category: "API" },
                { name: "Git", details: "Basic Usage", level: "Beginner", category: "Tools" }
            ]
        }
    ];


    const DetailsUser = (id) => {
        console.log(id); 
    };


    return (
        <div className={styles.Azolar}>
            <h1>Bizning guruh</h1>

            <div className={styles.AzolarContent} >
                {UserS.map((item, index) => (
                    <div key={index} className={styles.userCard} onClick={() => { DetailsUser(item) }}>
                        <div className={styles.cardHeader}>
                            <div className={styles.avatar}>
                                {item.name[0]}
                            </div>
                            <div className={styles.info}>
                                <h2>{item.name} {item.lastName}</h2>
                                <p className={styles.jobTitle}>{item.kasb}</p>
                            </div>
                        </div>

                        <div className={styles.skillsContainer}>
                            <p><strong>Yosh:</strong> {item.yoshi}</p>
                            <h3>Ko'nikmalar:</h3>
                            <div className={styles.skillsGrid}>
                                {item.Skills.map((skill, idx) => (
                                    <span key={idx} className={styles.skillBadge}>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}







export default Azolar