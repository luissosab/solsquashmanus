import { Link } from "wouter";

type NavigationItem = { label: string; href: string; external?: boolean };

export function PageNavigator({
  label,
  items,
}: {
  label: string;
  items: NavigationItem[];
}) {
  return (
    <nav className="page-navigator" aria-label={label}>
      <span>{label}</span>
      <div>
        {items.map(item =>
          item.external ? (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ) : item.href.startsWith("#") ? (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ) : (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
