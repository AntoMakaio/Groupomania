import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import NewPost from "../components/Post/NewPost";
import Wall from "../components/Wall";
import Log from "../components/Log";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div className="home">
      <div className="main">
        <div className="home-header">
          {uid ? <NewPost /> : <Log signin={true} signup={false} />}
        </div>
        <Wall />
      </div>
    </div>
  );
};
export default Home;
