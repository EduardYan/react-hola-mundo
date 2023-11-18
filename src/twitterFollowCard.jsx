export function TwitterFollowCard({ userName, name, isFollowing }) {
  const imagSrc = `https://2.gravatar.com/avatar/8282e6611626c238cf79371f9066c39fa307b2a0406de67c718c3fbb7bd3c19f`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img src={imagSrc} alt="Profile" className="tw-followCard-avatar" />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span>@ {userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
