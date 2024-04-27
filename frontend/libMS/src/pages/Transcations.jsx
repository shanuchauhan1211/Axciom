import {React , useState} from "react";
import BookAvailable from "../components/BookAvailable";
import BookIssue from "../components/BookIssue";

export default function Transcations() {

    const [change,setChange] = useState("BA");


    function handlenavigate(val){
        setChange(val)
    }
  return (
    <>
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="h-[70%] w-[80%] rounded-md shadow-md bg-white ">
          <div className="h-[15%] text-2xl justify-center  flex items-center  bg-slate-300">
            <div className="  w-[90%] text-center "><p className="">Transaction</p></div>
            <button className="hover:underline bg-[#6666c2] rounded-md h-[40px] text-lg w-[80px]">Home</button>
          </div>

          <div className="h-[75%] flex  w-[100%] bg-slate-700">
            <div className="h-[100%] w-[25%] bg-slate-200 flex items-center justify-center  ">
                <ul className="h-[90%] w-[90%] bg-slate-100 ">
                    <li onClick={()=>{handlenavigate('BA')}} className="h-[25%] w-[100%] hover:bg-slate-600 py-6 text-center">Is Book Available?</li>
                    <li onClick={()=>{handlenavigate('RB')}} className="h-[25%] w-[100%] hover:bg-slate-600 py-6 text-center">Return Book?</li>
                    <li onClick={()=>{handlenavigate('PF')}} className="h-[25%] w-[100%] hover:bg-slate-600 py-6 text-center">Pay Fine?</li>
                    <li onClick={()=>{handlenavigate('IB')}} className="h-[25%] w-[100%] hover:bg-slate-600 py-6 text-center">Issue Book?</li>
                </ul>
            </div>
            <div className="bg-black text-white h-[100%] w-[75%]">
            {(() => {
          switch (change) {
            case "BA":
              return <BookAvailable/>; 
            case "IB":
              return <BookIssue/>; 
            default:
              return 
          }
        })()}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
