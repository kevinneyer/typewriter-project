import { useState, useEffect } from "react";
import Typewriter from "./typewriter.jsx";

const Flag = () => {
  const [flag, setFlag] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    let ignore = false;
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6a6f63"
    )
      .then((res) => res.text())
      .then((data) => {
        if (!ignore) {
          setFlag(data);
          setDataLoaded(true);
        }
      });
    return () => {
      ignore = true;
    };
  }, [flag, dataLoaded]);

  // Script used to to get the URL to get the flag
  // const getWebUrl = () => {
  //     let nodeCollection = document.getElementsByClassName('ramp ref');
  //     let urlString = "";
  //     for (const node of nodeCollection) {
  //         urlString += node.attributes[1].value;
  //     }

  //     return urlString;
  // }

  return (
    <div className="flag">
      {!dataLoaded ? "Loading..." : <Typewriter flag={flag} />}
    </div>
  );
};

export default Flag;
