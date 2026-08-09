#!/usr/bin/env node
// Prints the SHA-256 hash of a password, so the plaintext never has to be
// typed into a file that ends up in git history or the deployed JS bundle.
//
// Usage:
//   node scripts/hash-password.mjs "your password here"
//
// Paste the printed hash into src/data/auth.ts as `passwordHash`.

import { createHash } from "node:crypto";

const password = process.argv.slice(2).join(" ");

if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "your password here"');
  process.exit(1);
}

console.log(createHash("sha256").update(password, "utf8").digest("hex"));
