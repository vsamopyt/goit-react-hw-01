import clsx from 'clsx';
import css from './FriendListItem.module.css';

// export default function FriendListItem ({ avatar, name, isOnline }) {
//   return (
//     <>
//       <img src={avatar} alt="avatar" />
//       <h3>{name}</h3>
//      <p> {isOnline? "Online":"Offline"}</p>
//     </>
//   );
// }

export default function FriendListItem({ item: { avatar, name, isOnline } }) {
  return (
    <>
      <img
        className={clsx(css['friendListItem-img'])}
        src={avatar}
        alt="avatar"
      />
      <h3 className={clsx(css['friendListItem-title'])}>{name}</h3>

      <p
        className={clsx(css['friendListItem-text'], {
          [css['status-online']]: isOnline,
          [css['status-offline']]: !isOnline,
        })}
      >
        {' '}
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
}
