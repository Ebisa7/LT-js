  // Inject all CSS (except body) via JS
    (function() {
      const css = `

      body {
       font-family: 'Open Sans', sans-serif;
       
      }

*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.4);
  border-radius: 3px;
}
*::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.6);
}
.navbar {
  background-color: #23272f;
  padding: 15px 30px;
}
.quiz-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.question-card {
  background: #23272f;
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 200px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  border-left: 4px solid #f39c12;
}
.question-text {
  font-size: 1.15rem;
  margin-bottom: 1.2rem;
  color: #f5f6fa;
  font-weight: 600;
}
.choices {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.choice-card {
  padding: 15px;
  border: 2px solid #353b48;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  background: #23272f;
  color: #f5f6fa;
}
.choice-card:hover {
  background-color: #262b34;
}
.choice-card.selected {
  border-color: #f39c12;
  background-color: #2d313a;
}
.choice-card.correct {
  border-color: #28a745;
  background-color: #1e2b2269;
  color: #b6ffcb;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s, color 0.3s, border-color 0.3s;
  max-height: 200px;
  overflow: visible;
}
.choice-card.incorrect {
  border-color: #dc3545;
  background-color: #2a1e22;
  color: #ffb6c1;
  transform: scale(0.99);
  transform-style: preserve-3d;
  animation: shake 0.5s;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.shake {
  border-color: #dc3545;
  background-color: #2a1e22;
  color: #ffb6c1;
  transform: scale(0.99);
  transform-style: preserve-3d;
  animation: shake 0.5s;
}
.explanation {
  padding: 0;
  margin-top: 0;
  border-radius: 10px;
  font-size: 0.98rem;
  color: #bfc9d1;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s,
    padding 0.3s,
    margin-top 0.3s;
}
.explanation.visible {
  padding: 12px 16px;
  margin-top: 10px;
  max-height: fit-content;
  opacity: 1;
}
.explanation.correct {
  color: #b6ffcb;
}
.explanation.incorrect {
  color: #ffb6c1;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.chat-expander {
  background: #23272f;
  border-radius: 18px;
  margin: 0 auto 40px auto;
  max-width: 600px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  border-left: 4px solid #4e54c8;
  padding: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1);
  max-height: 0;
  opacity: 0;
  pointer-events: none;
}
.chat-expander.open {
  max-height: 600px;
  opacity: 1;
  pointer-events: auto;
  padding: 18px 20px 12px 20px;
  margin-top: -160px;
}
.chat-header {
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 10px;
  color: #bfc9d1;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.chat-messages {
  min-height: 40px;
  max-height: 220px;
  overflow-y: auto;
  margin-bottom: 10px;
  font-size: 1.01rem;
}
.chat-message {
  margin-bottom: 8px;
  padding: 7px 12px;
  border-radius: 12px;
  background: #23272f;
  color: #f5f6fa;
  width: fit-content;
  max-width: 90%;
  word-break: break-word;
}
.chat-message.user {
  background: #4e54c8;
  color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 0px;
  margin-left: auto;
  margin-right: 0;
}
.chat-message.ai {
  background: #23272f;
  color: #bfc9d1;
  margin-right: auto;
  margin-left: 0;
}
.chat-input-row {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}
.chat-input {
  flex: 1;
  border-radius: 10px;
  border: 1px solid #353b48;
  padding: 7px 12px;
  background: #23272f;
  color: #f5f6fa;
  outline: none;
  font-size: 1rem;
}
.chat-send-btn {
  border-radius: 10px;
  border: none;
  background: #4e54c8;
  color: #fff;
  padding: 7px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.chat-send-btn:disabled {
  background: #353b48;
  cursor: not-allowed;
}
.chat-close-btn {
  background: none;
  border: none;
  color: #bfc9d1;
  font-size: 1.2rem;
  margin-left: auto;
  cursor: pointer;
  transition: color 0.2s;
}
.chat-close-btn:hover {
  color: #f39c12;
}
.expander-row {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #bfc9d1;
  background: none;
  border: none;
  font-size: 1.02rem;
  font-weight: 500;
  margin: 1px 0 0 0;
  padding: 0;
  transition: color 0.2s;
  outline: none;
  user-select: none;
}
.expander-row:hover {
  color: #7032da;
}
.expander-icon {
  font-size: 1.2rem;
  transition: transform 0.3s;
}
.expander-row.open .expander-icon {
  transform: rotate(90deg);
}

.chat-container-inline {
  width: 100%;
  padding: 0;
  overflow: hidden;
  /* Remove display: none; */
  max-height: 0;
  opacity: 0;
  transition:
    max-height 0.5s cubic-bezier(0.4,0,0.2,1),
    opacity 0.3s cubic-bezier(0.4,0,0.2,1),
    box-shadow 0.2s;
}
.chat-container-inline.open {
  /* Remove display: block; */
  max-height: 600px;
  opacity: 1;
  animation: fadeIn 0.3s;
}

#expander-separator {
  display: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 12px 0;
}
      `;
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
    })();

    // Quiz markdown detection helper
    function isQuizMarkdownBlock(lines) {
      return lines.length > 0 && lines[0].trim().startsWith('#Q:');
    }

    // Parse custom markdown and render as quiz card, only replacing the markdown block
    function parseQuizMarkdown() {
      const p = document.getElementById('quiz-markdown');
      if (!p) return;

      // Split lines and find markdown block
      const lines = p.innerHTML.split('\n');
      let start = -1, end = -1;
      for (let i = 0; i < lines.length; ++i) {
        if (lines[i].trim().startsWith('#Q:')) start = i;
        if (start !== -1 && /^- [A-D]\*?:/.test(lines[i])) end = i;
      }
      if (start === -1 || end === -1) return; // No quiz block, do nothing

      // Find last quiz line (could be more than 4 choices)
      let lastQuizLine = end;
      for (let i = end + 1; i < lines.length; ++i) {
        if (/^- [A-D]\*?:/.test(lines[i])) lastQuizLine = i;
        else if (lines[i].trim() === '') continue;
        else break;
      }
      end = lastQuizLine;

      // Extract blocks
      const before = lines.slice(0, start).join('\n');
      const quizBlock = lines.slice(start, end + 1).join('\n');
      const after = lines.slice(end + 1).join('\n');

      // Parse quiz markdown
      const quizLines = quizBlock.split('\n').map(l => l.trim()).filter(Boolean);
      let question = '';
      const choices = [];
      let correctLetter = '';
      quizLines.forEach(line => {
        if (line.startsWith('#Q:')) {
          question = line.replace('#Q:', '').trim();
        } else if (line.startsWith('-')) {
          const match = line.match(/^- ([A-D])(\*?):\s*([^|]+)\|\s*(.+)$/);
          if (match) {
            const [, letter, star, answer, explanation] = match;
            if (star === '*') correctLetter = letter;
            choices.push({
              letter,
              answer: answer.trim(),
              explanation: explanation.trim(),
              correct: star === '*'
            });
          }
        }
      });

      // Build HTML for quiz card
      let cardHtml = `
  <div class="quiz-container" style="margin-bottom: 0;">
    <div class="question-card" style="margin-bottom: 32px;">
      <div class="question-text">${question}</div>
      <div class="choices">
  `;
      choices.forEach(c => {
        cardHtml += `
        <div class="choice-card" data-value="${c.letter}">
          ${c.letter}. ${c.answer}
          <div class="explanation" data-explain="${c.letter}">
            ${c.explanation}
          </div>
        </div>
    `;
      });
      cardHtml += `
    <hr id="expander-separator" style="border-color:#353b48;opacity:0.7;margin:24px 0 12px 0;display:none;">
    <button id="expander-row" class="expander-row" style="display:none;">
      <span class="expander-icon"><i class="fa-solid fa-angle-right"></i></span>
      &nbsp; Have a question? Ask LT AI
    </button>
    <div id="chat-container-inline" class="chat-container-inline">
      <div class="chat-header">
        <img src="lt-ai.png" alt="LT AI" style="height:1.8em;width:auto;vertical-align:middle;filter:brightness(1000%);margin-right:6px;">
        AI Chat
      </div>
      <div class="chat-messages" id="chat-messages"></div>
      <form id="chat-form" class="chat-input-row" autocomplete="off">
        <input type="text" id="chat-input" class="chat-input" placeholder="Type your question..." required />
        <button type="submit" class="chat-send-btn" id="chat-send-btn" style="border-radius:50px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;padding:0;">
          <i class="fas fa-arrow-up"></i>
        </button>
      </form>
    </div>
  </div>
  </div>
    </div>
  `;

      // Replace only the markdown block in the <p>
      let newHtml = '';
      if (before.trim()) newHtml += before + '\n';
      newHtml += cardHtml + '\n';
      // Remove leading margin from after-content
      if (after.trim()) newHtml += `<div style="margin-top:0.5em;">${after.trim().replace(/\n/g, '<br>')}</div>`;

      p.innerHTML = newHtml;

      // Store choices for later use
      window.__quizChoices = choices;
      window.__quizCorrectLetter = correctLetter;

      return correctLetter;
    }

    // After rendering, attach event listeners as before
    function attachQuizListeners(correctLetter) {
      const choices = window.__quizChoices || [];
      document.querySelectorAll('.choice-card').forEach(choice => {
        choice.addEventListener('click', () => {
          const questionCard = choice.closest('.question-card');
          const allChoices = questionCard.querySelectorAll('.choice-card');
          allChoices.forEach(c => {
            c.classList.remove('selected', 'correct', 'incorrect');
            const exp = c.querySelector('.explanation');
            exp.classList.remove('visible', 'correct', 'incorrect');
            // Reset explanation text to original
            const letter = c.getAttribute('data-value');
            const orig = choices.find(x => x.letter === letter);
            if (orig) exp.textContent = orig.explanation;
          });
          choice.classList.add('selected');
          const val = choice.getAttribute('data-value');
          const exp = choice.querySelector('.explanation');
          exp.classList.add('visible');
          const correctChoice = questionCard.querySelector('.choice-card[data-value="' + correctLetter + '"]');
          const correctExp = correctChoice.querySelector('.explanation');
          const correctObj = choices.find(x => x.letter === correctLetter);
          if (val === correctLetter) {
            choice.classList.add('correct');
            exp.classList.add('correct');
            correctExp.classList.add('visible', 'correct');
            correctChoice.classList.add('correct');
            if (correctObj) {
              correctExp.textContent = `Good job! ${correctObj.explanation}`;
            }
          } else {
            choice.classList.add('incorrect');
            exp.classList.add('incorrect');
            setTimeout(() => {
              correctExp.classList.add('visible', 'correct');
              correctChoice.classList.add('correct');
              if (correctObj) {
                correctExp.textContent = `The correct answer is ${correctObj.letter}. ${correctObj.answer}. ${correctObj.explanation}`;
              }
            }, 600);
          }
        });
      });
    }

    // --- Gemini 2.0 Flash Integration ---
    const GEMINI_API_KEY = "AIzaSyA_pN9LAbMQIidtXXVOl0RhBRP3sTiKEok";
    const SYSTEM_PROMPT = `
You are a quiz flashcard generator.
Generate a single, very random trivia question with 4 choices (A, B, C, D). Exactly one of the choices must be correct, and the other three must be incorrect. For each choice, provide a short explanation.
Format your response exactly as follows, using three colons (:::) as the separator between the choice and its explanation: 

### Question
What is the capital of France?
- A. London ::: London is the capital of the United Kingdom, not France.
- B. Paris :::  Paris is the capital of France.
- C. Berlin ::: Berlin is the capital of Germany, not France.
- D. Madrid ::: Madrid is the capital of Spain, not France.
**Answer: B**

Replace the question, choices, explanations, and answer with your own (make them very random), but always use this format and separator. Do not add anything else.
`;

    // --- AI Chat Expander Logic (real Gemini API) ---
    let CURRENT_QUIZ_CONTEXT = null;

    function openChatContainerInline() {
      const chatInline = document.getElementById('chat-container-inline');
      if (!chatInline) return;
      chatInline.classList.add('open');
      setTimeout(() => chatInline.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);

      const chatMessages = document.getElementById('chat-messages');
      if (!chatMessages.dataset.initialized) {
        chatMessages.innerHTML = '';
        chatMessages.dataset.initialized = "1";
      }
    }
    function closeChatContainerInline() {
      const chatInline = document.getElementById('chat-container-inline');
      if (!chatInline) return;
      chatInline.classList.remove('open');
      setTimeout(() => {
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages) {
          chatMessages.innerHTML = '';
          chatMessages.dataset.initialized = "";
        }
      }, 400);
    }

    function attachChatFormHandler() {
      const chatForm = document.getElementById('chat-form');
      if (!chatForm) return;
      // Add message count tracking
      if (typeof window.__chatMsgCount === "undefined") window.__chatMsgCount = 0;
      chatForm.onsubmit = async function(e) {
        e.preventDefault();
        // change Limit to 2 messages
        if (window.__chatMsgCount >= 2) {
          const chatMessages = document.getElementById('chat-messages');
          chatMessages.innerHTML += `<div class="chat-message ai" style="color:#ffb6c1;">You have reached the message limit. How about you try next time?</div>`;
          return;
        }
        window.__chatMsgCount++;
        const input = document.getElementById('chat-input');
        const msg = input.value.trim();
        if (!msg) return;
        input.value = '';
        input.disabled = true;
        document.getElementById('chat-send-btn').disabled = true;
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.innerHTML += `<div class="chat-message user">${msg}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Use global context, not visible to user
        const context = CURRENT_QUIZ_CONTEXT || {};
        const prompt = `
You are LT AI, an intelligent tutor within the LT Quiz app. Your purpose is to provide clear, concise, and helpful explanations related to the current quiz question and answers. Focus solely on explaining why the correct answer is correct, why the user's answer might be incorrect (if applicable), or clarifying aspects of the question itself. Do not provide information or assistance outside of the immediate quiz context.
      Important: Do NOT use double asterisks (**) for bold text. Instead, use the <strong> HTML tag for bolding.
Question: ${context.question || ''}
User's answer: ${context.userChoiceText || ''} (${context.userChoice || ''})
Correct answer: ${context.correctText || ''} (${context.correct || ''})

User asks: ${msg}
Provide a concise and helpful explanation. use <strong> to bold ur text instead of ** **.
`.trim();

        const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;
        const body = {
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }]
            }
          ]
        };
        try {
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          const data = await res.json();
          let aiMsg = "Sorry, I couldn't get a response.";
          if (data && data.candidates && data.candidates[0]) {
            if (data.candidates[0].content && data.candidates[0].content.parts) {
              aiMsg = data.candidates[0].content.parts.map(p => p.text).join('\n');
            } else if (data.candidates[0].content && data.candidates[0].content.text) {
              aiMsg = data.candidates[0].content.text;
            } else if (data.candidates[0].output) {
              aiMsg = data.candidates[0].output;
            }
          }
          chatMessages.innerHTML += `<div class="chat-message ai">${aiMsg}</div>`;
          chatMessages.scrollTop = chatMessages.scrollHeight;
        } catch (e) {
          chatMessages.innerHTML += `<div class="chat-message ai" style="color:#ffb6c1;">Error: Could not reach AI.</div>`;
        }
        input.disabled = false;
        document.getElementById('chat-send-btn').disabled = false;
        input.focus();
      };
    }

    // --- Expander row logic ---
    function setupExpanderRow() {
      const expanderRow = document.getElementById('expander-row');
      if (!expanderRow) return;
      expanderRow.onclick = function() {
        const chatInline = document.getElementById('chat-container-inline');
        const expanderSeparator = document.getElementById('expander-separator');
        if (expanderRow.classList.contains('open')) {
          expanderRow.classList.remove('open');
          closeChatContainerInline();
          if (expanderSeparator) expanderSeparator.style.display = 'block';
        } else {
          expanderRow.classList.add('open');
          openChatContainerInline();
          attachChatFormHandler();
        }
      };
    }

    // --- Show expander after answer selection ---
    function showExpanderAfterChoice(val, correct, choices, question) {
      const expanderRow = document.getElementById('expander-row');
      if (expanderRow) {
        expanderRow.style.display = 'flex';
        expanderRow.classList.remove('open'); // Do NOT expand by default
      }
      const expanderSeparator = document.getElementById('expander-separator');
      if (expanderSeparator) {
        expanderSeparator.style.display = 'block';
      }
      // Do NOT open chat automatically
      // openChatContainerInline(); // (removed)
      // attachChatFormHandler();   // (removed)
      CURRENT_QUIZ_CONTEXT = {
        question,
        correct,
        correctText: choices.find(x => x.letter === correct)?.answer || '',
        userChoice: val,
        userChoiceText: choices.find(x => x.letter === val)?.answer || ''
      };
      setupExpanderRow();
    }

    // Patch into quiz answer logic
    function attachQuizListeners(correctLetter) {
      const choices = window.__quizChoices || [];
      document.querySelectorAll('.choice-card').forEach(choice => {
        choice.addEventListener('click', () => {
          const questionCard = choice.closest('.question-card');
          const allChoices = questionCard.querySelectorAll('.choice-card');
          allChoices.forEach(c => {
            c.classList.remove('selected', 'correct', 'incorrect');
            const exp = c.querySelector('.explanation');
            exp.classList.remove('visible', 'correct', 'incorrect');
            // Reset explanation text to original
            const letter = c.getAttribute('data-value');
            const orig = choices.find(x => x.letter === letter);
            if (orig) exp.textContent = orig.explanation;
          });
          choice.classList.add('selected');
          const val = choice.getAttribute('data-value');
          const exp = choice.querySelector('.explanation');
          exp.classList.add('visible');
          const correctChoice = questionCard.querySelector('.choice-card[data-value="' + correctLetter + '"]');
          const correctExp = correctChoice.querySelector('.explanation');
          const correctObj = choices.find(x => x.letter === correctLetter);
          if (val === correctLetter) {
            choice.classList.add('correct');
            exp.classList.add('correct');
            correctExp.classList.add('visible', 'correct');
            correctChoice.classList.add('correct');
            if (correctObj) {
              correctExp.textContent = `Good job! ${correctObj.explanation}`;
            }
          } else {
            choice.classList.add('incorrect');
            exp.classList.add('incorrect');
            setTimeout(() => {
              correctExp.classList.add('visible', 'correct');
              correctChoice.classList.add('correct');
              if (correctObj) {
                correctExp.textContent = `The correct answer is ${correctObj.letter}. ${correctObj.answer}. ${correctObj.explanation}`;
              }
            }, 600);
          }
          // Show expander/chat after answer
          showExpanderAfterChoice(val, correctLetter, choices, document.querySelector('.question-text')?.textContent || '');
        });
      });
    }

    // Main
    const correctLetter = parseQuizMarkdown();
    if (correctLetter) attachQuizListeners(correctLetter);

    // Setup expander row on load (in case user wants to open before answering)
    setupExpanderRow();

    // Inject Font Awesome if not already present
(function() {
  if (!document.querySelector('link[href*="fontawesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
    fa.crossOrigin = 'anonymous';
    document.head.appendChild(fa);
  }
})();

