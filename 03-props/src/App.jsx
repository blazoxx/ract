import React from "react";
import Card from "./card";

const App = () => {
  return (
    <div className="p-4 flex justify-center flex-wrap">
      <Card
        user="BPS"
        age={20}
        img="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="DG"
        age={21}
        img="https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="KSH"
        age={26}
        img="https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
