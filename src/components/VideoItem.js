import React from 'react';

const VideoItem = ({ snippet, index, videoDetails,authorDetailsPage}) => {
    var d = new Date(snippet.publishedAt);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className="mt-4 mb-4 bg-white overflow-hidden border-b-4 border-blue-500"
            key={index}>
            <div onClick={e => videoDetails(index, e)}>
                <img src={snippet.thumbnails.high.url} alt="Thumbnail" className="w-full object-cover h-32 sm:h-48 md:h-64"></img>
            </div>
            <div className="p-4 md:p-6">
                <div onClick={e => authorDetailsPage(index, e)}>
                    <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">{snippet.channelTitle}</p>
                </div>
                <div onClick={e => videoDetails(index, e)}>
                    <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">{snippet.title}</h3>
                    <div className="text-sm flex items-center">
                        <svg className="opacity-75 mr-2" version="1.1" id="Capa_1" x="0px" y="0px" width="12" height="12" viewBox="0 0 97.16 97.16">
                            <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
                            <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
                        </svg>
                        <p className="leading-none">{d.getDay() + " " + months[d.getMonth()] + " " + d.getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem