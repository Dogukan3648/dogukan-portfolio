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
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? header.themeAriaLabelToDark
                : header.themeAriaLabelToLight
            }
            aria-pressed={theme === "dark"}
            className="cursor-pointer flex items-center gap-3 lg:h-6 lg:gap-4"
          >
            <span
              aria-hidden="true"
              className="h-6 w-12 rounded-full bg-[var(--hero-text)]"
            />

            <span className="text-[13px] font-bold tracking-[0.1em] text-[var(--hero-text)] lg:text-[15px]">
              {header.themeLabel}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
