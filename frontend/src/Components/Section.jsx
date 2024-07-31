import "../styles/Section.css";

const Section = ({ id, title, description, buttonText, link, imageSrc, reverse }) => {
  return (
    <section id={id} className={`section ${reverse ? 'reverse' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-content">
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <a className="btn btn-primary" href={link}>{buttonText}</a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 image-content">
            <div className="image-wrapper" style={{ backgroundImage: `url(${imageSrc})` }}>
              {/* Image is set as background */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
