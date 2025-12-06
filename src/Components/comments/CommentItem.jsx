

const CommentItem = ({ comment }) => {
    if (comment.length === 0) {
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
        <div className="flex gap-3 mt-1 p-2 bg-gray-100 rounded-md justify-between items-center">
            <div className="flex gap-3">
                <img
                    src={comment.profileImageUrl}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
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
        </div>
    );
}

export default CommentItem;