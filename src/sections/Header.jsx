import useApp from "../hooks/useApp";

const Header = () => {
  const { theme, content, toggleTheme, toggleLanguage } = useApp();

  const { header } = content;

  return (
    <header className="bg-[var(--hero-background)]">
      <div className="container flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:h-[72px] lg:flex-row lg:py-0">
        <span className="text-center text-2xl font-bold leading-tight text-[var(--color-accent)] sm:text-left lg:text-[32px] lg:leading-[72px]">
          {header.name}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end lg:gap-8">
          <button
            type="button"
            onClick={toggleLanguage}
            className="cursor-pointer text-[13px] font-bold tracking-[0.1em] text-[var(--hero-text)] lg:text-[15px]"
          >
            {header.languageButton}
          </button>

          <button
            type="button"
            role="switch"
            aria-checked={theme === "dark"}
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? header.themeAriaLabelToDark
                : header.themeAriaLabelToLight
            }
            className="flex cursor-pointer items-center gap-3 lg:h-6 lg:gap-4"
          >
            <span
              aria-hidden="true"
              className="relative h-6 w-12 shrink-0 rounded-full bg-[var(--theme-switch-track)] transition-colors duration-300"
            >
              <span
                className={`absolute top-0.5 left-0.5 flex h-5 w-5 items-center justify-center text-[var(--theme-switch-icon)] transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-0" : "translate-x-6"
                }`}
              >
                {theme === "dark" ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.93 4.93l1.42 1.42" />
                    <path d="M17.66 17.66l1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M4.93 19.07l1.42-1.42" />
                    <path d="M17.66 6.34l1.41-1.41" />
                  </svg>
                )}
              </span>
            </span>

            <span className="text-[13px] font-bold tracking-[0.1em] text-[var(--hero-text)] lg:text-[15px]">
              {theme === "light"
                ? header.themeLabelToDark
                : header.themeLabelToLight}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
