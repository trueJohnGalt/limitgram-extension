// Restore prefs to update toggle state
// Once restored, listen for new changes and save prefs
function restorePrefs() {
  chrome.storage.sync.get("hideExploreTab", function (result) {
    var prefNav = document.getElementById("hideExploreTab");
    prefNav.checked = result.hideExploreTab;
    prefNav.addEventListener("change", function () {
      chrome.storage.sync.set({ hideExploreTab: this.checked });
    });
  });
  chrome.storage.sync.get("hideReelsTab", function (result) {
    var prefNav = document.getElementById("hideReelsTab");
    prefNav.checked = result.hideReelsTab;
    prefNav.addEventListener("change", function () {
      chrome.storage.sync.set({ hideReelsTab: this.checked });
    });
  });
  chrome.storage.sync.get("hideSearchTab", function (result) {
    var prefNav = document.getElementById("hideSearchTab");
    prefNav.checked = result.hideSearchTab;
    prefNav.addEventListener("change", function () {
      chrome.storage.sync.set({ hideSearchTab: this.checked });
    });
  });
  chrome.storage.sync.get("hideNotificationsTab", function (result) {
    var prefNav = document.getElementById("hideNotificationsTab");
    prefNav.checked = result.hideNotificationsTab;
    prefNav.addEventListener("change", function () {
      chrome.storage.sync.set({ hideNotificationsTab: this.checked });
    });
  });
  chrome.storage.sync.get("hideCreateTab", function (result) {
    var prefNav = document.getElementById("hideCreateTab");
    prefNav.checked = result.hideCreateTab;
    prefNav.addEventListener("change", function () {
      chrome.storage.sync.set({ hideCreateTab: this.checked });
    });
  });
  chrome.storage.sync.get("hidePosts", function (result) {
    var prefNav = document.getElementById("hidePosts");
    prefNav.checked = result.hidePosts;
    prefNav.addEventListener("change", function () {
      chrome.storage.sync.set({ hidePosts: this.checked });
    });
  });
  chrome.storage.sync.get("hideSuggestions", function (result) {
    var prefNav = document.getElementById("hideSuggestions");
    prefNav.checked = result.hideSuggestions;
    prefNav.addEventListener("change", function () {
      chrome.storage.sync.set({ hideSuggestions: this.checked });
    });
  });
}

document.addEventListener("DOMContentLoaded", restorePrefs);
