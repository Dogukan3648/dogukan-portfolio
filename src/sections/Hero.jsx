import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/images/hero-image.png";
import Button from "../components/Button";
import useApp from "../hooks/useApp";

const Hero = () => {
  const { content } = useApp();
  const { hero } = content;

  return (
    <section className="relative overflow-hidden bg-[var(--hero-background)] py-12 lg:min-h-[599px] lg:py-0">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[30%] bg-[var(--hero-side-background)] lg:block"
      />

      <div className="container relative z-10 flex flex-col items-center gap-10 lg:min-h-[599px] lg:flex-row lg:justify-between">
        <div className="flex w-full max-w-[529px] flex-col gap-6 lg:gap-9">
          <h1 className="text-center text-4xl font-bold leading-[1.1] text-[var(--color-accent)] lg:text-left lg:text-[54px]">
            {hero.title}
          </h1>

          <p className="text-center text-lg font-normal leading-[140%] text-[var(--hero-text)] lg:text-left lg:text-2xl lg:leading-[100%]">
            {hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
            <Button
              href={hero.links.github.url}
              icon={<FaGithub className="text-[26px]" />}
            >
              {hero.links.github.label}
            </Button>

            <Button
              href={hero.links.linkedin.url}
              icon={<FaLinkedin className="text-[26px]" />}
            >
              {hero.links.linkedin.label}
            </Button>
          </div>
        </div>

        <img
          src={heroImage}
          alt={hero.imageAlt}
          className="h-auto w-full max-w-[350px] rounded-[18px] object-cover lg:h-[376px] lg:w-[350px]"
        />
      </div>
    </section>
  );
};

export default Hero;
