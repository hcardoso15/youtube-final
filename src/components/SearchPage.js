
import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import VideoItem from './VideoItem';
import VideoList from './VideoList';
import VideoPageDetails from './VideoPageDetails';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [videoList, setVideoList] = useState([]);
    const [state, setState] = useState('search')
    const [clickedItem, setClickedItem] = useState(-1)

    const searchAPI = async () => {
        try {
            if (!(input === "")) {
                const response = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" + input + "&order=relevance&type=video&key=AIzaSyDXIonUanW36WrIwG04nbWPd6ACaIQl0P4");

                const responseData = await response.json();
                setVideoList(responseData.items);
            }
            else {
                setVideoList([])
            }

        } catch (error) {
            setVideoList(error.items);
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

    useEffect(() => {
        searchAPI();
    }, [input]);

    function goToHomePage(e) {
        e.preventDefault();
        setState('search');
        setClickedItem(-1);
    }

    if (state === 'search') {
        return (
            <div className="font-sans m-8">
                <h1 className="text-xl font-bold">Video List</h1>
                <SearchBar searchFunction={searchFunction} />
                <VideoList videoList={videoList}
                    videoDetails={videoDetails} />
            </div>);
    } else {
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