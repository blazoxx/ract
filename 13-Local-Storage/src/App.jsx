import React from "react";

const App = () => {

  // localStorage.clear()      // to clear storage

  // sessionStorage.clear()    // to clear storage

  // localStorage.setItem("user", "BPS");   // to set item in storage

  // const user = localStorage.getItem("user");  // to get item from storage

  // localStorage.removeItem("user")  // to remove specific item from storage



  // // Storing Object in Local Storage
  // const user2 = {
  //   name: 'BPS',
  //   age: 24,
  //   city: "Delhi"
  // }

  // console.log(user2)

  // localStorage.setItem("user2", JSON.stringify(user2))  // to store object, we need to convert it into string

  const user2 = JSON.parse(localStorage.getItem("user2"))  // to get object, we need to parse it back to object

  console.log(user2)

  return (
    <div className="bg-gray-900 text-red-200 h-screen flex items-center justify-center"></div>
  );
};

export default App;
