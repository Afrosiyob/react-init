import React from "react";
import "./Footer.scss";
import { Container, Row, Col } from "reactstrap";

function Footer() {
  return (
    <div className="footer-sec my-4" id="contact">
      <Container>
        <Row>
          <Col md={{ size: 6 }} sm={{ size: 12 }} className="left-side">
            <div className="my-4  item">
              <code>.email</code>
              <h3>init@company.com</h3>
            </div>
            <div className="my-4 item">
              <code>.social</code>
              <p> Behanse Dribble Instagram Youtube</p>
            </div>
            <div className="my-4 item">
              <code>Tell</code>
              <p>(94) 538 65 98 (99) 602 51 12 </p>
            </div>
          </Col>
          <Col md={{ size: 6 }} sm={{ size: 12 }} className="right-side">
            ewew
          </Col>
        </Row>
        <h3 className="my-4">
          <code>2020 M.A.M.S.M // init company</code>
        </h3>
      </Container>
    </div>
  );
}

export default Footer;
