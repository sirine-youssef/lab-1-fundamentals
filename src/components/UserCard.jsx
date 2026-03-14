import "./UserCard.css"

export default function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  )
}