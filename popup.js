document.getElementById('obsidian-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value.trim();
  const notes = document.getElementById('notes').value.trim().replace(/\n/g, '%0A');

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = encodeURIComponent(tab.url);
    const pageTitle = encodeURIComponent(tab.title);

    const obsidianUrl = `obsidian://new?vault=Obsidian&file=${title}&content=Title:%20[${pageTitle}](${url})%0A%0ANotes:%0A${notes}`;
    
    window.open(obsidianUrl, '_self');
  });
});