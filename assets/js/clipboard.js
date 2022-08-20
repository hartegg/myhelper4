const addCopyButtons = (clipboard) => {
  // 1. Look for pre > code elements in the DOM
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    // 2. Create a button that will trigger a copy operation
    const button = document.createElement("button");
    button.className = "clipboard-button";
    button.type = "button";
    button.innerHTML = svgCopy;
    button.addEventListener("click", () => {
      clipboard.writeText(codeBlock.innerText).then(
        () => {
          button.blur();
          button.innerHTML = svgCheck;
          setTimeout(() => (button.innerHTML = svgCopy), 2000);
        },
        (error) => (button.innerHTML = "Error")
      );
    });
    // 3. Append the button directly before the pre tag
    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre);
  });
};
