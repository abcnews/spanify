"use strict";

exports.spanify = function spanify() {
  // Get an array of all the anchor elements on the page
  var anchors = document.querySelectorAll("a");

  // Loop through all the anchors
  anchors.forEach(function(anchor) {
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

  // Production steps of ECMA-262, Edition 5, 15.4.4.18
  // Reference: http://es5.github.io/#x15.4.4.18
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback /*, thisArg*/) {
      var T, k;

      if (this == null) {
        throw new TypeError("this is null or not defined");
      }

      // 1. Let O be the result of calling toObject() passing the
      // |this| value as the argument.
      var O = Object(this);

      // 2. Let lenValue be the result of calling the Get() internal
      // method of O with the argument "length".
      // 3. Let len be toUint32(lenValue).
      var len = O.length >>> 0;

      // 4. If isCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }

      // 5. If thisArg was supplied, let T be thisArg; else let
      // T be undefined.
      if (arguments.length > 1) {
        T = arguments[1];
      }

      // 6. Let k be 0.
      k = 0;

      // 7. Repeat while k < len.
      while (k < len) {
        var kValue;

        // a. Let Pk be ToString(k).
        //    This is implicit for LHS operands of the in operator.
        // b. Let kPresent be the result of calling the HasProperty
        //    internal method of O with argument Pk.
        //    This step can be combined with c.
        // c. If kPresent is true, then
        if (k in O) {
          // i. Let kValue be the result of calling the Get internal
          // method of O with argument Pk.
          kValue = O[k];

          // ii. Call the Call internal method of callback with T as
          // the this value and argument list containing kValue, k, and O.
          callback.call(T, kValue, k, O);
        }
        // d. Increase k by 1.
        k++;
      }
      // 8. return undefined.
    };
  }
};
