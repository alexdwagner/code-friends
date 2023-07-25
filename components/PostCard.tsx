import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export type PostProps = {
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
  <div className="profile-section flex flex-col sm:flex-row items-center mb-6">
    <Image
      src={props.profileImage}
      alt={props.name}
      className="profile-image w-24 h-24 rounded-full mb-2 sm:mb-0 sm:mr-4"
      width={100}
      height={100} />
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
    <h2 className="headline font-semibold text-2xl mb-4">{props.headline}</h2>
    <p className="body text-gray-700 mb-6">{props.body}</p>
  </>
);

const PostFooter: React.FC<PostProps> = (props) => (
  <div className="post-footer flex justify-between items-center mt-6">
    <span className="likes flex items-center">
      <FontAwesomeIcon icon={faHeart} width="24" height="24" className="text-red-500 mr-2" />
      {props.likes}
    </span>
    <button className="connect-btn bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-2 px-5 rounded transition duration-300">Connect</button>
  </div>
);

const PostCard: React.FC<PostProps> = (props) => (
  <div className="post-card bg-white p-6 rounded shadow-md border border-gray-200 hover:shadow-lg transition duration-300 mb-4">
    <PostHeader {...props} />
    <PostBody {...props} />
    <PostFooter {...props} />
  </div>
);

export default PostCard;
