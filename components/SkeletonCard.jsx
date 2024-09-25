import React from 'react';

export const SkeletonLoader = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 border-2 border-gray-300 animate-pulse">
      {/* Skeleton for Image */}
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
      
      {/* Skeleton for Title */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      
      {/* Skeleton for Description */}
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
      
      {/* Skeleton for Button */}
      <div className="h-10 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
