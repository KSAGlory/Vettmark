# Security policy

## Supported version

Security fixes target the latest official release. Include the affected version or commit when reporting a problem.

## Reporting a vulnerability

Use [GitHub private vulnerability reporting](https://github.com/KSAGlory/Vettmark/security/advisories/new). Do not disclose an unreported vulnerability in a public issue or pull request.

Include:

- The affected version or commit
- A clear description of the problem
- Minimal reproduction steps
- The potential impact
- A suggested fix, if you have one

Do not include passwords, tokens, private documents, or unrelated personal information. Use a non-confidential example whenever possible.

## Project-specific guidance

Vettmark reads public repository metadata through GitHub's API. It does not request access tokens, access private repositories, or perform write operations. Reports about unsafe input handling, rendering, or unintended data exposure are in scope. A readiness score is not a security certification.

The application must use the fixed GitHub API host, reject unsupported repository references, render API values as text, and maintain its Content Security Policy. It must not add tracking, cookies, or persistent search storage without a reviewed change to its documented behavior.

## Disclosure

Allow time for investigation and a fix before publishing technical details. The maintainer will coordinate disclosure through the private report.

For installation help, usage questions, and ordinary bug reports, use [GitHub Issues](https://github.com/KSAGlory/Vettmark/issues).
