# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Start the URL Manager
Runs the full-text search URL matcher demo:
```bash
npm start
```

**What it does:**
- Loads a set of URL rules with wildcards
- Matches test URLs against the rules using Elasticlunr full-text search
- Outputs the best matching rule for each URL
- Demonstrates how full-text search can be used for URL pattern matching

## File Structure

### Server Files (`server/`)
- `index.js` - Entry point that initializes the URL manager
- `core/urlManager.js` - Contains URL rules and test cases
- `models/UrlManager.js` - URL matching logic using Elasticlunr

## How It Works

### URL Matching Process

1. **Rule Definition**: URLs are defined with their corresponding names/tags
   ```javascript
   'www.facebook.com/connect.js': 'Facebook'
   'www.google-analytics.com/*': 'Google Analytics'
   ```

2. **Indexing**: All rules are indexed using Elasticlunr for fast full-text search

3. **Matching**: When a URL is queried, the search engine finds the best match based on:
   - Exact matches
   - Wildcard patterns
   - Text similarity

4. **Result**: Returns the name/tag of the matching rule

### Supported Patterns

- **Exact match**: `www.facebook.com/connect.js`
- **Wildcard match**: `www.google-analytics.com/*`
- **Path wildcards**: `www.linkedin.com/scripts/*/index.js`

## Example Output

When you run the application, it will process test URLs and show which rule matched:
```
URL: www.facebook.com/connect.js
Match: Facebook

URL: www.google-analytics.com/scripts/index_v1.js
Match: Google Analytics v1
```

## Customizing Rules

To add your own URL matching rules:

1. Open `server/core/urlManager.js`
2. Add your rules to the `setOfRules` object:
   ```javascript
   const setOfRules = {
       'your.domain.com/path': 'Your Service Name',
       'another.domain.com/*': 'Another Service'
   };
   ```
3. Add test cases to `urlsForTest`:
   ```javascript
   {
       url: 'your.domain.com/path',
       match: 'Your Service Name'
   }
   ```
4. Run the application to see the results

## Development

### Linting
```bash
npm run lint
```

## Technology Stack

- **Node.js** - JavaScript runtime
- **Elasticlunr.js** - Lightweight full-text search engine
- **ESLint** - Code quality and style checking

## Notes

- The search engine uses full-text indexing for fast lookups
- Wildcards (*) are supported in URL patterns
- The most relevant match is returned when multiple rules could apply
- This is a demonstration project showing practical use of Elasticlunr.js

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
