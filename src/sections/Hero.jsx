import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/images/hero-image.png";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section className="relative min-h-[599px] overflow-hidden bg-[var(--color-primary)]">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[30%] bg-[var(--color-accent)]"
      />
      <div className="container relative z-10 flex min-h-[599px] items-center justify-between">
        <div className="flex h-[376px] w-[529px] flex-col gap-9">
          <h1 className="text-[54px] font-bold leading-[1.1] text-[var(--color-accent)]">
            I am a Frontend Developer...
          </h1>
          <p className="text-2xl font-normal leading-[100%] text-[var(--color-background)]">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="flex gap-3">
            <Button
              href="https://github.com/Dogukan3648"
              icon={<FaGithub className="text-[26px]" />}
            >
              GitHub
            </Button>

            <Button
              href="https://www.linkedin.com/in/dogukanbozkir/"
              icon={<FaLinkedin className="text-[26px]" />}
            >
              LinkedIn
            </Button>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Doğukan Bozkır"
          className="h-[376px] w-[350px] rounded-[18px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
