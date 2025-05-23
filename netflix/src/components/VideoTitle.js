import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

function VideoTitle({title, overView}) {
  return (
    <div className='w-vw absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/3 mt-4'>{overView}</p>
      <div className='flex mt-8'>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
            <CiPlay1 size="24px"/>
            <span className='ml-2'>Play</span>
        </button>
        <button className='flex items-center px-6 py-2 ml-4 bg-gray-500 bg-opacity-50 text-black rounded-md hover:bg-opacity-80'>
            <CiCircleInfo size="24px"/>
            <span className='ml-2'>Watch more</span>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
