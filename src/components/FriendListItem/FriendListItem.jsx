

// export default function FriendListItem ({ avatar, name, isOnline }) {
//   return (
//     <>
//       <img src={avatar} alt="avatar" />
//       <h3>{name}</h3>
//      <p> {isOnline? "Online":"Offline"}</p>
//     </>
//   );
// }



export default function FriendListItem ({item:{ avatar, name, isOnline }}) {
    return (
      <>
        <img src={avatar} alt="avatar" />
        <h3>{name}</h3>
       <p> {isOnline? "Online":"Offline"}</p>
      </>
    );
  }