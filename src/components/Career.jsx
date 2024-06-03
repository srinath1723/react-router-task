import Card from "./Card";
import "/src/cardimage/Analytical-Skills.png";
import "/src/cardimage/Project-Management.jpg";
import "/src/cardimage/Technical-Skills.webp";
const Career = () => {
  return (
    <div className="condent">
      <Card
        image="/src/cardimage/Technical-Skills.webp"
        title="Technical Skills"
        description=" Proficiency in specific areas of technology for problem-solving and innovation."
      /><Card
        image="/src/cardimage/Project-Management.jpg"
        title="Project Management"
        description="Organizing tasks, resources, and timelines to achieve project goals efficiently."
      /><Card
        image="/src/cardimage/Analytical-Skills.png"
        title="Analytical Skills"
        description="Ability to interpret data, solve problems, and make informed decisions."
      />
    </div>
  );

  
}

export default Career
