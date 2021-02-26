import React, { useEffect, useState } from 'react';
import CommentsList from './CommentsList';

async function getComments(videoId) {
  try {
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=' + videoId + '&key=AIzaSyAEBopW6Kq4BLZ-v4I9vDeBIkl-_5VIXaA');

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return null;
  }
};

const VideoPageDetails = ({ videoData }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(videoData.id.videoId).then((response) => {
      setComments(response.items);
    });
  }, []);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="Thumbnail" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={videoData.snippet.thumbnails.high.url} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{videoData.snippet.channelTitle}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{videoData.snippet.title}</h1>
            <p className="leading-relaxed">{videoData.snippet.description}</p>
          </div>
        </div>
      </div>
      <div id="task-comments" className="pt-4">
        <CommentsList comments={comments} />
      </div>
    </section>
  );
}

export default VideoPageDetails