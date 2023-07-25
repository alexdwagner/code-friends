import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

type PostProps = {
  profileImage: string;
  name: string;
  handle: string;
  descriptor: string;
  lastActive: number;
  headline: string;
  body: string;
  likes: number;
};

const PostHeader: React.FC<PostProps> = (props) => (
  <div className="profile-section flex flex-col sm:flex-row items-center mb-4">
    <Image
      src={props.profileImage}
      alt={props.name}
      className="profile-image w-24 h-24 rounded-full mb-2 sm:mb-0 sm:mr-4"
      width={100}
      height={100}
      layout="fixed"
    />
    <div>
      <span className="name font-bold text-xl">{props.name}</span>
      <span className="handle text-gray-500">@{props.handle}</span>
      <span className="descriptor block text-sm text-gray-600">{props.descriptor}</span>
      <span className="last-active text-gray-500">{props.lastActive} hours ago</span>
    </div>
  </div>
);

const PostBody: React.FC<PostProps> = (props) => (
  <>
    <h2 className="headline text-2xl mb-2">{props.headline}</h2>
    <p className="body text-gray-700 mb-4">{props.body}</p>
    <div className="bg-red-500">This should have a red background</div>
  </>
);

const PostFooter: React.FC<PostProps> = (props) => (
  <div className="post-footer flex justify-between">
    <span className="likes flex items-center">
      <FontAwesomeIcon icon={faHeart} width="24" height="24" className="text-red-500 mr-2" />
      {props.likes}
    </span>
    <button className="connect-btn bg-blue-500 text-white py-1 px-4 rounded">Connect</button>
  </div>
);

const PostCard: React.FC<PostProps> = (props) => (
  <div className="post-card bg-white p-4 rounded shadow-md">
    <PostHeader {...props} />
    <PostBody {...props} />
    <PostFooter {...props} />
  </div>
);

export default PostCard;
