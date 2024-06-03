import Card from "./Card";
import "/src/cardimage/Analytical-Skills.png";
import "/src/cardimage/Data-Visualization-Tools.jpg";
import "/src/cardimage/Deep-Learning.jpg";
import "/src/cardimage/Expressjs.png";
import "/src/cardimage/image.png";
import "/src/cardimage/Machine-Learning.jpg";
import "/src/cardimage/MongoDB.png";
import "/src/cardimage/MySQL.png";
import "/src/cardimage/Networking.jpg";
import "/src/cardimage/operating-system.jpg";
import "/src/cardimage/PngItem_2069813.png";
import "/src/cardimage/power-bi.webp";
import "/src/cardimage/Programming-and-Scripting.jpeg";
import "/src/cardimage/Project-Management.jpg";
import "/src/cardimage/R-Programming.webp";
import "/src/cardimage/React.png";
import "/src/cardimage/Security-Tools-and-Technologies.jpg";
import "/src/cardimage/Technical-Skills.webp";
import "/src/cardimage/Cryptography.jpg"
const All = () => {
  return (
    <div className="condent">
      <Card
        image="/src/cardimage/Networking.jpg"
        title="Networking"
        description="Communication system connecting computers and devices for data exchange."
      /><Card
        image="/src/cardimage/operating-system.jpg"
        title="operating system"
        description="Software managing hardware and providing user interface for interaction."
      /><Card
        image="/src/cardimage/Programming-and-Scripting.jpeg"
        title="Programming and Scripting"
        description="Writing code to automate tasks and solve problems efficiently."
      />
      <Card
        image="/src/cardimage/Cryptography.jpg"
        title="Cryptography"
        description="Techniques for secure communication through encryption and decryption methods."
      />
      <Card
        image="/src/cardimage/Security-Tools-and-Technologies.jpg"
        title="Security Tools and Technologies"
        description=" Software and techniques safeguarding systems from cyber threats efficiently."
      />
 
      <Card
        image="/src/cardimage/Machine-Learning.jpg"
        title="Machine Learning"
        description=" Algorithms enabling computers to learn from data autonomously."
      /><Card
        image="/src/cardimage/Deep-Learning.jpg"
        title="Deep Learning"
        description="Advanced machine learning paradigm using neural networks for cognition."
      /><Card
        image="/src/cardimage/R-Programming.webp"
        title="R-Programming"
        description="Statistical computing language for data analysis, visualization, and modeling."
      /><Card
        image="/src/cardimage/Data-Visualization-Tools.jpg"
        title="Data Visualization Tools"
        description=" Software for presenting data insights graphically, aiding comprehension."
      />
      <Card
        image="/src/cardimage/power-bi.webp"
        title="power bi"
        description="Business analytics tool for data visualization and interactive reports."
      />
      
      <Card
        image="/src/cardimage/PngItem_2069813.png"
        title="HTML & Css"
        description="Essential for structuring and styling web content beautifully. "
      />
      <Card
        image="/src/cardimage/image.png"
        title="JavaScript"
        description="Versatile language for dynamic web development and interactivity."
      />
      <Card
        image="/src/cardimage/React.png"
        title="Front-End Frameworks(React)"
        description="JavaScript library for building interactive user interfaces efficiently."
      />
      <Card
        image="/src/cardimage/Expressjs.png"
        title="Server-Side Frameworks(Express.js (Node.js))"
        description="Minimalist web framework for Node.js to build server-side applications."
      />
       <Card
        image="/src/cardimage/MySQL.png"
        title="Databases MySQL (SQL)"
        description="Popular relational database management system for structured data storage. "
      />
        <Card
        image="/src/cardimage/MongoDB.png"
        title="Databases MongoDB (NoSQL)"
        description="NoSQL database for flexible, scalable, and high-performance data storage."
      />
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

export default All;
