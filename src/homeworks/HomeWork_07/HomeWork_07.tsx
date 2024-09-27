import "./styles.css";
import { Children, useState } from "react";
import Feedback from "../../components/Feedback/Feedback";
import SimponsCard from "../../components/SimpsonsCard/SimpsonsCard";
import Modal from "../../components/Modal/Modal";

function HomeWork_07() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const onLike = () => {
    setLikes((prevValue : number) => {
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislikes((prevValue : number) => {
      return prevValue + 1;
    });
  };

  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };
  return (
    <div className="homework07-wrapper">
      <div>
      <Feedback likes={likes} dislikes={dislikes} onLike={onLike} onDislike={onDislike} resetResults={resetResults} />
      </div>
      <div>
      <SimponsCard firstName="Homer" lastName="Simpson" avatar="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" job="Nuclear Safety Inspector" hobby="Bowling"/>
      <p><Modal children /></p>
      </div>
      <div>
      
      </div>
    </div>
  )
}
export default HomeWork_07;
