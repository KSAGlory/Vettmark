# Quality Review

Vettmark is tested as a static, read-only browser application. The quality checks cover the complete repository-review workflow and the failure states that users can encounter.

## Automated validation

- JavaScript syntax validation
- 37 unit and integration tests for input handling, GitHub API behavior, scoring, incomplete reports, timeouts, cancellation, and rate limits
- Production build validation
- Dependency audit for known vulnerabilities
- End-to-end workflow tests in Google Chrome on GitHub Actions
- HTML structure validation

## Accessibility review

- WCAG 2.2 A and AA automated checks in light and dark modes
- Keyboard access and logical focus movement
- Report focus after analysis completes
- Visible focus indicators
- Native progress semantics
- Specific loading, validation, offline, rate-limit, and request-failure messages
- Reduced-motion behavior
- Minimum 44-pixel visible control target
- 200 percent zoom-equivalent layout review
- 320-pixel narrow layout review

The recorded accessibility review reported no detected WCAG A or AA violations in the tested primary workflow. This result describes that review, not every future version or interaction.

## Security review

- Repository input is restricted to validated GitHub owner and repository segments
- API requests use the fixed `https://api.github.com` origin and the `GET` method
- Browser credentials are omitted and no token is requested
- API-provided text is rendered with `textContent`
- Malicious markup in simulated API data remains inert
- Content Security Policy restricts scripts, assets, forms, and network connections
- No cookies, analytics, tracking, application backend, or persistent browser storage
- No credentials, private keys, tokens, or local filesystem paths are tracked in the repository

## Recorded performance review

The local production profile received scores of 100 for Performance, Accessibility, and Best Practices in Lighthouse. The application loads no third-party scripts, makes no API request until the user submits a repository, and uses no production dependencies.

## Scope

The manual accessibility and Lighthouse results above are historical review results. This document does not include the original report artifacts, browser versions, or run dates needed to reproduce those results exactly. Future reviews should record those details alongside the commit tested.

Automated results are available in the [Quality workflow](https://github.com/KSAGlory/Vettmark/actions/workflows/quality.yml). A [successful run for commit d6dc255](https://github.com/KSAGlory/Vettmark/actions/runs/35732461356) was verified during the documentation review on 22 September 2026. That workflow runs the dependency audit, source checks, tests, build, and Chrome workflow tests; it does not establish every manual or Lighthouse claim above.

These checks do not certify GitHub availability, repository content, application security, or legal compliance.
