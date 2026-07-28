import { FaAt, FaCodepen, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] pt-[84px] pb-20">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-bold leading-[72px] text-[var(--color-primary)]">
            Send me a message!
          </h2>

          <p className="w-[448px] text-2xl font-normal leading-[150%] text-[#120B39]">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>

          <a
            href="mailto:dogukan12216@gmail.com"
            className="text-xl font-medium leading-none tracking-[0.05em] text-[var(--color-primary)] underline"
          >
            dogukan12216@gmail.com
          </a>

          <div className="flex items-center gap-6">
            <a href="#" target="_blank" rel="noreferrer" aria-label="X">
              <FaXTwitter size={35} className="text-[var(--color-primary)]" />
            </a>

            <a href="#" target="_blank" rel="noreferrer" aria-label="Codepen">
              <FaCodepen size={35} className="text-[var(--color-primary)]" />
            </a>

            <a href="mailto:dogukan12216@gmail.com" aria-label="Email">
              <FaAt size={35} className="text-[var(--color-primary)]" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={35} className="text-[var(--color-primary)]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
