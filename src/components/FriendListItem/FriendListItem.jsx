import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendItem}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p className={css.onlineStatus}>Online</p>
      ) : (
        <p className={css.offlineStatus}>Offline</p>
      )}
    </div>
  );
}
