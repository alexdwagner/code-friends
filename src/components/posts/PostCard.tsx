import React from "react";
import '../../app/globals.css';
import Image from "next/image";
import Link from 'next/link';
import { PostProps, UserProps } from '../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUserFriends} from '@fortawesome/free-solid-svg-icons';

const PostHeader: React.FC<PostProps> = (props) => (
  <div className="profile-section flex items-center space-x-4">
    
    <div className="flex-shrink-0 relative overflow-hidden mb-8 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
      <div className="relative w-full h-full">
        <img 
          src={`https://robohash.org/${props.handle}`}
          alt={props.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Topic and User Info */}
    <div className="mb-4 px-4">
  <span className="name font-inter text-black text-sm md:text-base lg:text-lg font-semibold block">{props.topic}</span>
  <span className="handle font-inter text-black text-xs md:text-sm lg:text-base">@{props.handle}</span>
  <span className="descriptor text-black mx-1 text-xs md:text-sm lg:text-base">•</span>
  <span className="descriptor font-inter text-black text-xs md:text-sm lg:text-base">{props.descriptor}</span>
  <span className="descriptor text-black mx-1 text-xs md:text-sm lg:text-base">•</span>
  <span className="last-active font-inter text-black text-xs md:text-sm lg:text-base">{props.lastActive}h</span>
</div>


  </div>
);


const PostBody: React.FC<PostProps> = (props) => (
  <>
    <h2 className="headline font-inter text-black text-xl md:text-2xl lg:text-3xl font-bold mb-2">{props.headline}</h2>
    <p className="body font-inter text-black text-base md:text-lg lg:text-xl font-light mb-4 w-full overflow-hidden -webkit-line-clamp-6">
      {props.body}
    </p>
  </>
);

const PostFooter: React.FC<PostProps> = (props) => (
  <div className="post-footer flex items-center mt-6">
    <span className="likes items-center">
      <FontAwesomeIcon icon={faHeart} width="24" className="text-red-500 mr-2 md:text-xl lg:text-2xl" />
      <span className="font-inter text-black text-sm md:text-base lg:text-lg">{props.likes}</span>
    </span>
    <Link href={`/chat?user=${props.handle}`} legacyBehavior>
      <a className="chat-btn ml-auto py-1 px-4 md:py-2 md:px-6 lg:py-3 lg:px-8 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded transition duration-300">
        Chat
      </a>
    </Link>
  </div>
);

const PostCard: React.FC<PostProps> = (props) => (
<div className="post-card bg-white p-6 rounded shadow-md border border-gray-200 hover:shadow-lg transition duration-300 mb-4 rounded-box flex-col">
    <PostHeader {...props} />
    <PostBody {...props} />
    {/* <PostTags tags={props.tags} /> */}
    <PostFooter {...props} />
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


export default PostCard;
