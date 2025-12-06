import { useRef, useState } from "react";
import { useCurrentUser } from "../../context/UserContext";

const CommentItem = ({ comment, onEdit, onDelete }) => {

    const { currentUser } = useCurrentUser();

    const [showActions, setShowActions] = useState(false);
    const timerRef = useRef(null);

    const isOwner = currentUser?.id === comment?.userId;

    const handleTouchStart = () => {
        timerRef.current = setTimeout(() => {
            if (isOwner) setShowActions(true);
        }, 500);
    }

    const handleTouchEnd = () => {
        clearTimeout(timerRef.current);
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        if (isOwner) setShowActions(true);
    }

    if (!comment) {
        return <p className='text-lg text-center text-gray-500 mt-3'>No commnets yet</p>
    }

    const getTimeAgo = (dateString) => {
        const now = new Date();
        const postDate = new Date(dateString);
        const diffInSeconds = Math.floor((now - postDate) / 1000);

        const intervals = [
            { label: 'y', seconds: 31536000 },
            { label: 'm', seconds: 2592000 },
            { label: 'w', seconds: 604800 },
            { label: 'd', seconds: 86400 },
            { label: 'h', seconds: 3600 },
            { label: 'm', seconds: 60 },
            { label: 's', seconds: 1 },
        ];
        for (const interval of intervals) {
            const count = Math.floor(diffInSeconds / interval.seconds);
            if (count >= 1) {
                return `${count}${interval.label}${count > 1 ? '' : ''}`;
            }
        }
        return 'just now';
    }

    return (
        <div className="flex gap-3 mt-1 p-2 bg-gray-100 rounded-md justify-between items-center" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onContextMenu={handleRightClick}>
            <div className="flex gap-3">
                <img
                    src={comment.profileImageUrl}
                    alt="profile image"
                    className="w-10 h-10 rounded-full object-cover border border-blue-500 p-0.5"
                />
                <div>
                    <p className="font-semibold text-sm">
                        {comment.username}
                    </p>
                    <p className="text-sm text-gray-700">
                        {comment.content}
                    </p>
                </div>
            </div>
            <p className="text-xs text-gray-700">{getTimeAgo(comment.createdAt)}</p>
            {
                showActions && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-40 z-50">

                        <div className="bg-white w-[90%] max-w-sm rounded-2xl p-4 space-y-4">
                            <div
                                className="flex items-center gap-3 p-2 text-red-500 hover:bg-red-500/10 cursor-pointer"
                                onClick={() => {
                                    setShowActions(false);
                                    onDelete(comment);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zM9.41 6L12 8.59L14.59 6L16 7.41L13.41 10L16 12.59L14.59 14L12 11.41L9.41 14L8 12.59L10.59 10L8 7.41z" /></svg>
                                <p className="font-semibold text-base">Delete Comment</p>
                            </div>
                            <p className="border-t border-black/50"></p>
                            <div
                                className="flex items-center gap-3 text-center p-2 font-semibold cursor-pointer text-base hover:bg-gray-200"
                                onClick={() => { setShowActions(false); onEdit(comment) }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 22c-.55 0-1-.45-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm5.84-7.8l-1.01 1.01l-2.07-2.03l1.01-1.02c.2-.21.54-.22.78 0l1.29 1.25c.21.21.22.55 0 .79M8 11.91l4.17-4.19l2.07 2.08l-4.16 4.2H8z" /></svg>
                                <p>Edit Comment</p>
                            </div>
                        </div>

                        {/* Outside click close */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={() => setShowActions(false)}
                        ></div>

                    </div>
                )
            }
        </div>
    );
}

export default CommentItem;