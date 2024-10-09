import InfoBox from "../components/InfoBox";
import Sentence from "../components/Sentence";
import Listing from "../components/Listing";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section-wrapper">
          <h1 className="hero-text">
            Cestovatel časem
            <br />
            ve&nbsp;filmu a v&nbsp;literatuře
          </h1>
        </div>
      </section>

      <section>
        <Sentence />
      </section>
      <h2>Cestování časem ve&nbsp;filmech</h2>
      <Listing />
      <h2>Cestování časem v&nbsp;literatuře</h2>
      <section>
        <InfoBox />
      </section>
    </>
  );
};

export default Home;
