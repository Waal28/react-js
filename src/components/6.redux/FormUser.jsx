import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setAlamat,
  setBootcamp,
  setConfirmPassword,
  setEmail,
  setName,
  setNoHp,
  setPassword,
  setTglLahir,
  setTmpatLahir,
} from "./store/user";

const FormUser = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  return (
    <div>
      <h1>Form Multi Step</h1>
      {step === 1 ? (
        <div>
          <h3>Step 1</h3>
          <ul>
            <li>
              <span>Nama :</span>
              <br />
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                value={user.name}
                onChange={({ target: { value } }) => dispatch(setName(value))}
              />
            </li>
            <li>
              <span>Email :</span>
              <br />
              <input
                type="emai"
                name="email"
                placeholder="Masukkan Email"
                value={user.email}
                onChange={({ target: { value } }) => dispatch(setEmail(value))}
              />
            </li>
            <li>
              <span>No Hp :</span>
              <br />
              <input
                type="number"
                name="nohp"
                placeholder="Masukkan No Hp"
                value={user.nohp}
                onChange={({ target: { value } }) => dispatch(setNoHp(value))}
              />
            </li>
            <li>
              <input
                type="radio"
                name="bootcamp"
                value="UI/UX"
                onChange={({ target: { value } }) =>
                  dispatch(setBootcamp(value))
                }
              />
              <span>UI/UX</span>
            </li>
            <li>
              <input
                type="radio"
                name="bootcamp"
                value="Backend Engineer"
                onChange={({ target: { value } }) =>
                  dispatch(setBootcamp(value))
                }
              />
              <span>Backend Engineer</span>
            </li>
            <li>
              <input
                type="radio"
                name="bootcamp"
                value="Frontend Engineer"
                onChange={({ target: { value } }) =>
                  dispatch(setBootcamp(value))
                }
              />
              <span>Frontend Engineer</span>
            </li>
            <li>
              <input
                type="radio"
                name="bootcamp"
                value="Digital Marketing"
                onChange={({ target: { value } }) =>
                  dispatch(setBootcamp(value))
                }
              />
              <span>Digital Marketing</span>
            </li>
          </ul>
          <button onClick={() => setStep(step + 1)}>Next Step</button>
        </div>
      ) : null}
      {step === 2 ? (
        <div>
          <h3>Step 2</h3>
          <ul>
            <li>
              <span>Tempat dan Tangal Lahir</span>
              <br />
              <input
                type="text"
                name="tmpatLahir"
                placeholder="Masukkan Tempat Lahir"
                value={user.tmpatLahir}
                onChange={({ target: { value } }) =>
                  dispatch(setTmpatLahir(value))
                }
              />
              <input
                type="date"
                name="tglLahir"
                value={user.tglLahir}
                onChange={({ target: { value } }) =>
                  dispatch(setTglLahir(value))
                }
              />
            </li>
            <li>
              <span>Alamat Lengkap</span>
              <br />
              <input
                type="text"
                name="alamat"
                placeholder="Masukkan Alamat Lengkap"
                value={user.alamat}
                onChange={({ target: { value } }) => dispatch(setAlamat(value))}
              />
            </li>
          </ul>
          <button onClick={() => setStep(step + 1)}>Next Step</button>
        </div>
      ) : null}
      {step === 3 ? (
        <div>
          <h3>Step 3</h3>
          <ul>
            <li>
              <span>Password</span>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password"
                value={user.password}
                onChange={({ target: { value } }) =>
                  dispatch(setPassword(value))
                }
              />
            </li>
            <li>
              <span>Confirm Password</span>
              <br />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={({ target: { value } }) =>
                  dispatch(setConfirmPassword(value))
                }
              />
            </li>
          </ul>
          <button>
            <Link to="/result">Submit</Link>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FormUser;
