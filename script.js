const toggleButton = document.querySelector('.message-toggle');
const message = document.querySelector('#special-message');

if (toggleButton && message) {
  toggleButton.addEventListener('click', () => {
    const isHidden = message.hasAttribute('hidden');

    if (isHidden) {
      message.removeAttribute('hidden');
      toggleButton.setAttribute('aria-expanded', 'true');
      toggleButton.textContent = 'Hide your message';
      return;
    }

    message.setAttribute('hidden', '');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.textContent = 'Open your message';
  });
}