import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import "./App.css";
import All from "./components/All";
import Fullstackdev from "./components/Fullstackdev";
import Datascience from "./components/Datascience";
import Cybersecurity from "./components/Cybersecurity";
import Career from "./components/Career";
import './components/Components.css';
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
const AppLayout = ({ element }) => {
  return (
    <div>
      <Navbar />
      {element} 
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout element={<All />} />
  },
  {
    path: "/fullstackdev",
    element: <AppLayout element={<Fullstackdev />} />
  },
  {
    path: "/datascience",
    element: <AppLayout element={<Datascience />} />
  },
  {
    path: "/cybersecurity",
    element: <AppLayout element={<Cybersecurity />} />
  },
  {
    path: "/career",
    element: <AppLayout element={<Career />} />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
