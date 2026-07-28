import useApp from "../hooks/useApp";

const Header = () => {
  const { theme, setTheme } = useApp();

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="bg-[var(--color-primary)]">
      <div className="container flex h-[72px] items-center justify-between">
        <span className="text-[32px] font-bold leading-[72px] text-[var(--color-accent)]">
          Doğukan Bozkır
        </span>

        <div className="flex items-center gap-8">
          <button
            type="button"
            className="text-[15px] font-bold tracking-[0.1em] text-[var(--color-background)]"
          >
            TÜRKÇE'YE GEÇ
          </button>

          <div className="flex h-6 items-center gap-4">
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

            <span className="text-[15px] font-bold tracking-[0.1em] text-[var(--color-background)]">
              DARK MODE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
