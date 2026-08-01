import profileImage from "../assets/images/profileImage.webp";
import useApp from "../hooks/useApp";

const Profile = () => {
  const { content } = useApp();
  const { profile } = content;

  return (
    <section className="bg-[var(--profile-background)] py-14">
      <div className="container">
        <h2 className="text-center text-4xl font-bold leading-none tracking-[0.01em] text-[var(--color-accent)] lg:text-left lg:text-5xl">
          {profile.title}
        </h2>

        <div className="mt-10 flex flex-col items-center gap-10 lg:mt-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex w-full max-w-[420px] flex-col gap-6 lg:w-[320px] lg:shrink-0">
            <h3 className="text-center text-2xl font-medium leading-7 text-white lg:text-left lg:text-[30px]">
              {profile.basicInfoTitle}
            </h3>

            <dl className="flex flex-col gap-4 lg:gap-3">
              {profile.info.map((info) => (
                <div
                  key={info.id}
                  className="grid grid-cols-[120px_1fr] gap-x-4"
                >
                  <dt className="text-sm font-semibold leading-6 tracking-[0.01em] text-[var(--color-accent)] lg:text-base">
                    {info.label}
                  </dt>

                  <dd className="text-sm leading-6 tracking-[0.01em] text-white lg:text-base">
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="h-[291px] w-full max-w-[300px] overflow-hidden rounded-[10px] lg:w-[300px] lg:shrink-0">
            <img
              src={profileImage}
              alt={profile.imageAlt}
              className="h-full w-full scale-[1.55] object-cover"
            />
          </div>

          <div className="flex w-full max-w-[420px] flex-col lg:w-[320px] lg:shrink-0">
            <h3 className="text-center text-2xl font-medium leading-7 text-white lg:text-left lg:text-[30px]">
              {profile.aboutTitle}
            </h3>

            <div className="mt-3">
              <p className="text-base leading-7 text-white lg:text-lg lg:leading-[27px]">
                {profile.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
