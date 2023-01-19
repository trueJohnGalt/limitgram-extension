MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const observer = new MutationObserver(() => {

    chrome.storage.sync.get(["hideExploreTab", "hideReelsTab", "hideSearchTab", "hideNotificationsTab", "hideCreateTab", "hidePosts", "hideSuggestions"],
        function (result) {
            var hideExploreTab = result.hideExploreTab;
            var hideReelsTab = result.hideReelsTab;
            var hideSearchTab = result.hideSearchTab;
            var hideNotificationsTab = result.hideNotificationsTab;
            var hideCreateTab = result.hideCreateTab;
            var hidePosts = result.hidePosts;
            var hideSuggestions = result.hideSuggestions;

            if (hideExploreTab === true) {
                removeElementsWithText("Explore");
                if (window.location.href.match(/\/explore\//)) {
                    document.querySelector('main[role="main"]')?.remove();
                }
            }
            if (hideReelsTab === true) {
                removeElementsWithText("Reels");
            }
            if (hideSearchTab === true) {
                removeElementsWithText("Search");
            }
            if (hideNotificationsTab === true) {
                removeElementsWithText("Notifications");
            }
            if (hideCreateTab === true) {
                removeElementsWithText("Create");
            }
            if (hidePosts === true) {
                document.querySelectorAll('article').forEach(article => article?.remove());
            }
            if (hideSuggestions === true) {
                document.querySelector('div._aak6')?.remove();
            }
        });
});

function removeElementsWithText(str, tag = 'a') {
    return Array.prototype.slice.call(document.getElementsByTagName(tag))
        .filter(el => el.textContent.trim() === str.trim())
        .forEach(element => element?.remove());
}

observer.observe(document, {
    subtree: true,
    attributes: true,
});
