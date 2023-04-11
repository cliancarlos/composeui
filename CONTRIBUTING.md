# Contributing to ComposeUI

We appreciate your interest in contributing to ComposeUI! This document provides guidelines and best practices for contributing to the project. Please read and follow these instructions before submitting any contributions.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Setting up the Project](#setting-up-the-project)
- [Development](#development)
- [Bugs and Issues](#bugs-and-issues)
- [Proposing Changes](#proposing-changes)
- [Branching and Committing](#branching-and-committing)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Tests](#tests)
- [Documentation](#documentation)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure that your interactions with the community are respectful, inclusive, and adhere to the code of conduct.

## Setting up the Project

To set up the project for contributions, follow these steps:

1. Fork the main ComposeUI repository.
2. Clone your fork locally: `git clone https://github.com/<your_github_username>/project.git`
3. Enter the project directory: `cd project`
4. Install dependencies: `npm install` or `yarn install`

## Development

Here are some common commands to help you with development:

- `npm run dev` or `yarn dev`: starts the development server
- `npm run build` or `yarn build`: builds the project for production
- `npm run test` or `yarn test`: runs tests

## Bugs and Issues

Before reporting a bug, please check the existing issues to see if your problem has already been reported. If not, create a new issue with a clear description and steps to reproduce the problem. Providing a minimal code example (e.g., using CodeSandbox) can be very helpful.

## Proposing Changes

If you'd like to propose a change to the API or any non-trivial changes to the implementation, please open an issue first. This allows us to discuss your proposal and reach an agreement before you put significant effort into it.

## Branching and Committing

1. Create a new branch for your feature or bug fix: `git checkout -b <branch_name>`
2. Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification when writing your commit messages. This helps maintain a clear and readable Git history. Some examples of Conventional Commit messages are:
   - `feat`: add new feature
   - `fix`: correct a bug
   - `docs`: update documentation
   - `test`: add new tests
   - `refactor`: improve code structure
   - `ci`: All changes related to continuous integration configuration (e.g., GitHub Actions, CI system)
   - `chore`: All changes in the repository that don't fit into any of the categories above
3. Commit your changes: `git commit -m "<commit_message>"`
4. Push your changes to your remote fork: `git push origin <branch_name>`
5. Open a pull request from your fork's branch to the original repo's main branch.

## Submitting a Pull Request

When submitting a pull request, please ensure that your code follows the style guide and passes all tests. The core team will review your pull request and provide feedback, request changes, or merge it. Please be patient during the review process, as it may take some time.

## Tests

Please include tests for any new functionality or bug fixes. This ensures that we don't introduce regressions in the future.

## License

By contributing to this project, you agree to license your contribution under the MIT license.
