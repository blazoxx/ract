import { useState } from "react";
import React from "react";

const Card = ({ item }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-80">
      <div className="relative w-full h-60 overflow-hidden rounded-2xl">
        {!loaded && (
          <div className="absolute inset-0 bg-neutral-700 animate-pulse" />
        )}

        <img
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
          src={`https://picsum.photos/id/${item.id}/400/300`}
          alt={item.author}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <p className="mt-2 text-sm opacity-70 text-center">
        {item.author}
      </p>
    </div>
  );
};

export default React.memo(Card); // Memoized to prevent unnecessary re-renders


