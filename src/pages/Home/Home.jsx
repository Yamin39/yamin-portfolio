import AboutMe from "../../components/HomeComponents/AboutMe/AboutMe";
import Banner from "../../components/HomeComponents/Banner/Banner";
import MySkills from "../../components/HomeComponents/MySkills/MySkills";
import Stats from "../../components/HomeComponents/Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
    </div>
  );
};

export default Home;
