import data from "./data";
import { useState } from "react";

import "./index.css";


const App = () => {
  const [people, setPeople] = useState<any>(data);

  type TPerson = {
    id: number
    age: number
    name: string
    image: string
  }

  return (
    <main>
      <div className="container">
        <h3>{ people.length>0 ? people.length : "No " } Birthday{ people.length>0 && "s"} Today</h3>
        {people.map((person:TPerson) => {
          const { id, age, name, image } = person;

          return <div key={id} className="person">
            <img className="img" src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>

            </div>
            
            
          </div>
          return;
        })}

        <button className="btn btn-block" onClick={()=>setPeople([])}>Clear All</button>
      </div>

    </main>
    
  );
};
export default App;
