import React,{useContext} from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";

export default function AdminLog() {
   // const { login } = useContext(AuthContext);
    const [activeLog, setActiveLog] = useState(true);
    const initialLog = { name: "", password: "" };

    const [logUser, setLogUser] = useState(initialLog);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();
   
  
    var token_key = "";
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/User/logIn", {
            name: logUser.name,
            password: logUser.password,
          });
          // const json = await response.json()
          // console.log(json);
          if (response.status === 200) {
            console.log(response);
            console.log(response.data);
            console.log(response.data.result.isAdmin);
            token_key = JSON.stringify(jwtDecode(response.data.token));
            console.log(token_key);
            localStorage.setItem("Token", token_key);
          } else {
            console.log("hey");
          }
          setLogUser(initialLog);
          alert("Logged in");
          if (response.data.result.isAdmin === false) {
            login();
            console.log("hello");
            navigate("/Contact");
          } else if (response.data.result.isAdmin === true) {
            console.log("hello1");
            login();
            navigate("/");
          }
        } catch (error) {
          alert("Check Username or Password");
          console.log(error);
        }
      };
    
    
    
    
      function handleLogChangeName(e) {
        setLogUser({ ...logUser, name: e.target.value });
      }
      function handleLogChangePassword(e) {
        let new_pass = e.target.value;
        setLogUser({ ...logUser, password: e.target.value });
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
    
        if (!new_pass.match(lowerCase)) {
          setErrorMessage("Passowrd should contain LowerCase letters");
        } else if (!new_pass.match(upperCase)) {
          setErrorMessage("Passowrd should contain UpperCase letters");
        } else if (!new_pass.match(numbers)) {
          setErrorMessage("Passowrd should contain numbers");
        } else if (new_pass.length < 8) {
          setErrorMessage("Passowrd should contain Weak password");
        } else {
          setErrorMessage("");
        }
      }

  return (
    <>
      <div className="h-screen flex items-center justify-center w-full bg-black">
        <div className="bg-white h-[50%] w-[40%] rounded-md shadow-md flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold">Library Management System</p>
          <form
           onSubmit={handleLogin}
            className="h-[80%] w-[80%] flex flex-col justify-center gap-12 bg-slate-300"
            action=""
          >
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%]">User Id :</p>
            <input onChange={handleLogChangeName} placeholder="Admin Id" type="text" className=" h-[90%] w-[70%] border border-black" /></div>
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%] ">Password:</p>
            onChange={handleLogChangePassword}
            <input  placeholder="Admin Password" type="text" className=" h-[90%] w-[70%] border border-black" /></div>
            <div
                    className={`text-[red] text-xl backdrop-blur-md ${
                      errorMessage === "" ? `hidden` : `block`
                    }  `}
                  >
                    {errorMessage}
                  </div>
          
            <div className="flex justify-center gap-24">
              <button type="submit"  className="bg-[#5454ee] text-white w-[100px] h-[30px] rounded-md">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
