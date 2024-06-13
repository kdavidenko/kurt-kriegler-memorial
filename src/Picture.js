import './Picture.css';

function Picture({url, cls}) {
  return (
    <div className="Picture">
      <img src={`/kurt-kriegler-memorial/img/${url}.jpg`} alt={`Kurt Kriegler ${url}`} className={cls}/>
    </div>

  );
}

export default Picture;
