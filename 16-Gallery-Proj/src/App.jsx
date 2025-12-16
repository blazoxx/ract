import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=15`
      );
      setUserData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [index]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Gallery */}
      <div className="flex flex-wrap justify-center gap-5">
        {userData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Buttons (always after cards) */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="bg-amber-400 text-black rounded px-6 py-3 font-medium
                     cursor-pointer active:scale-95 text-lg disabled:opacity-50"
          disabled={index === 1 || loading}
          onClick={() => setIndex((prev) => prev - 1)}
        >
          Prev
        </button>
        <h1 className="font-bold text-xl text-center">Page {index}</h1>
        <button
          className="bg-amber-400 text-black text-lg rounded px-6 py-3 font-medium cursor-pointer active:scale-95 disabled:opacity-50"
          disabled={loading}
          onClick={() => setIndex((prev) => prev + 1)}
        >
          Next
        </button>
      </div>

      {/* CENTERED LOADING OVERLAY */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="text-lg font-medium tracking-wide">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default App;
