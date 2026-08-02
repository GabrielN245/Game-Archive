// Game list shown in the UI. Keep this in sync with the "gameKey" values
// used in functions/api/chat.js (that's where each game's real knowledge lives).
// Each game here was picked because it has real achievement/trophy data but is
// NOT already heavily covered by big wikis — that gap is the whole product.
const GAMES = [
  { key: "subnautica", label: "SUBNAUTICA", sub: "deep ocean survival" },
  { key: "ancestors", label: "ANCESTORS: THE HUMANKIND ODYSSEY", sub: "human evolution survival" },
  { key: "helldivers2", label: "HELLDIVERS 2", sub: "co-op shooter" },
  { key: "metro2033", label: "METRO 2033", sub: "post-apocalyptic FPS" },
  { key: "prisonarchitect", label: "PRISON ARCHITECT", sub: "prison management sim" },
  { key: "citiesskylines", label: "CITIES: SKYLINES", sub: "city-building sim" },
  { key: "deadspace", label: "DEAD SPACE (2008)", sub: "survival horror" },
  { key: "justcause3", label: "JUST CAUSE 3", sub: "open-world action" },
  { key: "hydroneer", label: "HYDRONEER", sub: "mining sandbox" },
  { key: "beyondtwosouls", label: "BEYOND: TWO SOULS", sub: "narrative adventure" },
  { key: "magicka", label: "MAGICKA", sub: "co-op spell-casting action" }
];

let activeGame = GAMES[0].key;
let searchTerm = "";
const chatHistory = {}; // { gameKey: [{role, content}, ...] }
GAMES.forEach(g => (chatHistory[g.key] = []));

const gameSelectEl = document.getElementById("gameSelect");
const gameSearchEl = document.getElementById("gameSearch");
const consoleLogEl = document.getElementById("consoleLog");
const introMsgEl = document.getElementById("introMsg");
const inputRowEl = document.getElementById("inputRow");
const userInputEl = document.getElementById("userInput");
const sendBtnEl = document.getElementById("sendBtn");

let loading = false;

function renderGameButtons() {
  gameSelectEl.innerHTML = "";
  const term = searchTerm.trim().toLowerCase();
  const visible = term
    ? GAMES.filter(g => g.label.toLowerCase().includes(term) || g.sub.toLowerCase().includes(term))
    : GAMES;

  if (visible.length === 0) {
    const empty = document.createElement("div");
    empty.className = "no-results";
    empty.textContent = `No games match "${searchTerm}" yet.`;
    gameSelectEl.appendChild(empty);
    return;
  }

  visible.forEach(g => {
    const btn = document.createElement("button");
    btn.className = "game-btn" + (g.key === activeGame ? " active" : "");
    btn.innerHTML = `${g.label}<span class="sub">${g.sub}</span>`;
    btn.addEventListener("click", () => {
      activeGame = g.key;
      renderGameButtons();
      renderMessages();
    });
    gameSelectEl.appendChild(btn);
  });
}

gameSearchEl.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderGameButtons();
});

function renderMessages() {
  const msgs = chatHistory[activeGame];
  consoleLogEl.innerHTML = "";

  if (msgs.length === 0) {
    const game = GAMES.find(g => g.key === activeGame);
    const intro = document.createElement("div");
    intro.className = "msg-sys";
    intro.textContent = `— Archive loaded for ${game.label}. Ask about a trophy, achievement, or how to unlock something. —`;
    consoleLogEl.appendChild(intro);
  }

  msgs.forEach(m => {
    const div = document.createElement("div");
    div.className = m.role === "user" ? "msg-user" : "msg-bot";
    const who = document.createElement("span");
    who.className = "who";
    who.textContent = m.role === "user" ? "YOU" : "ARCHIVE";
    div.appendChild(who);
    div.appendChild(document.createTextNode(m.content));
    consoleLogEl.appendChild(div);
  });

  if (loading) {
    const div = document.createElement("div");
    div.className = "msg-sys";
    div.textContent = "searching archive…";
    consoleLogEl.appendChild(div);
  }

  consoleLogEl.scrollTop = consoleLogEl.scrollHeight;
}

async function sendMessage(text) {
  chatHistory[activeGame].push({ role: "user", content: text });
  loading = true;
  renderMessages();
  sendBtnEl.disabled = true;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameKey: activeGame,
        messages: chatHistory[activeGame]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || ("Server responded with " + response.status));
    }

    chatHistory[activeGame].push({ role: "assistant", content: data.reply });
  } catch (err) {
    chatHistory[activeGame].push({
      role: "assistant",
      content: "Error: " + err.message
    });
  } finally {
    loading = false;
    sendBtnEl.disabled = false;
    renderMessages();
  }
}

inputRowEl.addEventListener("submit", e => {
  e.preventDefault();
  const text = userInputEl.value.trim();
  if (!text || loading) return;
  userInputEl.value = "";
  sendMessage(text);
});

renderGameButtons();
renderMessages();
