MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const observer = new MutationObserver(() => {
  // remove "explore" tab
  document.querySelector('a[href="/explore/"]')?.parentNode?.remove();

  // remove "search", "likes", "upload" tabs
  document.querySelectorAll('a[href="#"]').forEach(tab => tab?.parentNode?.remove());

  // remove "reels" tab
  document.querySelector('a[href="/reels/videos/"]')?.parentNode?.remove();

  // remove "suggestions" section
  document.querySelector('div._aak6')?.remove();

    // remove posts
  document.querySelectorAll('article').forEach(article => article?.remove());

    // remove "caught up" section
  document.querySelector('div._ab6k')?.remove();

  // remove content if inside "explore" tab
  if (window.location.href.match(/\/explore\//)) {
    document.querySelector('main[role="main"]')?.remove();
  }

  if (window.location.href === "https://www.instagram.com/") {
    window.location.replace("https://www.instagram.com/direct/inbox/");
  }
});

observer.observe(document, {
  subtree: true,
  attributes: true,
});
