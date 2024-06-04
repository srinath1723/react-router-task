
import Card from './Card'; 

 
import "/public/cardimage/Networking.jpg";
import "/public/cardimage/operating-system.jpg";
import "/public/cardimage/Programming-and-Scripting.jpeg";
import "/public/cardimage/Cryptography.jpg";
import "/public/cardimage/Security-Tools-and-Technologies.jpg";


const Cybersecurity = () => {
  return (
    <div className="condent">
      <Card
        image="/public/cardimage/Networking.jpg"
        title="Networking"
        description="Communication system connecting computers and devices for data exchange."
      /><Card
        image="/public/cardimage/operating-system.jpg"
        title="operating system"
        description="Software managing hardware and providing user interface for interaction."
      /><Card
        image="/public/cardimage/Programming-and-Scripting.jpeg"
        title="Programming and Scripting"
        description="Writing code to automate tasks and solve problems efficiently."
      />
      <Card
        image="/public/cardimage/Cryptography.jpg"
        title="Cryptography"
        description="Techniques for secure communication through encryption and decryption methods."
      />
      <Card
        image="/public/cardimage/Security-Tools-and-Technologies.jpg"
        title="Security Tools and Technologies"
        description=" Software and techniques safeguarding systems from cyber threats efficiently."
      />
    </div>
  );
}

export default Cybersecurity;
