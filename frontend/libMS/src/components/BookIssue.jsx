import React from 'react';

export default function BookIssue(){
    return(
        <>
        <div className='h-[100%] w-[100%]'>
        <div className='text-center h-[15%] py-2 bg-slate-300'>Issue Book</div>
        <div className='h-[85%] w-[100%] bg-slate-700'>
            <form className='flex flex-col gap-2 items-center text-black' action="">
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%]">Enter Book Name :</p>
            <input type="text" className=" h-[90%] w-[50%] border border-black" /></div>
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%]">Enter Author Name :</p>
            <input type="text" className=" h-[90%] w-[50%] border border-black" /></div>
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%]">issue Date :</p>
            <input type="date" className=" h-[90%] w-[50%] border border-black" /></div>
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%]">Return date:</p>
            <input type="Date" className=" h-[90%] w-[50%] border border-black" /></div>
            <div className="h-[15%] w-full flex gap-2"><p className="w-[20%]">Remarks:</p>
            <input type="text" className=" h-[90%] w-[50%] border border-black" /></div>
            <button className='bg-[#6060d6] w-[100px] rounded-md h-[30px] '>Confirm</button>
            </form>

        </div>
        </div>
        </>
    );
}