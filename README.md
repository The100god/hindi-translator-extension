# Hindi Translator Popup

## Overview

**Hindi Translator Popup** is a Chrome extension that translates selected text into Hindi and displays it in a popup. It utilizes the Google Translate API for translations.

## Features

- Translates selected text into Hindi automatically.
- Displays the translated text in a popup near the selection.
- Uses Google Translate API for accurate translations.
- Lightweight and easy to use.

## Installation

### Load the Extension in Chrome

1. Download or clone this repository.
2. Open **Google Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the extension folder.
5. The extension is now loaded and ready to use.

## Usage

1. Select any text on a webpage.
2. A popup will appear with the Hindi translation.
3. Click anywhere outside to dismiss the popup.

## Files Structure

```
/hindi-translator-popup
│── manifest.json        # Extension metadata and permissions
│── background.js        # Handles translation API requests
│── content.js           # Detects selected text and displays popup
│── styles.css           # Styles for the translation popup
│── popup.html           # Web-accessible resources (if needed in future)
│── hindi_logo.png       # Logo displayed in the popup
│── README.md            # Documentation
```

## Permissions Used

- **activeTab**: Access the active webpage content.
- **scripting**: Inject scripts into the webpage.
- **host\_permissions**: Required for API calls to Google Translate.

## Troubleshooting

- If the popup does not appear, ensure that:
  - The extension is enabled in `chrome://extensions/`.
  - You have selected text before releasing the mouse button.
  - There are no conflicting extensions blocking content scripts.
- If translation fails, check console logs (`F12` -> Console) for error messages.

## Future Enhancements

- Support for additional languages.
- Option to display translations in a persistent sidebar.
- Custom styling options for the popup.

## License

This project is open-source and free to use.

## Developer

Developed by **Saurabh Goyal**.

Contact info: https\://saurabh-goyal.netlify.app/
GitHub: https://github.com/The100god/hindi-translator-extension
