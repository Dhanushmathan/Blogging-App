import { useEffect, useState } from 'react';
import { deleteComment, getCommentByPostId, getToken, updatedComment } from '../../Services/post';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import { toast } from 'react-toastify';

const CommentList = ({ close, post }) => {

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        try {
            const res = await getCommentByPostId(post.id, getToken());
            setComments(res.data);
        } catch (error) {
            toast.error(`"Fetch comments error : ${error.response.data || error.message}`, {
                position: 'bottom-right',
                autoClose: 3000,
            });
        }
    };
    useEffect(() => {
        fetchComments();
    }, []);

    const handleEdit = async (comment) => {
        const newText = prompt("Edit your comment", comment.content);
        if (!newText) return;

        try {
            await updatedComment(comment.id, comment.userId, { newText }, getToken());
            fetchComments();
            toast.success("Comment updated", {
                position: 'bottom-right',
                autoClose: 3000,
            });
        } catch (error) {
            toast.error("Update failed ❌", {
                position: 'bottom-right',
                autoClose: 3000,
            });
        }
    }

    const handleDelete = async (comment) => {
        try {
            await deleteComment(comment.id, getToken());
            fetchComments();
            toast.success("Comment Delete", {
                position: 'bottom-right',
                autoClose: 3000,
            });
        } catch (error) {
            toast.error("Delete failed ❌", {
                position: 'bottom-right',
                autoClose: 3000,
            });
        }
    }

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-end z-50">
            <div className="bg-white w-full max-w-md h-[85%] rounded-t-2xl animate-slideUp">
                {/* Top Bar */}
                <div className="pt-4 text-center border-b border-white/10 relative">
                    <h2 className="font-semibold">Comments</h2>
                    <hr className='text-black/20' />

                    <svg xmlns="http://www.w3.org/2000/svg" onClick={close} className="absolute right-4 top-4 cursor-pointer text-gray-900" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                </div>

                <p className='text-center text-xs text-gray-500 mt-1'>Total comments: {comments.length}</p>

                {/* Content */}
                <div className="px-4 pb-20 overflow-y-auto h-full">
                    {
                        comments.map((c) => (
                            <CommentItem key={c.id} comment={c} onEdit={handleEdit} onDelete={handleDelete} />
                        ))
                    }
                </div>
                <CommentForm post={post} refreshComments={fetchComments} />
            </div>
        </div>
    )
}

export default CommentList;