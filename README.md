# CauseEffect

A simple web app for viewing contact details in a two-pane layout.

## Overview

This project shows a list of people in a summary pane and displays contact details in a detail pane when a name is selected.

## Files

- `index.html` - App shell and layout.
- `css/styles.css` - Styling for the app.
- `data/people.json` - Sample contact data.
- `js/data.js` - Data loading utilities.
- `js/ui.js` - UI rendering and interaction logic.
- `js/main.js` - App initialization.

## Usage

1. Open `index.html` in a browser.
2. Select a name from the contact list.
3. View the selected contact details in the detail pane.

## Notes

- The project uses native ES modules in the browser.
- No build step is required.
- Works best served from a local web server due to module import restrictions in some browsers.

## Run locally

If needed, start a simple local server from the project root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.
