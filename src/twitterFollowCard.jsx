import { useState } from "react";

export function TwitterFollowCard({children, userName, showSome}) {
  // const state = userState(false)
  // const isFollowing = state[0]
  // const setIsFollowing = state[1]
  const [isFollowing, setIsFollowing] = useState(false);

  const imagSrc = `https://unavatar.io/github/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handlerClick = () => {
    setIsFollowing(!isFollowing);
  };

  

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img src={imagSrc} alt="Profile" className="tw-followCard-avatar" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>@{userName}</span>
          <span>{showSome("Some")}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handlerClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
