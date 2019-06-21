import React from "react";
import PropTypes from "prop-types";
import "./SlackMessage.css";

const MINUTE = 1000 * 60;

const SlackMessage = ({
  senderId = "",
  senderName = "",
  senderAvatarUrl = "",
  senderDate = Date.now(),
  children,
  reactions = [],
  replies = [],
  ...rest
}) => {
  const repliesCount = Math.floor(Math.random() * 10) + 7;
  const senderTime = new Date(senderDate - 130 * MINUTE).toTimeString().slice(0, 5);
  const lastReplyTime = new Date(senderDate - 116 * MINUTE).toTimeString().slice(0, 5);
  return (
    <div className="message" data-from={senderId} {...rest}>
      <img className="message__avatar message__avatar--big" src={senderAvatarUrl} alt="" />
      <div className="message__content">
        <div className="message__meta">
          <span className="message__author">{senderName}</span>
          <span className="message__timestamp">{senderTime}</span>
        </div>
        <div className="message__text">
          {children}
        </div>
        <div className="message__reactions">
          {reactions.map(({ emoji, count }, index) => (
            <input key={`reactions-item-${index}`} className="message__reaction" type="checkbox" data-before={emoji} data-after={count} data-after-checked={count+1} />
          ))}
        </div>
        {
          replies && replies.length > 0 &&
          <div className="message__replies">
            {replies.slice(0, replies.length - 1).map(({ name, avatarUrl }, index) => (
              <span key={`replies-item-${index}`} className="tooltip" data-tooltip={name}>
                <img className="message__reply message__avatar" src={avatarUrl} alt={name} />
              </span>
            ))}
            {
              repliesCount - replies.length > 0 &&
              <div className="message__reply">
                <img className="message__avatar" src={replies.slice(replies.length - 1)[0].avatarUrl} alt="" />
                <span className="message__replies--count">+{repliesCount - replies.length}</span>
              </div>
            }
            <div className="message__replies--meta">
              <span className="message__replies--total">{Math.max(repliesCount, replies.length)} replies</span>
              <span className="message__replies--last">Last reply today at {lastReplyTime}</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
}


SlackMessage.propTypes = {
  senderId: PropTypes.string,
  senderName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  senderAvatarUrl: PropTypes.string,
  reactions: PropTypes.arrayOf(PropTypes.shape({
    emoji: PropTypes.string,
    count: PropTypes.number
  })),
  replies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }))
};

SlackMessage.defaultProps = {
  labels: {
    senderId: "",
    senderName: "",
    senderAvatarUrl: "",
    reactions: [],
    replies: []
  }
};

export default SlackMessage;