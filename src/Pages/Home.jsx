import { useNavigate } from 'react-router-dom';
import PostCard from '../Components/PostCard';
import { useEffect, useState } from 'react';
import { getToken } from '../Services/auth';
import { getAllPosts } from '../Services/post';
import { toast } from 'react-toastify';

const Home = () => {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await getAllPosts(getToken());
        setPosts(res.data);
      } catch (error) {
        toast.error(`Failed to load categories : ${error.message}`, {
          position: "bottom-right",
          autoClose: 3000
        });
      }
    }
    fetchAllPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-1 md:p-6">
      <h1 className="text-4xl font-bold mt-6 mb-6 md:mt-0 md:mb-6">Recent Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3">
        {
          posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))
        }
      </div>
    </div>
  )
}

export default Home;