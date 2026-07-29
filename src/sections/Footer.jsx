import { FaAt, FaCodepen, FaInstagram, FaXTwitter } from "react-icons/fa6";
import useApp from "../hooks/useApp";

const Footer = () => {
  const { content } = useApp();
  const { footer } = content;

  return (
    <footer className="bg-[#F9F9F9] py-14 lg:pt-16 lg:pb-20">
      <div className="container">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-bold leading-tight text-[var(--color-primary)] lg:text-5xl lg:leading-[72px]">
            {footer.title}
          </h2>

          <p className="w-full max-w-[520px] text-lg font-normal leading-[150%] text-[#120B39] lg:text-2xl">
            {footer.description}
          </p>

          <a
            href={`mailto:${footer.email}`}
            className="break-all text-base font-medium tracking-[0.05em] text-[var(--color-primary)] underline lg:text-xl"
          >
            {footer.email}
          </a>

          <div className="flex items-center gap-5 lg:gap-6">
            <a
              href={footer.socialLinks.x}
              target="_blank"
              rel="noreferrer"
              aria-label={footer.ariaLabels.x}
            >
              <FaXTwitter
                size={28}
                className="text-[var(--color-primary)] lg:size-[35px]"
              />
            </a>

            <a
              href={footer.socialLinks.codepen}
              target="_blank"
              rel="noreferrer"
              aria-label={footer.ariaLabels.codepen}
            >
              <FaCodepen
                size={28}
                className="text-[var(--color-primary)] lg:size-[35px]"
              />
            </a>

            <a
              href={`mailto:${footer.email}`}
              aria-label={footer.ariaLabels.email}
            >
              <FaAt
                size={28}
                className="text-[var(--color-primary)] lg:size-[35px]"
              />
            </a>

            <a
              href={footer.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={footer.ariaLabels.instagram}
            >
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
