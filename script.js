// Contact form alert
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you for reaching out, " + document.getElementById('name').value + "!");
  e.target.reset();
});

// Chat widget logic
const chatWidget = document.getElementById("chatWidget");
const chatIcon = document.getElementById("chatIcon");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

chatIcon.addEventListener("click", () => {
  chatWidget.style.display = "flex";
  chatIcon.style.display = "none";
  chatInput.focus();
});

closeChat.addEventListener("click", () => {
  chatWidget.style.display = "none";
  chatIcon.style.display = "block";
});

function addMessage(text, sender = "user") {
  const msg = document.createElement("div");
  msg.textContent = text;
  msg.style.margin = "5px 0";
  msg.style.padding = "8px";
  msg.style.borderRadius = "6px";
  msg.style.maxWidth = "80%";
  msg.style.wordBreak = "break-word";
  msg.style.display = "inline-block";

  if (sender === "user") {
    msg.style.background = "#e6f0ff";
    msg.style.alignSelf = "flex-end";
    msg.style.textAlign = "right";
  } else {
    msg.style.background = "#f2f2f2";
    msg.style.alignSelf = "flex-start";
    msg.style.textAlign = "left";
  }

  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (text !== "") {
    addMessage(text, "user");
    chatInput.value = "";

    // Auto-reply demo
    setTimeout(() => {
      addMessage("Thanks for your message! I'll get back to you soon.", "bot");
    }, 600);
  }
});

chatInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendBtn.click();
});

// Video switcher logic
const btnEn = document.getElementById('btn-en');
const btnKr = document.getElementById('btn-kr');
const vEn = document.getElementById('video-en');
const vKr = document.getElementById('video-kr');

btnEn.addEventListener('click', () => {
  vEn.style.display = '';
  vKr.style.display = 'none';
  btnEn.classList.add('active');
  btnKr.classList.remove('active');
});

btnKr.addEventListener('click', () => {
  vEn.style.display = 'none';
  vKr.style.display = '';
  btnKr.classList.add('active');
  btnEn.classList.remove('active');
});
