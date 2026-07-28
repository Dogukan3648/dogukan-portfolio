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
        <h2 className="text-5xl font-bold leading-none tracking-[0.01em] text-[var(--color-accent)]">
          Profile
        </h2>

        <div className="mt-8 flex gap-8">
          <div className="flex w-[300px] shrink-0 flex-col gap-6">
            <h3 className="text-[30px] font-medium leading-7 text-white">
              Basic Information
            </h3>

            <dl className="flex flex-col gap-3">
              {profileInfo.map((info) => (
                <div
                  key={info.label}
                  className="grid grid-cols-[110px_1fr] gap-x-4"
                >
                  <dt className="text-base font-semibold leading-6 tracking-[0.01em] text-[var(--color-accent)]">
                    {info.label}
                  </dt>

                  <dd className="text-base leading-6 tracking-[0.01em] text-white">
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="h-[291px] w-[300px] shrink-0 overflow-hidden rounded-[10px]">
            <img
              src={profileImage}
              alt=""
              className="h-full w-full scale-[1.55] object-cover"
            />
          </div>

          <div className="flex w-[300px] shrink-0 flex-col ml-4">
            <h3 className="text-[30px] font-medium leading-7 text-white">
              About Me
            </h3>

            <div className="mt-4 flex flex-col gap-6">
              <p className="text-lg leading-[27px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                provident necessitatibus aliquam inventore aperiam repudiandae,
                nemo earum iure quod sunt?
              </p>

              <p className="text-lg leading-[27px] text-white">
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
