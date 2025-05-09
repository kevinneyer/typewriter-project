import { useState, useEffect } from "react";

const Typewriter = (props) => {
  const { flag } = props;
  const [currentFlag, setcurrentFlag] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < flag.length) {
      const timeout = setTimeout(() => {
        setcurrentFlag((letter) => letter + flag[currentIndex]);
        setCurrentIndex((index) => index + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, flag]);

  return <span>{currentFlag}</span>;
};

export default Typewriter;
