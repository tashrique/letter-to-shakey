// Only the SHA-256 hash of the password lives here — never the plaintext.
// The hash still gets shipped to the browser in the built JS (this is a
// static site with no server), so it's a deterrent against casual visitors,
// not real security against someone who opens dev tools and tries.
//
// To set the password:
//   node scripts/hash-password.mjs "your password here"
// and paste the printed hash below.
//
// Current placeholder password is "changeme" — replace it before sharing the link.
export const passwordHash =
  "057ba03d6c44104863dc7361fe4578965d1887360f90a0895882e58a6248fc86";
