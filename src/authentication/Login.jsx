import React from "react";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Logo from "../assets/logoLg.svg";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

const Login = () => {
  const navigate = useNavigate();
//   const dispatch = useDispatch();
  const [validateMsg, setValidateMsg] = useState({});
//   const users = useSelector((state) => state.auth?.login?.error?.message);
//   console.log("🚀 ~ file: Login.jsx:17 ~ Login ~ users:", users);
//   const [error, setError] = useContext(ErrorContext);
//   useEffect(() => {
//     setError(users);
//   }, [users, setError]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const validateAll = () => {
    const msg = {};

    if (isEmpty(user.email)) {
      msg.email = "Vui lòng nhập Email";
    } else if (!isEmail(user.email)) {
      msg.email = "Email sai rồi ??";
    }
    if (isEmpty(user.password)) {
      msg.password = "Vui lòng nhập Password";
    }
    setValidateMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    loginUser(user, dispatch, navigate);
  };
  return (
    <div>
      <Form>
        <div className="h-[90vh] w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[1200px]  h-60 flex justify-between items-center">
            <div className="w-[600px] flex flex-col justify-center items-center">
              <h1 className=" font-bold text-3xl mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Welcome Back!!
              </h1>
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <div className="w-full flex flex-col gap-4 max-w-4xl">
                  <form action="post" className="flex flex-col gap-4 max-w-4xl">
                    <Input
                      nameLabel="Email"
                      placeholder="Email của bạn ..."
                      name="email"
                      type="text"
                      value={user.email}
                      setValue={setUser}
                    />
                    <Input
                      nameLabel="Password"
                      placeholder="Password của bạn ..."
                      name="password"
                      type="password"
                      value={user.password}
                      setValue={setUser}
                    />
                  </form>
                  <p className="pl-5 text-red-500 text-center">{`${
                    validateMsg.email || validateMsg.password 
                  }`}</p>
                </div>
                <div className="w-full flex gap-2 justify-center items-center max-w-2xl ">
                  <button
                    className="px-32 mt-5 w-full  rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 py-4 text-center font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 sm:inline-block "
                    onClick={handleLogin}
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                </div>
                <p className="mt-2 text-slate-400 cursor-pointer">
                  Bạn chưa có tài khoản ?{" "}
                  <span
                    className="text-pink-400 "
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    {" "}
                    Đăng ký
                  </span>
                </p>
                <p className="text-center font-mono text-sm text-gray-300 mt-2 ">
                  Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý
                  với <br />{" "}
                  <span className=" text-lime-400">Điều khoản sử dụng</span> của
                  chúng tôi.
                </p>
              </div>
            </div>
            <div className="">
              <img src={Logo} className="w-[400px]" alt="" />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
