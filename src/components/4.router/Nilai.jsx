import React, { useReducer } from "react";

const Nilai = () => {
  const [nilai, dispatchNilai] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NILAI_mtk":
          state = { ...state, nilaiMtk: action.payload };
          break;
        case "SET_NILAI_bahasa":
          state = { ...state, nilaiBahasa: action.payload };
          break;
        case "SET_NILAI_ipa":
          state = { ...state, nilaiIpa: action.payload };
          break;
        default:
      }
      const totalNilai =
        parseInt(state.nilaiMtk) +
        parseInt(state.nilaiBahasa) +
        parseInt(state.nilaiIpa);
      if (totalNilai >= 225) {
        state = { ...state, lulus: true };
      }
    },
    {
      nilaiMtk: 0,
      nilaiBahasa: 0,
      nilaiIpa: 0,
      lulus: false,
    }
  );
  return (
    <div>
      <h2>Nilai</h2>
      <label htmlFor="mtk">Nilai MTK : </label>
      <input
        type="number"
        name="mtk"
        id="mtk"
        onChange={(e) =>
          dispatchNilai({
            type: "SET_NILAI_mtk",
            payload: e.target.value,
          })
        }
      />{" "}
      <br />
      <label htmlFor="bahasa">Nilai bahasa : </label>
      <input
        type="number"
        name="bahasa"
        id="bahasa"
        onChange={(e) =>
          dispatchNilai({
            type: "SET_NILAI_bahasa",
            payload: e.target.value,
          })
        }
      />{" "}
      <br />
      <label htmlFor="ipa">Nilai ipa : </label>
      <input
        type="number"
        name="ipa"
        id="ipa"
        onChange={(e) =>
          dispatchNilai({
            type: "SET_NILAI_ipa",
            payload: e.target.value,
          })
        }
      />{" "}
      <br />
      {nilai.lulus ? <p>Lulus</p> : <p>Tidak Lulus</p>}
    </div>
  );
};

export default Nilai;
