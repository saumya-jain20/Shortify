const clearAll = () => {
  // Clear the input field
  document.getElementById('long-url').value = '';

  // Clear the short URL and hide the container
  const shortUrlContainer = document.getElementById('short-url-container');
  const shortUrlLink = document.getElementById('short-url').querySelector('a');
  shortUrlLink.href = '';
  shortUrlLink.textContent = '';
  shortUrlContainer.style.display = 'none';
};

const shortenUrl = async () => {
  const longUrl = document.getElementById('long-url').value;
  const reqBody = {
    longUrl: longUrl
  };
  const response = await fetch(`https://longurlapi.onrender.com/api/url/shorten`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody)
  });
  const data = await response.json();
  const shortUrl = data.shortUrl;

  const shortUrlContainer = document.getElementById('short-url-container');
  const shortUrlLink = document.getElementById('short-url').querySelector('a');
  shortUrlLink.href = shortUrl;
  shortUrlLink.textContent = shortUrl;
  shortUrlContainer.style.display = 'block';

  const copyBtn = document.getElementById('copy-btn');
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      alert('Copied to clipboard!');
    });
  });
};

const shortenBtn = document.getElementById('shorten-btn');
shortenBtn.addEventListener('click', shortenUrl);

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearAll);
