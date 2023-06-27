import aboutImage from "../assets/img/about.jpg";

function About() {
  return (
    <>
      <section id="about" className="about pt-0">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
              <img src={aboutImage} className="img-fluid" alt="" />
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox play-btn"
              ></a>
            </div>
            <div className="col-lg-6 content order-last  order-lg-first">
              <h3>Welcome to EMMS - East Manchester Minibus Service</h3>
              <p>
                EMMS is your premier choice for reliable and affordable transportation services in
                East Manchester and surrounding areas. With over 20 years of experience in the
                industry, we take pride in offering a first-class travel solution that caters to all
                your needs. Whether you're heading to the airport, planning a day trip, attending a
                sporting event, or simply enjoying a fun night out, EMMS has you covered.
              </p>
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h5>Eight-Seater Travel Solutions</h5>
                    <p>Travel in comfort and style with our spacious eight-seater minibuses.</p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h5>Affordable Pricing</h5>
                    <p>
                      We believe that quality transportation should be accessible to everyone.
                      That's why we offer competitive rates that won't break the bank.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-broadcast"></i>
                  <div>
                    <h5>Outstanding Service</h5>
                    <p>
                      Customer satisfaction is our top priority. Our dedicated team goes above and
                      beyond to ensure your journey is smooth, convenient, and enjoyable
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;