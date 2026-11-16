(function () {
  var endpoint = window.PORTFOLIO_CHAT_ENDPOINT;
  var panel = document.getElementById('chat-panel');
  var toggle = document.querySelector('.chat-toggle');
  var close = document.querySelector('.chat-close');
  var form = document.getElementById('chat-form');
  var input = document.getElementById('chat-input');
  var messages = document.getElementById('chat-messages');
  var status = document.getElementById('chat-status');
  var history = [];

  function addMessage(text, role) {
    var message = document.createElement('p');
    message.className = 'chat-msg ' + role;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }
  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) input.focus(); else toggle.focus();
  }
  toggle.addEventListener('click', function () { setOpen(panel.hidden); });
  close.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) setOpen(false);
  });
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    var question = input.value.trim();
    if (!question) {
      status.textContent = 'Type a question to get started.';
      input.focus();
      return;
    }
    if (!endpoint || endpoint.indexOf('YOUR-WORKER') !== -1) {
      status.textContent = 'The assistant endpoint has not been configured yet.';
      return;
    }
    addMessage(question, 'user');
    input.value = '';
    input.disabled = true;
    form.querySelector('button').disabled = true;
    status.textContent = 'Thinking…';
    try {
      var response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question, history: history.slice(-6) })
      });
      var data = await response.json();
      if (!response.ok) throw new Error(data.error || 'The assistant could not answer right now.');
      var answer = typeof data.answer === 'string' ? data.answer : '';
      if (!answer) throw new Error('The assistant returned an empty response.');
      addMessage(answer, 'bot');
      history.push({ role: 'user', text: question }, { role: 'model', text: answer });
      history = history.slice(-6);
      status.textContent = '';
    } catch (error) {
      status.textContent = error.message || 'Connection problem. Please try again.';
    } finally {
      input.disabled = false;
      form.querySelector('button').disabled = false;
      input.focus();
    }
  });
})();
