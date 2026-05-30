# Setup and Usage Instructions

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Available Commands](#available-commands)
4. [Running the Application](#running-the-application)
5. [Directory Structure](#directory-structure)
6. [Extending the Application](#extending-the-application)
7. [Documentation](#documentation)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)
10. [External Resources](#external-resources)

## Prerequisites

### System Requirements

- **Node.js**: Version 12 or higher
- **Package Manager**: npm (included with Node.js)
- **Memory**: 512MB RAM minimum
- **Disk Space**: 100MB for application and dependencies

### Knowledge Prerequisites

- Basic understanding of command line/terminal
- Familiarity with JavaScript and Node.js
- Basic understanding of URL patterns

## Initial Setup

### 1. Install Dependencies

Open your terminal and run:

```bash
npm install
```

**Verify installation:**

```bash
npm start
```

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Navigate to the project directory:
   ```bash
   cd full-text-search
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Available Commands

### Development Commands

**Linting:**

```bash
# Check code style and quality
npm run lint
```

### Running Scripts

**Start the URL Manager:**

```bash
# Start the demonstration
npm start
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

### Directory Structure

- `index.js` - Entry point that initializes the URL manager
- `src/core/urlManager.js` - Contains URL rules and test cases
- `src/models/UrlManager.js` - URL matching logic using Elasticlunr

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

### Extending the Application

To add your own URL matching rules:

1. Open `src/core/urlManager.js`
2. Add your rules to the `setOfRules` object:
   ```javascript
   const setOfRules = {
     'your.domain.com/path': 'Your Service Name',
     'another.domain.com/*': 'Another Service',
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

### Documentation

- **README.md**: Project overview, architecture, and high-level features.
- **INSTRUCTIONS.md**: Detailed setup, usage, and development guide.
- **CONTRIBUTING.md**: Guidelines for contributing to the project.

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

### Best Practices

- **Specificity**: Always define specific URL patterns before general wildcard patterns.
- **Validation**: Add a test case for every new rule you define to ensure correct matching.
- **Naming**: Use descriptive and consistent names for services to make results clear.
- **Wildcards**: Use the `*` wildcard at the end of URLs for directory-level matching.

## Troubleshooting

### Common Issues

#### Dependency Installation Fails

**Solution**: Ensure you have Node.js and npm installed. Try running `npm cache clean --force` and then `npm install`.

#### Matching Results Unexpected

**Solution**: Check the scoring in `UrlManager.js`. Ensure your rules in `urlManager.js` are correctly formatted.

## External Resources

- [Elasticlunr.js Documentation](http://elasticlunr.com/)
- [Node.js Official Website](https://nodejs.org/)
- [ESLint Documentation](https://eslint.org/)

## Version

**Version**: 1.0.0

## Last Updated

**Last Updated**: 2026-05-30

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
