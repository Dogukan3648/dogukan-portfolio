import { FaAt, FaCodepen, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] py-14 lg:pt-16 lg:pb-20">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-tight text-[var(--color-primary)] lg:text-5xl lg:leading-[72px]">
            Send me a message!
          </h2>

          <p className="w-full max-w-[448px] text-lg font-normal leading-[150%] text-[#120B39] lg:text-2xl">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>

          <a
            href="mailto:dogukan12216@gmail.com"
            className="break-all text-base font-medium tracking-[0.05em] text-[var(--color-primary)] underline lg:text-xl"
          >
            dogukan12216@gmail.com
          </a>

          <div className="flex items-center gap-5 lg:gap-6">
            <a href="#" target="_blank" rel="noreferrer" aria-label="X">
              <FaXTwitter
                size={28}
                className="text-[var(--color-primary)] lg:size-[35px]"
              />
            </a>

            <a href="#" target="_blank" rel="noreferrer" aria-label="Codepen">
              <FaCodepen
                size={28}
                className="text-[var(--color-primary)] lg:size-[35px]"
              />
            </a>

            <a href="mailto:dogukan12216@gmail.com" aria-label="Email">
              <FaAt
                size={28}
                className="text-[var(--color-primary)] lg:size-[35px]"
              />
            </a>

            <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram
                size={28}
                className="text-[var(--color-primary)] lg:size-[35px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
