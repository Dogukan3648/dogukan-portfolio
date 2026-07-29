import profileImage from "../assets/images/profileImage.svg";

const profileInfo = [
  { label: "Doğum Tarihi", value: "05.06.1996" },
  { label: "İkamet Yeri", value: "İstanbul" },
  {
    label: "Eğitim Durumu",
    value: "İstanbul Esenyurt Üniversitesi Bilgisayar Mühendisliği, 2025",
  },
  { label: "Tercih Ettiği Rol", value: "Full-Stack Developer" },
];

const Profile = () => {
  return (
    <section className="bg-[var(--color-primary)] py-14">
      <div className="container">
        <h2 className="text-center text-4xl font-bold leading-none tracking-[0.01em] text-[var(--color-accent)] lg:text-left lg:text-5xl">
          Profile
        </h2>

        <div className="mt-10 flex flex-col items-center gap-10 lg:mt-8 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex w-full max-w-[420px] flex-col gap-6 lg:w-[300px] lg:shrink-0">
            <h3 className="text-center text-2xl font-medium leading-7 text-white lg:text-left lg:text-[30px]">
              Basic Information
            </h3>

            <dl className="flex flex-col gap-4 lg:gap-3">
              {profileInfo.map((info) => (
                <div
                  key={info.label}
                  className="grid grid-cols-[100px_1fr] gap-x-4"
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
              alt="Doğukan Bozkır çalışma ortamı"
              className="h-full w-full scale-[1.55] object-cover"
            />
          </div>

          <div className="flex w-full max-w-[420px] flex-col lg:ml-4 lg:w-[300px] lg:shrink-0">
            <h3 className="text-center text-2xl font-medium leading-7 text-white lg:text-left lg:text-[30px]">
              About Me
            </h3>

            <div className="mt-4 flex flex-col gap-5 lg:gap-6">
              <p className="text-base leading-7 text-white lg:text-lg lg:leading-[27px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                provident necessitatibus aliquam inventore aperiam repudiandae,
                nemo earum iure quod sunt?
              </p>

              <p className="text-base leading-7 text-white lg:text-lg lg:leading-[27px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                provident necessitatibus aliquam inventore aperiam repudiandae,
                nemo earum iure quod sunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
