import FriendListItem from '../FriendListItem/FriendListItem';
import clsx from "clsx";
import css from "./FriendList.module.css";

// ========

// export default function FriendList({ friends }) {
//   return (
//     <ul>
//       {friends.map(item => {
//         return (
//           <li key={item.id}>
//             <FriendListItem
//               avatar={item.avatar}
//               name={item.name}
//               isOnline={item.isOnline}
//             />
//           </li>
//         );

//       })}
//     </ul>
//   );
// }

export default function FriendList({ friends }) {
  return (
    <ul className ={clsx(css["friendList-list"])} >
      {friends.map(item => {
        return (
          <li className ={clsx(css["friendList-item"])} key={item.id} >
            <FriendListItem item= {item} />
          </li>
        );
      })}
    </ul>
  );
}
