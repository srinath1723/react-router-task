import Card from "./Card";

import "/public/cardimage/Data-Visualization-Tools.jpg";
import "/public/cardimage/Deep-Learning.jpg";
import "/public/cardimage/Machine-Learning.jpg";
import "/public/cardimage/power-bi.webp";
import "/public/cardimage/R-Programming.webp";

const Datascience = () => {
  return (
    <div className="condent">
      
      <Card
        image="/public/cardimage/Machine-Learning.jpg"
        title="Machine Learning"
        description=" Algorithms enabling computers to learn from data autonomously."
      /><Card
        image="/public/cardimage/Deep-Learning.jpg"
        title="Deep Learning"
        description="Advanced machine learning paradigm using neural networks for cognition."
      /><Card
        image="/public/cardimage/R-Programming.webp"
        title="R-Programming"
        description="Statistical computing language for data analysis, visualization, and modeling."
      /><Card
        image="/public/cardimage/Data-Visualization-Tools.jpg"
        title="Data Visualization Tools"
        description=" Software for presenting data insights graphically, aiding comprehension."
      />
      <Card
        image="/public/cardimage/power-bi.webp"
        title="power bi"
        description="Business analytics tool for data visualization and interactive reports."
      />
      
      
    </div>
  );
}

export default Datascience
