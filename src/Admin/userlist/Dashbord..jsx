import Featured from "../userlist/FeaturedInf";
import BarChart from "../userlist/chart" ;
import React from 'react';
const Home = () => {
  return (
    <div className="home">
      
      <div className="homeContainer">
        
        <div className="widgets">

        </div>
        <div className="charts">
          <Featured />
          <BarChart title="Nombre d'absences par mois ."      title1="nombre travailleurs par departement ."  aspect={3 /1} />
     
        </div>

      </div>
    </div>
  );
};

export default Home;