# DeleteMySearches

Browser extension for instant privacy cleanup with one click.

## Features

### Current
- **One-Click Wipe**: Removes all browsing data instantly
  - Cookies
  - History
  - Local storage
  - Session storage
  - Cache
  - IndexedDB

### Planned
- **Private Browsing Mode**: Browse without traces, bypasses ISP monitoring without VPN
- Additional privacy protection layers

## Installation

```bash
# Clone repository
git clone https://github.com/yourusername/deletemysearches.git
cd deletemysearches

# Chrome/Edge
1. Open chrome://extensions/
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select project directory

# Firefox
1. Open about:debugging
2. Click "Load Temporary Add-on"
3. Select manifest.json
```

## Usage

Click the extension icon to wipe all browsing data immediately. No confirmation prompts.

## Permissions Required

- `browsingData`: Clear browsing history and data
- `cookies`: Remove cookies
- `storage`: Clear local storage
- `tabs`: Manage active sessions
- `<all_urls>`: Full site access for complete cleanup

## Technical Stack

- Vanilla JavaScript
- Browser Extension APIs (Manifest V3)
- No external dependencies

## Development

```bash
# Project structure
/manifest.json    # Extension configuration
/background.js    # Core cleanup logic
/popup.html       # UI interface
/icons/           # Extension icons
```

## Privacy Note

This extension operates locally. No data is transmitted externally. The planned private browsing feature will use DNS-over-HTTPS and encrypted SNI to prevent ISP tracking.

## License

[Your chosen license]

## Contributing

Pull requests welcome. Focus: performance, additional cleanup targets, privacy features.
