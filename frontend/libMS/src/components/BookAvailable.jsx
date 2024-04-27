import React from 'react';

export default function BookAvailable(){
    return(
        <>
        <div className='h-[100%] w-[100%] overflow-y-scroll'>
<div className='text-center h-[15%] py-2 bg-slate-300'>Book Availablity</div>
<form className='h-[85%] bg-slate-900 flex flex-col gap-5 '>
    <div className='flex h-[20%]  items-center justify-center mt-5'> <p className=' w-[20%]'>Enter Book Name</p><input className='border w-[40%] h-[70%]' type="text" /></div>
    <div className='flex h-[20%]  items-center justify-center mt-5'> <p className='w-[20%]'>Enter Auther Name</p><input className='border w-[40%] h-[70%]' type="text" /></div>
    <div className='flex justify-center'><button className='bg-[#6b6bc7] w-[10%] rounded-md shadow-md h-[40px]'>Search</button></div>
</form>
<div className='h-[30px] w-[100%] bg-black'>
    <table className='border w-[100%]'>
        <thead className='w-[100%]'>
        <tr className='[&_th]:border [&_th]:w-1/5' >
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Serial Name</th>
            <th>Available</th>
            <th>Select to issue Book</th>
        </tr>
        </thead>

        <tbody className='w-[100%]'>
            <tr className='[&_td]:border [&_td]:w-1/5' >
                <td>ff</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

        </tbody>
    </table>
</div>
        </div>

        
        </>
    );
} 