import test from "node:test";
import assert from "node:assert/strict";

import {
  normalizeRepositoryReference,
  RepositoryReferenceError
} from "../src/repository-reference.js";

test("normalizes owner and repository shorthand", () => {
  assert.deepEqual(normalizeRepositoryReference("  KSAGlory/Vettmark  "), {
    owner: "KSAGlory",
    repository: "Vettmark",
    fullName: "KSAGlory/Vettmark",
    githubUrl: "https://github.com/KSAGlory/Vettmark"
  });
});

test("normalizes a standard HTTPS GitHub URL", () => {
  const reference = normalizeRepositoryReference(
    "https://github.com/KSAGlory/Vettmark/"
  );

  assert.equal(reference.fullName, "KSAGlory/Vettmark");
});

test("accepts a clone suffix and removes it", () => {
  const reference = normalizeRepositoryReference("KSAGlory/Vettmark.git");
  assert.equal(reference.repository, "Vettmark");
});

const invalidReferences = [
  "",
  "KSAGlory",
  "KSAGlory/repository/issues",
  "https://example.com/KSAGlory/repository",
  "http://github.com/KSAGlory/repository",
  "https://github.com/KSAGlory/repository/issues",
  "https://github.com/KSAGlory/repository?tab=readme",
  "https://github.com//KSAGlory/repository",
  "https://github.com/KSAGlory%2Frepository",
  "//github.com/KSAGlory/repository",
  "C:\\Users\\owner\\repository",
  "owner/<script>alert(1)</script>",
  "owner/repository%2Fissues",
  "-invalid/repository",
  "owner-/repository",
  "owner/repository name"
];

for (const value of invalidReferences) {
  test(`rejects unsupported repository reference: ${value || "empty value"}`, () => {
    assert.throws(
      () => normalizeRepositoryReference(value),
      RepositoryReferenceError
    );
  });
}
