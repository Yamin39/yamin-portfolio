import AboutMe from "../../components/HomeComponents/AboutMe/AboutMe";
import Banner from "../../components/HomeComponents/Banner/Banner";
import Education from "../../components/HomeComponents/Education/Education";
import MySkills from "../../components/HomeComponents/MySkills/MySkills";
import Stats from "../../components/HomeComponents/Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <Education></Education>
    </div>
  );
};

export default Home;
