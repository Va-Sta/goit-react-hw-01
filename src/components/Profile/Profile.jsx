import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.avatar}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statName}>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statName}>Views</span>
          <span className={css.statValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statName}>Likes</span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
