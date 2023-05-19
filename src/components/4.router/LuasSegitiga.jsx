import React, { useEffect, useState } from "react";

const LuasSegitiga = () => {
  const [alas, setAlas] = useState(0);
  const [tinggi, setTinggi] = useState(0);
  const [hasil, setHasil] = useState(0);

  useEffect(() => {
    alert("Component did mount");
    return () => {
      alert("Component will unmount");
    };
  });
  useEffect(() => {
    setHasil(0.5 * alas * tinggi);
  }, [alas, tinggi]);
  return (
    <div>
      <h4>Alas : </h4>
      <input
        type="number"
        value={alas}
        onChange={(e) => setAlas(e.target.value)}
      />
      <br />
      <h4>Tinggi : </h4>
      <input
        type="number"
        value={tinggi}
        onChange={(e) => setTinggi(e.target.value)}
      />
      <br />
      <h4>Luas : {hasil}</h4>
    </div>
  );
};

export default LuasSegitiga;
