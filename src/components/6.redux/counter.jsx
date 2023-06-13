import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counter";

const FunctCounter = (props) => {
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Selamat Datang {user.name}</h1>
      <div>
        <ul>
          <li>Nama : {user.name}</li>
          <li>Email :{user.email}</li>
          <li>No Hp : {user.nohp}</li>
          <li>Bootcamp : {user.bootcamp}</li>
          <li>Tempat lahir : {user.tmpatLahir}</li>
          <li>Tanggal Lahir : {user.tglLahir}</li>
          <li>Alamat : {user.alamat}</li>
          <li>Password : {user.password}</li>
          <li>Confirm Password : {user.confirmPassword}</li>
        </ul>
      </div>
    </div>
  );
};

export default FunctCounter;
