import { useState, useEffect } from "react";

function Typewriter() {
  const words = ["React", "Javascript", "Front-end", "Back-end", "Database"];
  const [part, setPart] = useState("");
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 5;
  const speed = 200;

  useEffect(() => {
    const interval = setInterval(() => {
      let localOffset = offset;
      let localForwards = forwards;
      let localSkipCount = skipCount;
      let localIndex = index;

      if (localForwards) {
        if (localOffset >= words[localIndex].length) {
          localSkipCount++;
          if (localSkipCount === skipDelay) {
            localForwards = false;
            localSkipCount = 0;
          }
        }
      } else {
        if (localOffset === 0) {
          localForwards = true;
          localIndex++;
          if (localIndex >= words.length) {
            localIndex = 0;
          }
        }
      }

      if (localSkipCount === 0) {
        if (localForwards) {
          localOffset++;
        } else {
          localOffset--;
        }
      }

      setPart(words[localIndex].substr(0, localOffset));
      setOffset(localOffset);
      setForwards(localForwards);
      setSkipCount(localSkipCount);
      setIndex(localIndex);
    }, speed);

    return () => clearInterval(interval);
  }, [forwards, offset, skipCount, index]);

  return <h1 className="moving-presentation">{part}</h1>;
}

export default Typewriter;
