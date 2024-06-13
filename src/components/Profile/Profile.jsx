import clsx from "clsx";
import css from "./Profile.module.css"
console.log(css);

export default function Profile ({name,tag,location,image, stats: {followers, views, likes}}) {
    return (<div className ={clsx(css["profile-card"])}>
    <div >
      <img className ={clsx(css["profile-img"])}
        src={image}
        alt="User avatar"
      />
      <p className ={clsx(css["profile-name"])}>{name}</p>
      <p className ={clsx(css["profile-tag"])}>{tag}</p>
      <p className ={clsx(css["profile-location"])}>{location}</p>
    </div>
  
    <ul className ={clsx(css["profile-list"])}>
      <li className ={clsx(css["profile-list-item"])}>
        <span className ={clsx(css["profile-item-name"])}>Followers</span>
        <span className ={clsx(css["profile-item-value"])}>{followers}</span>
      </li>
      <li className ={clsx(css["profile-list-item"])}>
        <span className ={clsx(css["profile-item-name"])}>Views</span>
        <span className ={clsx(css["profile-item-value"])}>{views}</span>
      </li>
      <li className ={clsx(css["profile-list-item"])}>
        <span className ={clsx(css["profile-item-name"])}>Likes</span>
        <span className ={clsx(css["profile-item-value"])}>{likes}</span>
      </li>
    </ul>
  </div>)
}

