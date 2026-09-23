export function normalizePathname(pathname: string): string {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

export function isNavigationItemActive(
  currentPathname: string,
  href: string,
  external = false,
): boolean {
  if (external || href.startsWith("#")) {
    return false;
  }

  const target = new URL(href, "https://starter.invalid");
  // Une ancre de section n'est pas une page active supplémentaire.
  if (target.hash) return false;
  const targetPathname = target.pathname;

  return normalizePathname(currentPathname) === normalizePathname(targetPathname);
}
