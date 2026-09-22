# Contributing

Thank you for your interest in Vettmark.

## Proposing a change

Proposed changes should preserve the documented product, privacy, security, and accessibility boundaries.

Before beginning substantial work, open a focused issue and wait for confirmation that the proposal fits the approved scope. This helps prevent duplicated effort and protects the application's privacy and read-only guarantees.

## Good contributions

- Reproducible bug reports
- Accessibility improvements
- Clear corrections to documentation
- Tests for supported repository inputs and API responses
- Small improvements that preserve the documented privacy and security boundaries

## Pull request requirements

- Keep each pull request focused on one purpose.
- Explain the user-facing reason for the change.
- Add or update tests when behavior changes.
- Preserve keyboard and screen-reader accessibility.
- Do not add analytics, tracking, authentication, write operations, or persistent storage without prior approval.
- Do not commit credentials, access tokens, generated secrets, personal data, or unrelated files.
- Confirm that formatting, tests, and security checks pass.
- Use professional, specific commit messages and pull request descriptions.

## Development setup

Vettmark has no production dependencies. Node.js 22 or later is required. Playwright is a development dependency used for browser testing. The browser tests and screenshot script use an installed Google Chrome browser.

Install the pinned development dependencies:

```sh
npm ci
```

Start the local application:

```sh
npm run dev
```

Use a separate terminal to run validation:

```sh
npm run check
npm run test:browser
npm run build
```

`npm run check` includes the unit tests. The browser suite starts its own local server or reuses one already running on port 4173.

Run `npm run screenshots` only when refreshing the README images. It captures the deployed application and overwrites the tracked screenshots. Set `SCREENSHOT_URL` to capture a different deployment.

The development server listens on `127.0.0.1` and uses port `4173` by default. Set `VETTMARK_PORT` when a different local port is required.

## Conduct

All participation must follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Do not open a public issue for an undisclosed vulnerability. Follow [SECURITY.md](SECURITY.md).
