chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Background script received a message:", request); // Log incoming message
    if (request.action === "translate" && request.text.trim().length > 0) {
      fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=hi&dt=t&q=${encodeURIComponent(request.text)}`)
        .then(response => response.json())
        .then(data => {
          const translatedText = data[0]?.map(entry => entry[0]).join("") || "Translation Error";
          sendResponse({ translatedText });
        })
        .catch(error => sendResponse({ error: error.message }));
      return true; // Return true to indicate async response
    }
  });
  