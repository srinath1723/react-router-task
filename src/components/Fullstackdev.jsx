import Card from "./Card";

import "/public/cardimage/Expressjs.png";
import "/public/cardimage/image.png";
import "/public/cardimage/MongoDB.png";
import "/public/cardimage/MySQL.png";
import "/public/cardimage/PngItem_2069813.png";
import "/public/cardimage/React.png";

const Fullstackdev = () => {
  return (
    <div className="condent">
      
      <Card
        image="/public/cardimage/PngItem_2069813.png"
        title="HTML & Css"
        description="Essential for structuring and styling web content beautifully. "
      />
      <Card
        image="/public/cardimage/image.png"
        title="JavaScript"
        description="Versatile language for dynamic web development and interactivity."
      />
      <Card
        image="/public/cardimage/React.png"
        title="Front-End Frameworks(React)"
        description="JavaScript library for building interactive user interfaces efficiently."
      />
      <Card
        image="/public/cardimage/Expressjs.png"
        title="Server-Side Frameworks(Express.js (Node.js))"
        description="Minimalist web framework for Node.js to build server-side applications."
      />
       <Card
        image="/public/cardimage/MySQL.png"
        title="Databases MySQL (SQL)"
        description="Popular relational database management system for structured data storage. "
      />
        <Card
        image="/public/cardimage/MongoDB.png"
        title="Databases MongoDB (NoSQL)"
        description="NoSQL database for flexible, scalable, and high-performance data storage."
      />
        
    </div>
   
  );
}

export default Fullstackdev;
