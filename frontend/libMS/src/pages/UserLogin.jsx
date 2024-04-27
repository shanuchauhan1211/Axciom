import React from "react";

export default function AdminLog() {
  return (
    <>
      <div className="h-screen flex items-center justify-center w-full bg-black">
        <div className="bg-white h-[50%] w-[40%] rounded-md shadow-md flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold">Library Management System</p>
          <form
            className="h-[80%] w-[80%] flex flex-col justify-center gap-12 bg-slate-300"
            action=""
          >
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%]">User Id :</p>
            <input placeholder="User Id" type="text" className=" h-[90%] w-[70%] border border-black" /></div>
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%] ">Password:</p>
            <input placeholder="User Password" type="text" className=" h-[90%] w-[70%] border border-black" /></div>
          
            <div className="flex justify-center gap-24">
              <button className="bg-[#5454ee] text-white w-[100px] h-[30px] rounded-md">Cancel</button>
              <button className="bg-[#5454ee] text-white w-[100px] h-[30px] rounded-md">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
