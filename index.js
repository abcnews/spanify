exports.spanify = function spanify() {
  /*
   * Possibly limit it to certain paragraphs
   * Make it scan the hole page for now
   */
  // const myElement = document.querySelector('[name="classify"]');
  // const paragraph = myElement.nextElementSibling;

  const anchors = document.querySelectorAll("a");

  anchors.forEach(anchor => {
    if (anchor.innerHTML !== " ") return;

    const elementTitle = anchor.getAttribute("title");

    if (!elementTitle) return;

    if (elementTitle.slice(0, 3) === "end") {
      anchor.parentNode.removeChild(anchor);
      return;
    }

    const spanEl = document.createElement("span");
    spanEl.setAttribute("class", elementTitle);
    const spanTextEl = anchor.nextSibling;
    spanEl.innerHTML = spanTextEl.textContent.trim();

    anchor.parentNode.appendChild(spanEl);

    anchor.parentNode.replaceChild(spanEl, anchor);
    spanTextEl.parentNode.removeChild(spanTextEl);
  });
}