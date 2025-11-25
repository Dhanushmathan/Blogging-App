import React from 'react'

const PostCard = ({ title, desc, img }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={img} alt="" className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{desc}</p>

        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  )
}

export default PostCard;