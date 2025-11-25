import React from 'react'

const SinglePost = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <img
          src="https://picsum.photos/900/400"
          className="w-full h-72 object-cover rounded-xl mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">Sample Blog Post Title</h1>

        <p className="text-gray-600 text-sm mb-6">
          Posted on January 2025 • Author: <span className="font-semibold">Dhanush</span>
        </p>

        <p className="text-gray-800 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          Nulla quis sem at nibh elementum imperdiet...
        </p>

        <button className="mt-6 bg-red-500 px-5 py-2 text-white rounded-lg">
          Delete Post
        </button>
      </div>
    </div>
  )
}

export default SinglePost;