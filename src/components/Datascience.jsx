import Card from "./Card";

import "/src/cardimage/Data-Visualization-Tools.jpg";
import "/src/cardimage/Deep-Learning.jpg";
import "/src/cardimage/Machine-Learning.jpg";
import "/src/cardimage/power-bi.webp";
import "/src/cardimage/R-Programming.webp";

const Datascience = () => {
  return (
    <div className="condent">
      
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
      
      
    </div>
  );
}

export default Datascience
