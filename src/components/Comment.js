import React from 'react';

const Comment = ({ commentData,authorName,authorImageURL}) => {
    return (
        <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
            <div className="flex flex-row justify-center mr-2">
                <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src={authorImageURL} />
                <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{authorName}</h3>
            </div>
            <p className="text-gray-600 text-lg text-center md:text-left ">{commentData}</p>
        </div>
    );
}

export default Comment