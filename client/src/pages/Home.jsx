import Advantages from "../components/Advantages";
import Hero from "../components/Hero";
import Deployment from "../components/Deployment";
import Companies from "../components/Companies";
import ProjectSection from "../components/Project.Section";


const Home = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      <Hero />
      <Advantages />
      <Deployment />
      <Companies />
      {token && <ProjectSection />}
    </>
  );
}

export default Home