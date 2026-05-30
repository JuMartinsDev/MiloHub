import { useState } from "react";
import axios from "axios";

export default function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // mensagem do usuário
    const userMsg = { type: "user", text: message };
    setChat((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post("http://localhost:3000/hub/message", {
        message,
        channel: "web",
      });

      const botMsg = {
        type: "bot",
        text: res.data.response || "Sem resposta do HUB",
      };

      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      // 👇 AQUI VOCÊ VÊ O ERRO REAL
      console.log("❌ ERRO HUB:", err.response?.data || err.message);

      const errorMsg = {
        type: "bot",
        text:
          err.response?.data?.erro ||
          err.message ||
          "Erro no HUB",
      };

      setChat((prev) => [...prev, errorMsg]);
    }

    setMessage("");
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto", fontFamily: "Arial" }}>
      <h2>💬 Milo Hub</h2>

      {/* CHAT */}
      <div
        style={{
          border: "1px solid #ccc",
          height: 400,
          overflowY: "auto",
          padding: 10,
          borderRadius: 8,
        }}
      >
        {chat.map((c, i) => (
          <div
            key={i}
            style={{
              textAlign: c.type === "user" ? "right" : "left",
              margin: "10px 0",
            }}
          >
            <span
              style={{
                padding: "8px 12px",
                borderRadius: 10,
                background: c.type === "user" ? "#DCF8C6" : "#eee",
                display: "inline-block",
                maxWidth: "80%",
                wordBreak: "break-word",
              }}
            >
              {c.text}
            </span>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
          placeholder="Digite sua mensagem..."
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px 15px",
            borderRadius: 6,
            background: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}