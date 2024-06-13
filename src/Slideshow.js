import { useEffect, useState } from 'react';
import Picture from './Picture';
import './Slideshow.css';

function Slideshow() {
  const [nextKey, setNextKey] = useState('left');
  const [mostRecent, setMostRecent] = useState(1); // 3 is the 'most recent image' so replace 0 with 4, then 1 with 5, etc
  const [currentList, setCurrentList] = useState({
    left:0,
    right:1,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      updateList(); 
    }, 7500); 
  
    return () => {
      clearInterval(interval);
    };
  }, [nextKey])

  const totalPics = 38; // id of the last image
  const listOfComponents = [
     <Picture url={currentList.ul} cls="pic-left" />,
     <Picture url={currentList.ll} cls="pic-right"/>,
  ]
  const updateList = () => {
    const nextPic = mostRecent+1 > totalPics ? 0 : mostRecent+1;
    let newList = {...currentList};
    let newKey;
    if (nextKey === 'left') {
      newList.left = nextPic
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
      <Picture url={currentList.right} cls="pic-right"/>
    </div>
    <audio loop controls autoPlay muted src="./music/soundtrack.mp3">
      Your browser does not support the audio element.
    </audio>
    </>
  );
}

export default Slideshow;
