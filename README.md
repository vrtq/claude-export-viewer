# claude-export-viewer

A frontend-only viewer for your exported Claude.ai conversation data. Export your data from Claude, drag and drop or upload the `conversations.json`, and browse your conversations in a UI that feels familiar.

## Features

- Drag-and-drop loading of your Claude data export
- Full markdown rendering, including code blocks
- Search across your conversations
- Shows projects
- Shows attachment names (note: the export doesn't include actual attachment files, so those aren't viewable - just referenced)
- Clean, familiar UI - built to feel like the real thing

## Tech Stack

- React
- Vite

## Getting Started

Clone the repo,

```
git clone https://github.com/vrtq/claude-export-viewer.git
```
then:

```
cd claude-export-viewer
npm install
npm run dev
```

The app will be available locally. Open the link Vite gives you in the terminal.

## Usage

1. Export your data from Claude.ai
2. Once you get the export file, drag and drop (or upload) your `conversations.json` into the app
3. Browse and search your conversations

You can also drag and drop projects, user data, or memories and view them.
## Notes

This is entirely client-side. Your export file is never sent anywhere - it's parsed and rendered locally in your browser.
