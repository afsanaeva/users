import { React, userState, useEffect } from "react";
// import axios from "axios";

const Home = () => {
  const [users, setUsers] = userState([]);
  
  useEffect(() => {
    console.log("helooo");
  }, []);
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
