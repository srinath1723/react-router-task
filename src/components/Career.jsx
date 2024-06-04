import Card from "./Card";
import "/public/cardimage/Analytical-Skills.png";
import "/public/cardimage/Project-Management.jpg";
import "/public/cardimage/Technical-Skills.webp";
const Career = () => {
  return (
    <div className="condent">
      <Card
        image="/public/cardimage/Technical-Skills.webp"
        title="Technical Skills"
        description=" Proficiency in specific areas of technology for problem-solving and innovation."
      /><Card
        image="/public/cardimage/Project-Management.jpg"
        title="Project Management"
        description="Organizing tasks, resources, and timelines to achieve project goals efficiently."
      /><Card
        image="/public/cardimage/Analytical-Skills.png"
        title="Analytical Skills"
        description="Ability to interpret data, solve problems, and make informed decisions."
      />
    </div>
  );

  
}

export default Career
