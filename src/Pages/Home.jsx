import { useNavigate } from 'react-router-dom';
import PostCard from '../Components/PostCard';
import { useEffect } from 'react';
import { getToken } from '../Services/auth';

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, []);

  const posts = [
    {
      id: 1,
      title: "My First Blog",
      desc: "This is a sample blog post description...",
      img: "https://picsum.photos/600/400"
    },
    {
      id: 2,
      title: "React Learning Journey",
      desc: "Understanding components and hooks...",
      img: "https://picsum.photos/600/401"
    },
    {
      id: 3,
      title: "Spring Boot Tips",
      desc: "Backend development made easier...",
      img: "https://picsum.photos/600/402"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-10">
      <h1 className="text-4xl font-bold mb-6">Recent Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <PostCard key={p.id} title={p.title} desc={p.desc} img={p.img} />
        ))}
      </div>
    </div>
  )
}

export default Home;