"use strict";

exports.spanify = function spanify() {
  // Get an array of all the anchor elements on the page
  var anchors = document.querySelectorAll("a");

  // Loop through all the anchors (we need to use an array hack for IE/Edge support)
  [].forEach.call(anchors, function(anchor) {
    // Leave normal links on the page alone
    if (anchor.innerHTML !== " ") return;
    // Leave #hashtag links alone
    if (!anchor.getAttribute("title")) return;

    // The anchor title will later become the span class
    var elementTitle = anchor.getAttribute("title");

    // If it is an "end" tag it will already have made the span
    if (elementTitle.slice(0, 3) === "end") {
      // So we don't need it any more...
      anchor.parentNode.removeChild(anchor);
      return;
    }

    // Compose our span element
    var spanEl = document.createElement("span");
    spanEl.setAttribute("class", elementTitle);
    // Store the text in between the two anchor tags
    var spanTextEl = anchor.nextSibling;
    spanEl.innerHTML = spanTextEl.textContent.trim();

    // To replace the anchor apparently the span needs to be appended
    anchor.parentNode.appendChild(spanEl);

    // Replace the first anchor tag
    anchor.parentNode.replaceChild(spanEl, anchor);
    // Remove the remaining in between text
    spanTextEl.parentNode.removeChild(spanTextEl);
  });
};
