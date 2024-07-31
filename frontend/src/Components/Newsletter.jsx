
import '../styles/Newsletter.css';


const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter-section text-center">
      <div className="content-container">
        <h2>Sign Up for Our Newsletter</h2>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;