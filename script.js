const API_KEY = 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
async function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = "Thinking...";

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: userInput }],
        max_tokens: 1000
      })
    });

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "No reply.";
    responseDiv.innerHTML = reply;
  } catch (err) {
    responseDiv.innerHTML = "Error: " + err.message;
  }
}
