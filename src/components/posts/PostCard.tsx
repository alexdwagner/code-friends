import React from "react";
import { PostProps } from '../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const PostHeader: React.FC<{ authorId: number }> = ({ authorId }) => (
  <div className="profile-section flex items-center space-x-4">
    <div className="flex-shrink-0 relative overflow-hidden w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
      <img
        src={`https://robohash.org/${authorId}`}
        alt={`User ${authorId}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
    <div className="mb-4 px-4">
      <span className="name font-inter text-black text-sm md:text-base lg:text-lg font-semibold block">{`User ${authorId}`}</span>
      {/* Assuming you don't have descriptor and lastActive for now */}
    </div>
  </div>
);

const PostBody: React.FC<{ headline: string, body: string }> = ({ headline, body }) => (
  <>
    <h2 className="headline font-inter text-black text-xl md:text-2xl lg:text-3xl font-bold mb-2">{headline}</h2>
    <p className="body font-inter text-black text-base md:text-lg lg:text-xl font-light mb-4 w-full overflow-hidden -webkit-line-clamp-6">
      {body}
    </p>
  </>
);

const PostFooter: React.FC<{ likes: number, authorId: number }> = ({ likes, authorId }) => (
  <div className="post-footer flex items-center mt-6">
    <span className="likes items-center">
      <FontAwesomeIcon icon={faHeart} width="24" className="text-red-500 mr-2 md:text-xl lg:text-2xl" />
      <span className="font-inter text-black text-sm md:text-base lg:text-lg">{likes}</span>
    </span>
    <Link href={`/chat?user=${authorId}`} legacyBehavior>
      <a className="chat-btn ml-auto py-1 px-4 md:py-2 md:px-6 lg:py-3 lg:px-8 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded transition duration-300">
        Chat
      </a>
    </Link>
  </div>
);

const PostCard: React.FC<PostProps> = (props) => (
  <div className="post-card bg-white p-6 rounded shadow-md border border-gray-200 hover:shadow-lg transition duration-300 mb-4 rounded-box flex-col">
<PostHeader authorId={props.author.userId} />
    <PostBody headline={props.postHeadline} body={props.postBody} />
    <PostFooter likes={props.likes} authorId={props.author.userId} />
  </div>
);

export default PostCard;
