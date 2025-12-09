import React from "react";
import Card from "../src/Card";

const App = () => {
  return (
    <div className="flex justify-center flex-wrap w-full h-full mt-10">
      <Card
        img="https://i.pinimg.com/736x/25/6f/d9/256fd9d8c81abd8e19b5a383b54c9af0.jpg"
        userName="Cathrine Holista"
        days={30}
        bio="Senior UI/UX Desiginer"
        roles={["Part-time", "Senior Level"]}
        cost="$200/hr"
        location="Mumbai,India"
      />
      <Card
        img="https://i.pinimg.com/1200x/3f/78/10/3f78106155bfdf4c671e598f199356e4.jpg"
        userName="Smantha Gray"
        days={2}
        bio="Senior UI/UX Desiginer"
        roles={["Part-time", "Senior Level"]}
        cost="$200/hr"
        location="Mumbai,India"
      />
      <Card
        img="https://i.pinimg.com/736x/70/20/9c/70209c9cd71157f15753efe37cf5a5b1.jpg"
        userName="Sashi Bala"
        days={14}
        bio="Senior UI/UX Desiginer"
        roles={["Part-time", "Senior Level"]}
        cost="$200/hr"
        location="Mumbai,India"
      />
      <Card
        img="https://i.pinimg.com/736x/5e/81/8c/5e818cc93ed4475ba96bd1f1b8c24fb2.jpg"
        userName="Melissa Grove"
        days={10}
        bio="Senior UI/UX Desiginer"
        roles={["Part-time", "Senior Level"]}
        cost="$200/hr"
        location="Mumbai,India"
      />
      <Card
        img="https://i.pinimg.com/736x/57/54/c4/5754c45cf4e6e076be604ff72d28361e.jpg"
        userName="Gratosa Pelica"
        days={22}
        bio="Senior UI/UX Desiginer"
        roles={["Part-time", "Senior Level"]}
        cost="$200/hr"
        location="Mumbai,India"
      />
      <Card
        img="https://i.pinimg.com/736x/96/da/f5/96daf5db046fdbde68b62dd163c9c873.jpg"
        userName="Flin Kotl"
        days={18}
        bio="Senior UI/UX Desiginer"
        roles={["Part-time", "Senior Level"]}
        cost="$200/hr"
        location="Mumbai,India"
      />
    </div>
  );
};

export default App;
