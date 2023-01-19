chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    hideExploreTab: true,
    hideReelsTab: true,
    hideSearchTab: true,
    hideNotificationsTab: true,
    hideCreateTab: true,
    hidePosts: true,
    hideSuggestions: true
  });
});
