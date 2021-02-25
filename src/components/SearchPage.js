
import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import AuthorDetails from './AuthorDetails';
import VideoList from './VideoList';
import VideoPageDetails from './VideoPageDetails';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [videoList, setVideoList] = useState([]);
    const [state, setState] = useState('search')
    const [clickedItem, setClickedItem] = useState(-1)
    const [clickedAuthor, setClickedAuthor] = useState(-1)
    const [authorInfo, setAuthorInfo] = useState([]);

    const searchAPI = async () => {
        try {
            if (!(input === "")) {
                const response = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" + input + "&order=relevance&type=video&maxResults=50&key=AIzaSyAEBopW6Kq4BLZ-v4I9vDeBIkl-_5VIXaA");

                const responseData = await response.json();
                if(responseData.error){
                    setVideoList([])
                }
                else{
                    setVideoList(responseData.items);
                }
            }
            else {
                setVideoList([])
            }

        } catch (error) {
            setVideoList(error.items);
        }
    };

    const searchChannel = async () => {
        try {
            if(videoList.length && clickedItem != -1){
               let channelId = videoList[clickedItem].snippet.channelId;
               const response = await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&id=" + channelId + "&key=AIzaSyAEBopW6Kq4BLZ-v4I9vDeBIkl-_5VIXaA");

                const responseData = await response.json();
                setAuthorInfo(responseData.items);
            }
            else {
                setAuthorInfo([]);
            }

        } catch (error) {
            setAuthorInfo([]);
        }
    };

    const searchFunction = async (value, e) => {
        e.preventDefault();
        setInput(value);
    }

    const videoDetails = async (index, e) => {
        e.preventDefault();
        setState('details');
        setClickedItem(index);
    }

    const authorDetailsPage = async (index, e) => {
        e.preventDefault();
        setState('author');
        setClickedAuthor(index);
    }

    useEffect(() => {
        searchAPI();
    }, [input]);

    useEffect(() => {
        searchChannel();
    }, [clickedAuthor]);

    function goToHomePage(e) {
        e.preventDefault();
        setState('search');
        setClickedItem(-1);
        setAuthorInfo([]);
        setClickedAuthor(-1);
    }

    if (state === 'search') {
        return (
            <div className="font-sans m-8">
                <h1 className="text-xl font-bold">Video List</h1>
                <SearchBar searchFunction={searchFunction} />
                <div className="grid grid-cols-3 gap-2">
                    <VideoList videoList={videoList}
                        videoDetails={videoDetails}
                        authorDetailsPage={authorDetailsPage} />
                </div>

            </div>);
    }
    else if (state === 'author') {
        return (
            <div className="font-sans m-8">
                <h1 className="text-xl font-bold ml-4">Videos Details</h1>
                <AuthorDetails channelData={authorInfo[0]} />
                <button className="ml-4 py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform"
                    onClick={goToHomePage}>Back</button>
            </div>
        );
    }
    else {
        return (
            <div className="font-sans m-8">
                <h1 className="text-xl font-bold ml-4">Videos Details</h1>
                <VideoPageDetails videoData={videoList[clickedItem]} />
                <button className="ml-4 py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform"
                    onClick={goToHomePage}>Back</button>
            </div>
        );
    }
}

export default SearchPage;