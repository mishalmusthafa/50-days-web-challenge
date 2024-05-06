const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('text-area');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    selectRandom();
  }
  createTags(e.target.value);
});

// Create Tags
const createTags = (input) => {
  const tags = input.split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag !== '');

  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

// Select Random tag
const selectRandom = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}


