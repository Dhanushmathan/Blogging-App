import { useState } from 'react';
import defaultProfile from '../../assets/img/defaultProfile.png';
import { useCurrentUser } from '../../context/UserContext';
import { addComments, getToken } from '../../Services/post';
import { toast } from 'react-toastify';

const CommentForm = ({ post, refreshComments }) => {

    const { currentUser } = useCurrentUser();
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        try {
            await addComments(post.id, post.user.id, comment, getToken());
            setComment("");
            refreshComments();
        } catch (error) {
            toast.error(error.response?.data || "Comment failed", {
                position: 'bottom-right',
                autoClose: 3000,
            });
        }
    }

    return (
        <form className="fixed bg-white bottom-0 w-full max-w-md text-black border-t border-black/20 px-1.5 py-2 flex items-center gap-2" onSubmit={handleSubmit}>
            <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer'>
                <img src={currentUser.profileImageUrl ? currentUser.profileImageUrl : defaultProfile} alt="profile image" className='w-full h-full object-cover' />
            </div>
            <div className='border border-gray-700 w-[75%] p-2 rounded-full'>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="bg-transparent outline-none w-full px-2 text-base"
                    autoFocus
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
            </div>
            <button type='submit' className='bg-blue-600 p-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" aria-disabled width="1.5em" height="1.5em" className='text-white hover:cursor-pointer' viewBox="0 0 512 512"><path fill="currentColor" d="m476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8" /></svg>
            </button>
        </form>
    )
}

export default CommentForm;