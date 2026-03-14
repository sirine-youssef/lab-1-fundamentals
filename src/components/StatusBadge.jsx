// src/components/StatusBadge.jsx

export default function StatusBadge() {

  // Hardcoded boolean (badelha true/false bach test)
  const isOnline = true

  return (
    <div style={{
      padding: "15px",
      margin: "10px",
      borderRadius: "8px",
      textAlign: "center",
      backgroundColor: "#f5f5f5"
    }}>

      <h2>
        {isOnline ? "🟢 Online" : "🔴 Offline"}
      </h2>

      <p style={{
        color: isOnline ? "green" : "red",
        fontWeight: "bold"
      }}>
        User is currently {isOnline ? "online" : "offline"}
      </p>

    </div>
  )
}
