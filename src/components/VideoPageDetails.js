import React from 'react';

const VideoPageDetails = ({ videoData }) => {
  console.log(videoData);
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="Thumbnail" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={videoData.snippet.thumbnails.high.url} />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">{videoData.snippet.channelTitle}</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{videoData.snippet.title}</h1>
            <p class="leading-relaxed">{videoData.snippet.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoPageDetails