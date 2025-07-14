import { useState } from "react";

export  function TwitterFollowCard({username, name, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const addAt = (username) => `@${username}`;

  const imgSrc = `https://unavatar.io/${username}`;
  console.log(isFollowing);

  return (
  <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar' 
          src={imgSrc}
          alt={`Avatar ${name}`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{addAt(username)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}