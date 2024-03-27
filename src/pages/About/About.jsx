import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about-company">
        <h1 className="about-company__header">ABOUT US</h1>
        <p className="about-company__description">
          Tea, or cha, is an aromatic beverage prepared by pouring hot or
          boiling water over cured or fresh leaves of Camellia sinensis, an
          evergreen shrub native to East Asia which probably originated in the
          borderlands of southwestern China and northern Myanmar.Tea is also
          made, but rarely, from the leaves of Camellia taliensis. After plain
          water, tea is the most widely consumed drink in the world.There are
          many different types of tea; some have a cooling, slightly bitter, and
          astringent flavour, while others have profiles that include sweet,
          nutty, floral, or grassy notes. Tea has a stimulating effect in
          humans, primarily due to its caffeine content
        </p>
      </div>
      <div className="about-company__staff">
        <div className="about-company__staff-left">
          <h3 className="staff-name">Bill Xu</h3>
          <div className="about-company__staff-box">
            <p className="about-company__staff-description">
              Description about me section!
            </p>
          </div>
        </div>
        <div className="about-company__staff-right">
          <h3 className="staff-name">Eric Lusk-Jopson</h3>
          <div className="about-company__staff-box">
            <p className="about-company__staff-description">
              Description about me section!
            </p>
          </div>
        </div>
        <div className="about-company__staff-left">
          <h3 className="staff-name">Louise Lusk</h3>
          <div className="about-company__staff-box">
            <p className="about-company__staff-description">
              Description about me section!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
