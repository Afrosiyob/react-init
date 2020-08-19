import React from "react";
import "./AboutUs.scss";
import { Container, Row, Col } from "reactstrap";

function AboutUs() {
  return (
    <div className="about-us my-5">
      <Container>
        <Row>
          <Col md={{ size: 6 }} sm={{ size: 12 }} className="left-side">
            <div className="top-title">
              <h3>Yangi olamga yangicha nazar</h3>
            </div>
            <div className="body">image</div>
          </Col>
          <Col md={{ size: 6 }} sm={{ size: 12 }} className="right-side">
            <div className="top-title">
              <h3>biz hayotni virtual olam bilan</h3>
            </div>
            <div className="body">
              <div className="body-top">
                <h1>uyg'unlashtiramiz</h1>
              </div>
              <div className="my-4 body-under">
                <div className="item-body">
                  <code>.maqsad</code>
                  <p>
                    .Jamoa sizning xar qanday xoxish istagingizni inobatga olgan
                    xolda ish yuritadi. Jamoaning maqsadi kelajakda katta IT
                    kompaniyaga aylanish va jamoatga foydasi tegish. Ozbekiston
                    nomini xam jaxonga tanitishdan iborat bo'lib o'zbekiston IT
                    maxsulotlari johonda raqobatbardosh maxsulotlarga
                    aylantirish.
                  </p>
                </div>
                <div className="item-body">
                  <code>.maqsad</code>
                  <p>
                    .Jamoa sizning xar qanday xoxish istagingizni inobatga olgan
                    xolda ish yuritadi. Jamoaning maqsadi kelajakda katta IT
                    kompaniyaga aylanish va jamoatga foydasi tegish. Ozbekiston
                    nomini xam jaxonga tanitishdan iborat bo'lib o'zbekiston IT
                    maxsulotlari johonda raqobatbardosh maxsulotlarga
                    aylantirish.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
