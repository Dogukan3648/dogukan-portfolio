import useApp from "../hooks/useApp";

const Header = () => {
  const { theme, setTheme } = useApp();

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="bg-[var(--color-primary)]">
      <div className="container flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:h-[72px] lg:flex-row lg:py-0">
        <span className="text-center text-2xl font-bold leading-tight text-[var(--color-accent)] sm:text-left lg:text-[32px] lg:leading-[72px]">
          Doğukan Bozkır
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end lg:gap-8">
          <button
            type="button"
            className="text-[13px] font-bold tracking-[0.1em] text-[var(--color-background)] lg:text-[15px]"
          >
            TÜRKÇE'YE GEÇ
          </button>

          <div className="flex items-center gap-3 lg:h-6 lg:gap-4">
            <button
              type="button"
              onClick={handleThemeChange}
              aria-label={
                theme === "light"
                  ? "Karanlık temaya geç"
                  : "Aydınlık temaya geç"
              }
              aria-pressed={theme === "dark"}
              className="h-6 w-12 rounded-full bg-[var(--color-background)]"
            />

            <span className="text-[13px] font-bold tracking-[0.1em] text-[var(--color-background)] lg:text-[15px]">
              DARK MODE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
