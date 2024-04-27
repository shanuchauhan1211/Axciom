import React from "react";

export default function AdminHomePage() {
  return (
    <>
      <div className=" h-screen w-full  flex flex-col items-center justify-center">
        <div className="h-[70%] w-[80%] shadow-md rounded-md  ">
          <div className="h-[15%] w-[100%] text-2xl justify-evenly flex ">
            <button className=" hover:underline">Maintenance</button>
            <button className=" hover:underline">Reports</button>
            <button className=" hover:underline">Transaction</button>
          </div>
          <div className="h-[75%]   overflow-y-scroll">
            <div className="text-2xl text-center text-white">
              Product details
            </div>
            <table className="border w-full">
            
                <tr>
                  <th className="border w-1/3">Code no. From</th>
                  <th className="border w-1/3">Code no. To</th>
                  <th className="border w-1/3">Category</th>
                </tr>
        
              <tbody>
                <tr className="border ">
                  <td className="border">sc</td>
                  <td>ec</td>
                  <td>fc</td>
                </tr>
                <tr>
                  <td>ghj</td>
                  <td>hjk</td>
                  <td>bnm,</td>
                </tr>
                <tr>
                    <td>yuio</td>
                    <td>rtyu</td>
                    <td>sdfg</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div className="flex items-center h-[10%]">
<button className="w-[100px] bg-[#7a7adf]">LogOut</button>
          </div>
        </div>
      </div>
    </>
  );
}
