document.addEventListener("mouseup", () => {
   
    const selectedText = window.getSelection()?.toString().trim();
      removePopup();
      setTimeout(() => {
        chrome.runtime.sendMessage({ action: "translate", text: selectedText }, (response) => {
          if (chrome.runtime.lastError) {
            console.log("Runtime error:", chrome.runtime.lastError);
            return;
          }
          if (response && response.translatedText) {
            showPopup(response.translatedText);
          }
        });
      }, 2000);  // Slight delay before sending the message
    
  });
  
  document.addEventListener("mousedown", () => {
    removePopup();
  });
  
  function getSelectedText() {
    try {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        return selection.toString();
      }
    } catch (error) {
      console.error("Error getting selection:", error);
    }
    return null;
  }
  
  function showPopup(text) {
    let popup = document.createElement("div");
    popup.className = "translate-popup";
    
    // let logo = document.createElement("img");
    // logo.src = chrome.runtime.getURL("hindi_logo.png");
    // logo.className = "popup-logo";
    
    let textElement = document.createElement("p");
    textElement.innerText = text;
    
    let footer = document.createElement("small");
    footer.innerText = "Developed by Saurabh Goyal";
    footer.className = "popup-footer";
    
    // popup.appendChild(logo);
    popup.appendChild(textElement);
    popup.appendChild(footer);
    
    document.body.appendChild(popup);
    positionPopup(popup);
  }
  
  function removePopup() {
    let popup = document.querySelector(".translate-popup");
    if (popup) {
      popup.remove();
    }
  }
  
  function positionPopup(popup) {
    try {
      let selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        let rect = range.getBoundingClientRect();
        popup.style.position = "absolute";
        popup.style.left = `${rect.left + window.scrollX}px`;
        popup.style.top = `${rect.top + window.scrollY - 30}px`;
      }
    } catch (error) {
      console.error("Error positioning popup:", error);
    }
  }
  