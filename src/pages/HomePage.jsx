import Levels from "@/components/home/Levels";
import "@/styles/homepage.css";

const HomePage = () => {
  return (
    <main>
      <section>
        <div className="head-text">
          <label>Welcome! Choose a level to play below:</label>
        </div>
        <br></br>
        <br></br>
        <Levels />
      </section>
    </main>
  );
};

export default HomePage;
