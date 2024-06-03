import Card from "./Card";

import "/src/cardimage/Expressjs.png";
import "/src/cardimage/image.png";
import "/src/cardimage/MongoDB.png";
import "/src/cardimage/MySQL.png";
import "/src/cardimage/PngItem_2069813.png";
import "/src/cardimage/React.png";

const Fullstackdev = () => {
  return (
    <div className="condent">
      
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
        
    </div>
   
  );
}

export default Fullstackdev;
