import "./BlogPost.css"
import UserCard from "./UserCard"

export default function BlogPost({ title, author, content, date }) {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      {/* UserCard shows only name */}
      <UserCard name={author.name} email={author.email} role={author.role} />
      <p className="post-content">{content}</p>
      <p className="post-date">Published on: {date}</p>
    </div>
  )
}
