const Education = () => {
  return (
    <div id="educations" className="pt-[4.375rem] sm:pt-[7.5rem]">
      <div className="max-w-[41.25rem] mx-auto text-center">
        <h1 className="text-primary-gradient text-[2.5rem] font-bold" data-aos="fade-up" data-aos-delay="100">
          My Education
        </h1>
        <p className="text-sm sm:text-base leading-[1.8] sm:leading-[1.7]" data-aos="fade-up" data-aos-delay="150">
          A small Brief Summary of my education
        </p>
      </div>

      <div className="mt-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li data-aos="fade-up" data-aos-delay="150">
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <p className="text-lg font-semibold text-[#7331f8]">P.S.C</p>
              <p className="font-mono italic">2012 - 2017</p>
              <div className="text-2xl font-black">Shishu Niketon Kinder Garden</div>I completed my primary education at Shishu Niketon Kindergarten, studying
              from January 2012 to December 2017, and graduated by passing the P.S.C. board examination in 2017.
            </div>
            <hr />
          </li>
          <li data-aos="fade-up" data-aos-delay="250">
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <p className="text-lg font-semibold text-[#7331f8]">S.S.C</p>
              <p className="font-mono italic">2018 - 2023</p>
              <div className="text-2xl font-black">Shaistaganj Islami Academy And High School</div>I completed my high school education at Shaistaganj Islami
              Academy and High School in Shaistaganj, Habiganj, studying from January 2018 to May 2023. I graduated with a focus on science, passing the S.S.C.
              board examination in 2023.
            </div>
            <hr />
          </li>
          <li data-aos="fade-up" data-aos-delay="350">
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <p className="text-lg font-semibold text-[#7331f8]">Diploma in CST</p>
              <p className="font-mono italic">2023 - Current</p>
              <div className="text-2xl font-black">Sylhet Polytechnic Institute</div>I am currently pursuing a diploma in Computer Science and Technology at
              Sylhet Polytechnic Institute, Sylhet. I began my studies in October 2023, with an expected graduation in 2027.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
