
import courses from '../assets/svgs/courses.png';

const Section = ({ id, title, description, buttonText, link }) => {
  return (
    <section id={id} className="d-flex align-items-center my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <a className="btn btn-primary" href={link}>{buttonText}</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src={courses} alt={title} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
