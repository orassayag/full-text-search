# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/full-text-search/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Error messages (if applicable)
   - Your environment details (OS, Node version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **JavaScript** (ES6+)
- **ESLint** for code quality

Before submitting:
```bash
# Install dependencies
npm install

# Check for linting errors
npm run lint

# Test the application
npm start
```

### Coding Standards

1. **Clear naming**: Use descriptive names for variables and functions
2. **Error handling**: Add proper error handling where needed
3. **Comments**: Add comments for complex logic or non-obvious implementations
4. **Modularity**: Keep classes and functions focused and modular
5. **Testing**: Test your changes with various URL patterns

### Adding New Features

When adding new features:
1. Create appropriate models in `server/models/`
2. Add business logic in `server/core/`
3. Update documentation as needed
4. Test thoroughly with different URL patterns

### Testing New URL Rules

When adding or modifying URL matching rules:
1. Add test cases to `server/core/urlManager.js`
2. Ensure the rules are specific enough to avoid false matches
3. Test wildcard patterns thoroughly
4. Verify that the most specific rule wins when multiple rules match

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
