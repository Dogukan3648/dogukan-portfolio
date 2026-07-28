const Button = ({ href, icon, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        h-[52px]
        items-center
        gap-[10px]
        rounded-md
        border
        border-[var(--color-indigo-dark)]
        bg-white
        py-3
        pl-3
        pr-5
        text-[var(--color-indigo-dark)]
      "
    >
      {icon}
      <span className="text-lg font-medium leading-7">{children}</span>
    </a>
  );
};

export default Button;
