import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 999,
      text1: "Coding",
      text2: "Hours",
      aosDelay: 120,
    },
    {
      num: 34,
      text1: "Projects",
      text2: "Completed",
      aosDelay: 220,
    },
    {
      num: 8,
      text1: "Technologies",
      text2: "mastered",
      aosDelay: 320,
    },
    {
      num: 600,
      text1: "Code",
      text2: "commits",
      aosDelay: 420,
    },
  ];
  return (
    <div
      className="p-6 sm:p-12 md:pr-6 rounded-2xl bg-[#F6F3FC] border-[#D9D9D9] border-[0.05rem] mt-10"
      data-aos="fade-zoom-in"
      data-aos-once={true}
      data-aos-delay="100"
    >
      <div className="grid justify-start grid-cols-2 sm:flex sm:flex-wrap gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center justify-start"
            data-aos={(i + 1) % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-once={true}
            // data-aos-delay={`${stat.aosDelay}`}
            data-aos-delay="120"
          >
            <div className="text-4xl xl:text-6xl font-extrabold xl:justify-start text-[#7331f8]">
              <CountUp end={stat.num} duration={4} />+
            </div>
            <p className="text-sm leading-snug">
              {stat.text1} <br /> {stat.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
