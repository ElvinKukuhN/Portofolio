
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/Elvin.JPG"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Elvin Kukuh Nurdiyansah</h1>
            <p>Mobile & Web Development</p>
            <div className="social-links">
              <a href="https://github.com/ElvinKukuhN" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/elvkh_nn" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/elvinkukuhn" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
