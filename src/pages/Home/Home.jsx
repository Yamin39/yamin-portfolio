import AboutMe from "../../components/HomeComponents/AboutMe/AboutMe";
import Banner from "../../components/HomeComponents/Banner/Banner";
import ContactMe from "../../components/HomeComponents/ContactMe/ContactMe";
import Education from "../../components/HomeComponents/Education/Education";
import MySkills from "../../components/HomeComponents/MySkills/MySkills";
import Projects from "../../components/HomeComponents/Projects/Projects";
import Stats from "../../components/HomeComponents/Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <Projects></Projects>
      <Education></Education>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
