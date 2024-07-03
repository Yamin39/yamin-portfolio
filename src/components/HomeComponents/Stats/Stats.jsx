import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 999,
      text1: "Coding",
      text2: "Hours",
    },
    {
      num: 34,
      text1: "Projects",
      text2: "Completed",
    },
    {
      num: 8,
      text1: "Technologies",
      text2: "mastered",
    },
    {
      num: 600,
      text1: "Code",
      text2: "commits",
    },
  ];
  return (
    <div className="p-6 sm:p-12 md:pr-6 rounded-2xl bg-[#F6F3FC] border-[#D9D9D9] border-[0.05rem] mt-10">
      <div className="grid justify-start grid-cols-2 sm:flex sm:flex-wrap gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center justify-start">
            <div className="text-4xl xl:text-6xl font-extrabold xl:justify-start text-[#7331f8]">
              <CountUp end={stat.num} duration={5} delay={2} />+
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
