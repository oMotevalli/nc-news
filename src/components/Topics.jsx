import { useEffect, useState } from "react";
import { getTopics } from "../../api";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data);
    });
    setIsLoading(false);
  }, []);

  console.log(topics);
  return (
    <div>
      {/* {topics.map(topic) => {
        return <Link key={topic.}></Link>
    }} */}
    </div>
  );
};

export default Topics;

// MADE A START ON TOPIC TICKET...
// CHANGES IN NAV, APP AND TOPICS LIST
