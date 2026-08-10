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
  "74757879eaa082729e23fc615cfe4009827037727e2cc82640d0f139fda49d11";
