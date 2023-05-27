import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setProdi } from "./store/user";

const FormUser = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Form User</h1>
      <h3>Input Nama</h3>
      <input
        type="text"
        value={user.name}
        onChange={({ target: { value } }) => dispatch(setName(value))}
      />
      <h3>Input Prodi</h3>
      <input
        type="text"
        value={user.prodi}
        onChange={({ target: { value } }) => dispatch(setProdi(value))}
      />
    </div>
  );
};

export default FormUser;
