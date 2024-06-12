import FriendListItem from '../FriendListItem/FriendListItem';

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
    <ul>
      {friends.map(item => {
        return (
          <li key={item.id}>
            <FriendListItem item= {item} />
          </li>
        );
      })}
    </ul>
  );
}
