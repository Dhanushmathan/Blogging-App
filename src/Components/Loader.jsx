import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full p-10">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  )
}

export default Loader;