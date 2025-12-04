import { useEffect, useState } from 'react';
import defaultProfile from '../assets/img/defaultProfile.png';
import { getToken, toggleLike } from '../Services/post';
import { toast, ToastContainer } from 'react-toastify';

const PostCard = ({ post, user, onUpdate }) => {
  const [show, setShow] = useState(false);
  const [likes, setLikes] = useState(post.likeCount);
  const [liked, setLiked] = useState(false);
  const [doubleLike, setDoubleLike] = useState(false);

  useEffect(() => {
    setLikes(post.likeCount);
    setLiked(post.likedUsers === true);
  }, [post.likeCount, post.likedUsers]);

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 }
    ];

    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }

    return 'just now';
  }

  const handleLike = async () => {
    try {
      const res = await toggleLike(user.id, post.id, getToken());
      const updatedLikeCount = res.data;

      setLikes(updatedLikeCount);
      setLiked(!liked);

      if (onUpdate) {
        onUpdate(post.id, updatedLikeCount, !liked);
      }
    } catch (error) {
      toast.error(`Liked error : ${error.response.data || error.message}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  const handleDoubleLike = async () => {
    try {
      const res = await toggleLike(user.id, post.id, getToken());
      const updatedLikeCount = res.data;

      setLikes(updatedLikeCount);

      if (!liked) {
        setDoubleLike(true);
        setTimeout(() => setDoubleLike(false), 600);
      }

      setLiked(!liked);

      if (onUpdate) {
        onUpdate(post.id, updatedLikeCount, !liked);
      }
    } catch (error) {
      toast.error(`Liked error : ${error.response.data || error.message}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center gap-3 p-3 border-b border-gray-800">
          <img
            loading='lazy'
            src={post.user?.profileImageUrl || defaultProfile}
            className="w-10 h-10 lg:w-16 lg:h-16 rounded-full object-cover border border-blue-500 p-0.5"
            alt="user"
          />

          <div className="">
            <p className="font-semibold text-base lg:text-lg">{post.user?.name}</p>
            <p className="text-gray-900 text-xs">
              {getTimeAgo(post.createdAt)}
            </p>
          </div>

          <div className="ml-auto text-xl cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2" /></svg>
          </div>
        </div>

        <div className="w-full overflow-hidden bg-black relative" onDoubleClick={handleDoubleLike}>
          <img
            src={post.imageUrl}
            alt="post"
            onClick={() => setShow(true)}
            className="w-full h-[350px] object-cover hover:scale-105 transition duration-300 cursor-pointer"
          />
          {doubleLike && (
            <div className="absolute inset-0 flex justify-center items-center animate-heart">
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" className='text-red-500'><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" /></svg>
            </div>
          )}
        </div>

        {show && (
          <div className="fixed inset-0 bg-black/50 bg-opacity-90 flex justify-center z-50"
            onClick={() => setShow(false)}>

            <button className="absolute top-5 text-black right-5 text-3xl font-bold bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
              onClick={() => setShow(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.4 17L7 15.6l3.6-3.6L7 8.425l1.4-1.4l3.6 3.6l3.575-3.6l1.4 1.4l-3.6 3.575l3.6 3.6l-1.4 1.4L12 13.4z" /></svg>
            </button>

            <img
              src={post.imageUrl}
              alt="Full view"
              className="max-w-full max-h-full object-contain p-2"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="p-4">
          <div className='flex justify-between'>
            <ul className="flex gap-4 mb-3">
              <li title='Like' onClick={handleLike} className='post-like'>
                {
                  liked ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='text-red-500 hover:cursor-pointer'><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" /></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer' width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8" /></svg>
                }
              </li>
              <li title='Comments'>
                <svg xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer' width="1.5em" height="1.5em" viewBox="0 0 640 640"><path fill="currentColor" d="M115.9 448.9C83.3 408.6 64 358.4 64 304C64 171.5 178.6 64 320 64s256 107.5 256 240s-114.6 240-256 240c-36.5 0-71.2-7.2-102.6-20L101 573.9c-3.7 1.6-7.5 2.1-11.5 2.1c-14.1 0-25.5-11.4-25.5-25.5c0-4.3 1.1-8.5 3.1-12.2zm37.3-30.2c12.2 15.1 14.1 36.1 4.8 53.2L140 505l58.5-25.1c11.8-5.1 25.2-5.2 37.1-.3c25.7 10.5 54.2 16.4 84.3 16.4c117.8 0 208-88.8 208-192S437.8 112 320 112s-208 88.8-208 192c0 42.8 15.1 82.4 41.2 114.7" /></svg>
              </li>
              <li title='Share'>
                <svg xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer' width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round"
                  strokeLinejoin="round" stroke='currentColor'><path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" /></svg>
              </li>
            </ul>
            <p title='Save'>
              <svg xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer' width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 5v12.554l-5-2.857l-5 2.857V5zm0-2H7a2 2 0 0 0-2 2v16l7-4l7 4V5a2 2 0 0 0-2-2" /></svg>
            </p>
          </div>

          <span>{likes} Likes</span>

          <p className="text-sm mb-2">
            <span className='font-semibold'>{post.user?.name + "_ "}</span>
            <span className='text-gray-900 font-normal'>
              {post.content.substring(0, 50)}...
            </span>
          </p>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default PostCard;