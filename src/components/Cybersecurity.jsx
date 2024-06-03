
import Card from './Card'; 

 
import "/src/cardimage/Networking.jpg";
import "/src/cardimage/operating-system.jpg";
import "/src/cardimage/Programming-and-Scripting.jpeg";
import "/src/cardimage/Cryptography.jpg";
import "/src/cardimage/Security-Tools-and-Technologies.jpg";


const Cybersecurity = () => {
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
    </div>
  );
}

export default Cybersecurity;
