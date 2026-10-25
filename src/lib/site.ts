// Resolves the canonical site URL. On Vercel, VERCEL_PROJECT_PRODUCTION_URL is set
// automatically; NEXT_PUBLIC_SITE_URL overrides it once you add a custom domain.
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");
