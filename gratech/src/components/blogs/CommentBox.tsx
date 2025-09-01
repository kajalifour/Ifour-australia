import React from "react";

export default function CommentBox() {
  return (
    <div id="respond" className="comment-respond">
      <h3 id="reply-title" className="comment-reply-title">
        Leave a Comment
      </h3>
      <form
        id="commentform"
        className="comment-form"
        method="post"
        action="#"
      >
        <p className="comment-form-comment">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            cols={45}
            rows={8}
            maxLength={65525}
            required
            placeholder="Your comment here..."
          />
        </p>
        <p className="comment-form-author">
          <label htmlFor="author">
            Name <span className="required">*</span>
          </label>
          <input
            id="author"
            name="author"
            type="text"
            size={30}
            maxLength={245}
            required
            placeholder="Your name"
          />
        </p>
        <p className="comment-form-email">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            size={30}
            maxLength={100}
            aria-describedby="email-notes"
            required
            placeholder="your@email.com"
          />
        </p>
        <p className="comment-form-url">
          <label htmlFor="url">Website</label>
          <input
            id="url"
            name="url"
            type="url"
            size={30}
            maxLength={200}
            placeholder="https://yourwebsite.com"
          />
        </p>
        <p className="form-submit">
          <input
            name="submit"
            type="submit"
            id="submit"
            className="submit"
            defaultValue="Post Comment"
          />
        </p>
      </form>
    </div>
  );
}
