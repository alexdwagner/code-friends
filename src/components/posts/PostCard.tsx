import React from "react";
import '../../app/globals.css';
import Image from "next/image";
import Link from 'next/link';
import { PostProps, UserProps } from '../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUserFriends} from '@fortawesome/free-solid-svg-icons';

const PostHeader: React.FC<PostProps> = (props) => (
  <div className="profile-section flex items-center space-x-4">
    
    <div style={{ width: '30px', height: '30px' }} className="flex-shrink-0 relative overflow-hidden mb-8">
  <div style={{ width: '30px', height: '30px' }} className="relative">
    <img 
      src={`https://robohash.org/${props.handle}`}
      alt={props.name}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
</div>

    {/* Topic and User Info */}
    <div className="mb-4 px-4">
    <span className="name font-inter text-black text-sm font-semibold block">{props.topic}</span>
  <span className="handle font-inter text-black" style={{fontSize: '10px'}}>@{props.handle}</span>
  <span className="descriptor text-black mx-1" style={{fontSize: '10px'}}>•</span>
  <span className="descriptor font-inter text-black" style={{fontSize: '10px'}}>{props.descriptor}</span>
  <span className="descriptor text-black mx-1" style={{fontSize: '10px'}}>•</span>
  <span className="last-active font-inter text-black" style={{fontSize: '10px'}}>{props.lastActive}h</span>


    </div>

    {/* Friend Icon with Notification Bubble */}
    {/* <div className="relative w-5.5 h-5.5">
  <FontAwesomeIcon icon={faUserFriends} className="text-gray-500 w-full h-full" />
  <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</div>
</div> */}

  </div>
);

const PostBody: React.FC<PostProps> = (props) => (
  <>
<h2 className="headline font-inter text-black text-xl font-bold mb-4">{props.headline}</h2>
<p className="body font-inter text-black text-base font-light mb-4 w-full overflow-hidden -webkit-line-clamp-6">
  {props.body}
</p>

  </>
);

const PostFooter: React.FC<PostProps> = (props) => (
  <div className="post-footer flex items-center">
    <span className="likes items-center">
      <FontAwesomeIcon icon={faHeart} width="24" height="24" className="text-red-500 mr-2" />
      {props.likes}
    </span>
    <Link href={`/chat?user=${props.handle}`} legacyBehavior>
  <a className="chat-btn ml-auto py-1 px-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded transition duration-300">
    Chat
  </a>
</Link>
  </div>
);


// const PostTags: React.FC<{ tags: string[] }> = ({ tags }) => (
//   <div className="tags mt-2">
//     {tags.map((tag, index) => (
//       <span key={index} className="tag bg-blue-500 text-white px-2 py-1 rounded mr-2">
//         {tag}
//       </span>
//     ))}
//   </div>
// );

const PostCard: React.FC<PostProps> = (props) => (
<div className="post-card bg-white p-6 rounded h-60 shadow-md border border-gray-200 hover:shadow-lg transition duration-300 mb-4 rounded-box flex-col">
    <PostHeader {...props} />
    <PostBody {...props} />
    {/* <PostTags tags={props.tags} /> */}
    <PostFooter {...props} />
  </div>
);



export default PostCard;
