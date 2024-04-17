"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
  replace?: boolean;
  scroll?: boolean;
  query?: any;
  className?: string;
  ariaLabel?: string;
  onClick?: any;
  disabled?: boolean;
  title?: string;
};

const CustomLink = ({
  children,
  href,
  replace = false,
  scroll = false,
  query,
  onClick,
  className,
  ariaLabel,title,
  disabled = false,

}: Props) => {
  const pathname = usePathname();
  const absoluteHref = href?.startsWith("/") ? href : `/${href}`;

  return (
    <Link
      replace={replace}
      scroll={scroll}
      
      href={{
        pathname: absoluteHref,
        query: query,
      }}
      className={disabled ?`opacity-45 pointer-events-none  ${className}`:className}
      aria-label={title ?? ariaLabel}
      title={title ?? ariaLabel}
      onClick={onClick}
      
    >
      {children}
    </Link>
  );
};

export default CustomLink;
