import { useState, useEffect } from "react";
import Typewriter from "./typewriter.jsx";

const Flag = () => {
  const [flag, setFlag] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  return (
    <div className="flag">
        <Typewriter flag="typewriter" />
    </div>
  );
};

export default Flag;
