/* eslint-disable react/display-name */
import React, { memo } from 'react';
import Image from 'next/image';

export default memo(({ data }) => {

  const imageSource = '/images/FLOORPLAN.jpg';

  return (
    <>
      <div className='bg-white border-2 border-gray-600 text-xs rounded-sm p-2'>
        <Image
          src={data.imageSrc ?? imageSource}
          alt={data.label}
          width={1000}
          height={1000}
          className="rounded-sm mb-2"
        />
        <p className="font-bold">{data.label}</p>
        <p className="text-gray-500">Created at {data.createdAt}</p>
      </div>
    </>
  );
});