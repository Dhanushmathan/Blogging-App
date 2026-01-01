import { useNavigate } from 'react-router-dom';
import PostCard from '../Components/PostCard';
import { useEffect, useState } from 'react';
import { getToken } from '../Services/auth';
import { getAllPosts, isLiked } from '../Services/post';
import { toast } from 'react-toastify';
import { useCurrentUser } from '../context/UserContext';
import { getAllUsers } from '../Services/api';
import defaultProfile from '../assets/img/defaultProfile.png';

const Home = () => {
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    const fetchAllPosts = async () => {
      try {
        const res = await getAllPosts(getToken());
        const posts = res.data;

        const updatedPosts = await Promise.all(
          posts.map(async (post) => {
            const likeRes = await isLiked(post.id, currentUser.id, getToken());
            return {
              ...post, likedUsers: likeRes.data
            };
          })
        );

        setPosts(updatedPosts);
      } catch (error) {
        toast.error(`Failed to load categories : ${error.message}`, {
          position: "bottom-right",
          autoClose: 3000
        });
      }
    }
    fetchAllPosts();
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      const res = await getAllUsers(getToken());
      setAllUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostUpdate = (postId, newLikeCount, likedStatus) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, likeCount: newLikeCount, likedUsers: likedStatus }
          : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-1 md:p-6 md:flex md:justify-around">
      <div>
        <h1 className="text-4xl font-bold mt-6 mb-6 md:mt-0 md:mb-6">Recent Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3 overflow-hidden">
          {
            posts.map((p) => (
              <PostCard key={p.id} post={p} user={currentUser} onUpdate={handlePostUpdate} />
            ))
          }
        </div>
      </div>
      <div className='hidden xl:block'>
        <h1 className='text-4xl font-bold mt-6 mb-6 md:mt-0 md:mb-6'>Suggestion Followers</h1>
        <div className='bg-white text-black rounded-xl shadow-lg overflow-hidden p-3'>
          {
            allUser.map((u) => (
              <div key={u.id} className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded">
                <img
                  loading='lazy'
                  src={u.profileImageUrl || defaultProfile}
                  className="w-10 h-10 lg:w-16 lg:h-16 rounded-full object-cover border border-blue-500 p-0.5"
                  alt="user"
                />

                <div className="">
                  <p className="font-semibold text-base lg:text-lg hover:cursor-pointer">{u.name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;