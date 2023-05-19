import React, { useEffect, useState } from "react";

const LuasLingkaran = () => {
  const [jari, setJari] = useState(0);
  const [hasil, setHasil] = useState(0);

  useEffect(() => {
    setHasil((22 / 7) * jari * jari);
  }, [jari]);
  return (
    <div>
      <h4>Jari - Jari : </h4>
      <input
        type="number"
        value={jari}
        onChange={(e) => setJari(e.target.value)}
      />
      <br />
      <h4>Luas : {hasil}</h4>
    </div>
  );
};

export default LuasLingkaran;
