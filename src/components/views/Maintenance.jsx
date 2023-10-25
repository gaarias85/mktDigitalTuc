import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import logo from "../../assets/logo-white.png";
import "./maintenance.css";

const Maintenance = () => {
  const Link = ({ id, children, title, href }) => (
    <OverlayTrigger
      overlay={<Tooltip id={`${id}-bottom`}>{title}</Tooltip>}
      key="bottom"
      placement="bottom"
    >
      <a href={href} className="btn btn-outline-light fs-4">
        {children}
      </a>
    </OverlayTrigger>
  );

  return (
    <Container className="d-flex flex-column justify-content-center w-100 h-100">
      <section className="d-flex flex-column justify-content-center align-items-center  text-center">
        <img src={logo} alt="logo MKT digital tuc" className="img-fluid " />
        <h2 className="fw-bold text-white my-4"><i class="bi bi-exclamation-diamond"></i> Sitio en mantenimiento </h2>
        <p className="lead">
          Disculpa las molestias, estamos realizando labores de mantenimiento en
          nuestra página web para mejorar tu experiencia. Estaremos de vuelta
          pronto.
        </p>
        <p>Comunícate con nosotros al siguiente número <a href="tel:+543814754510" className="link-light">+54-3814754510</a></p>
        <div className="btn-group my-5">
          <Link
            title="whatsapp"
            id="whatsapp"
            href="https://api.whatsapp.com/send?phone=543814754510&text=Hola%20equipo%20de%20MKT!%20queria%20consultarles..."
          >
            <i className="bi bi-whatsapp fs-4 mx-2"></i>
          </Link>
          <Link
            title="instagram"
            id="instagram"
            href="https://www.instagram.com/mktdigitaltuc/?hl=es"
          >
            <i className="bi bi-instagram fs-4 mx-2"></i>
          </Link>
          <Link title="email" id="email" href="mailto:mktdigitaltuc@gmail.com">
            <i className="bi bi-envelope fs-4 mx-2"></i>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Maintenance;
