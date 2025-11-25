import PostCard from '../Components/PostCard';

const Profile = () => {

  const myPosts = [
    {
      id: 1,
      title: "My Travel Blog",
      desc: "An amazing place I visited...",
      img: "https://picsum.photos/600/403"
    },
    {
      id: 2,
      title: "Tech Review",
      desc: "Latest mobile unboxing...",
      img: "https://picsum.photos/600/404"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="max-w-4xl mx-auto">

        {/* USER INFO CARD */}
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg mb-10 flex items-center gap-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-30 h-30 rounded-full"
          />

          <div>
            <h2 className="text-xl md:text-3xl font-bold">Dhanush Mathan</h2>
            <p className="text-gray-600 mt-1 text-base">Frontend + Java Full Stack Developer</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>

        {/* MY POSTS */}
        <h2 className="text-2xl font-bold mb-4">My Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myPosts.map((p) => (
            <PostCard key={p.id} title={p.title} desc={p.desc} img={p.img} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile;