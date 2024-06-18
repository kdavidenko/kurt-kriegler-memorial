import { useEffect, useState } from 'react';
import Picture from './Picture';
import './Slideshow.css';

function Slideshow() {
  const [nextKey, setNextKey] = useState('left');
  const [mostRecent, setMostRecent] = useState(2); // 2 is the 'most recent image' so replace 0 with 4, then 1 with 5, etc
  const [currentList, setCurrentList] = useState({
    left:0,
    mid:1,
    right:2,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      updateList(); 
    }, 7500); 
  
    return () => {
      clearInterval(interval);
    };
  }, [nextKey])

  const totalPics = 53; // id of the last image

  const updateList = () => {
    const nextPic = mostRecent+1 > totalPics ? 0 : mostRecent+1;
    let newList = {...currentList};
    let newKey;
    if (nextKey === 'left') {
      newList.left = nextPic
      newKey = 'mid';
    } else if (nextKey === 'mid'){
      newList.mid = nextPic
      newKey = 'right';
    } else {
      newList.right = nextPic
      newKey = 'left';
    }

    console.log(newKey)
    setMostRecent(nextPic)
    setCurrentList({...newList})
    setNextKey(newKey);
  }

  return (
    <>
    <div className="Slideshow"> 
      <Picture url={currentList.left} cls="pic-left" />
      <Picture url={currentList.mid} cls="pic-mid" />
      <Picture url={currentList.right} cls="pic-right"/>
    </div>
    <audio loop controls autoPlay muted src="/kurt-kriegler-memorial/music/soundtrack.mp3">
      Your browser does not support the audio element.
    </audio>
    </>
  );
}

export default Slideshow;
