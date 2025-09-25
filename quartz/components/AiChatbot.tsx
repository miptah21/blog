import { useState } from "preact/hooks"
import { GoogleGenAI } from "@google/genai"

// Inisialisasi AI Client
const ai = new GoogleGenAI({
  apiKey: "AIzaSyB4va135SIy8Vm7H-PJ7VzYwC188KTN5m8", // ganti dengan API key Gemini kamu
})

export default function AiChatbot() {
  const [input, setInput] = useState<string>("")  // state untuk input
  const [output, setOutput] = useState<string>("") // state untuk AI response
  const [loading, setLoading] = useState<boolean>(false) // state loading

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    if (!input.trim()) return // tidak kirim jika kosong
    setLoading(true)
    setOutput("") // reset output sebelum request
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
        config: {
          thinkingConfig: { thinkingBudget: 0 },
        },
      })
      // Batasi panjang respons untuk mencegah crash
      setOutput((response.text ?? "").slice(0, 5000))
    } catch (err) {
      console.error(err)
      setOutput("Error generating AI response.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ margin: "1rem 0", fontFamily: "sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "0.5rem" }}>
        <input
          type="text"
          placeholder="Ask AI something..."
          value={input}
          onInput={(e) => setInput((e.target as HTMLInputElement)?.value || "")}
          style={{
            width: "70%",
            padding: "0.5rem",
            marginRight: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#284b63",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </form>

      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#fff8e1",
        }}
      >
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {output || "AI response will appear here..."}
        </pre>
      </div>
    </div>
  )
}
