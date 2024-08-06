---
sidebar_position: 3
---

# Contributing

Want to help improve TS-PokéAPI? We would greatly appreciated!

On the following sections are some ways to contribute to the project.

## Development setup

### Forking the Repository
Fork the repo on [GitHub](https://github.com/jaflesch/ts-pokeapi). Run these commands in the terminal to download locally and install it:
```bash npm2yarn
git clone https://github.com/<USERNAME>/my-pokemon-ex.git
cd my-pokemon-ex
git remote add upstream https://github.com/jaflesch/ts-pokeapi
npm install
```

This project uses a monorepo structure for both `src` and `docs` folders.


### Code Review Guidelines

#### ESLint
This project uses [ESLint](https://eslint.org/docs/latest/use/getting-started) to ensure consistency throughout the project. This way we guarantee a codebase with clean patterns  styles,  formatted the way we like it to be. Before pushing your changes, you can verify that everything is still correctly formatted by running:

```bash npm2yarn
npm run lint
```

If any errors occur, they will be fixed automatically.


#### Typecheck

TS-PokéAPI, as name suggests, is written in TypeScript. Thus, must pass typecheck. You can typecheck files with the command:

```bash npm2yarn
npm run tsc
```

::::tip
We also recommend to run typecheck in watch mode when working on the project.

```bash npm2yarn
npm run tsc -- --watch
```
::::

### Testing
TS-PokéAPI has tests implemented in [Jest](https://jestjs.io/docs/getting-started). After installing `node_modules`, run either of the following commands:

To run all tests:
```bash npm2yarn
npm test
```

To run specific tests:
```bash npm2yarn
npm test -- --testPathPattern=src/<PATH_TO_FILE_OR_FOLDER>
```

::::warning
These commands will be run by our CI and are required to pass before any contributions are merged.
::::

## Information
### Issue Template
Before submitting an issue, please take a look at the [**issue template**](https://github.com/jaflesch/ts-pokeapi/blob/main/.github/ISSUE_TEMPLATE) and follow it to help anyone willing to take the time to review your issue. 

Consider that this is in place to help everyone better understand the issue you're having and a good explanation, following the patterns and templates, will reduce the back and forth to get the necessary information.

### Pull Request Template
When creating a pull-request, make sure to follow the [**pull request template**](https://github.com/jaflesch/ts-pokeapi/blob/main/.github/pull_request_template.md). The template presents instructions to ensure your pull request gets reviewed properly.

Pull-requests will be squash-committed, so no need to prefix your individual commits with the conventional changelog format as long as the commit messages are descriptive.

## Other contributions
### Reporting Bugs
Well, bugs happen. And with TS-PokéAPI is no different. When you think you've found one here's what to do:

Search the existing issues for one like what you're seeing. If you see one, add a 👍 reaction. Read through the comments and see if you can provide any more valuable information to the thread.

If there are no other issues like yours, then create a new one. Be sure to follow the issue template.
Creating a high quality reproduction is critical. Without it we likely can't fix the bug.

### Improving the Documentation
Any successful projects needs quality documentation and TS-PokéAPI is no different. When submiting a pull request, be sure to
add `documentation` label. On the same way, if you find some inconsistency about any text on documentation, report an issue
with label `documentation`.


#### Philosophy of documentation
- Document the ugly parts as much as the good parts. It's better for users to know that we don't have a good solution to the problem they have and get the preferred workarounds from us than have to scour the dark and moist corners of StackOverflow.

- Provide runnable examples where possible. Learning through interacting with the code is a reason why REPLs are so popular. Thanks to Snack we can provide the same kind of experience for React Navigation users too.

- Be honest about the tradeoffs and limitations. We explain the pitch and anti-pitch of React Navigation and provide alternative libraries if React Navigation might not be a good fit. We should provide a similar level of honesty at finer levels of granularity as well.

### Responding to Issues
Another great way to contribute to TS-PokéAPI is by responding to issues. Maybe it's answering someone's question, pointing out a small typo in their code, or helping them put together a reproduction.

### Bug Fixes
Check if a pull request already exists addressing that bug. If it does give it a review and leave your comments
If there isn't already a pull request then figure out the fix! If it's relatively small go ahead and fix it and submit a pull request. If it's a decent number of changes file an issue first so we can discuss it.

If there is an issue related to that bug leave a comment on it, linking to your pull request, so others know it's been addressed.

### Suggesting a Feature
Is there something you want to see from TS-PokéAPI? Please create an issue and tag with `feature-request` label.

## Feedback

TS-PokéApi was built by someone passionate about the Pokémon franchise and computing.
My goal with this project is to help as many people as possible, in some way, to have a better experience manipulating data in the Pokémon universe, whether in games or with other renowned APIs, such as PokéAPI.


Therefore, your feedback is extremely important! It is only in this way that I will know if I am on the right path and where I can improve and contribute even more to this community. 💙

Did you like TS-PokéAPI? [Consider giving us a star 🌟](https://github.com/jaflesch/ts-pokeapi)
