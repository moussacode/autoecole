import Link from 'next/link';

export const Breadcrumb = ({ currentPage, currentPath }) => {
  return (
    <nav className="mb-8 text-xs sm:text-sm md:text-base">
      <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
        <li>
          <Link href="/" className="font-semibold hover:underline">
            Accueil
          </Link>
          <span className="mx-1 sm:mx-2"> &gt; </span>
        </li>
        <li>
          <Link href={currentPath} className="font-semibold hover:underline">
            Cours
          </Link>
          <span className="mx-1 sm:mx-2"> &gt; </span>
        </li>
        <li className="text-muted-foreground truncate">
          {currentPage}
        </li>
      </ul>
    </nav>
  );
};
