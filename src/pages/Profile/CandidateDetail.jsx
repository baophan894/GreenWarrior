import { Col, Row } from "antd";
import SampleProfile from "./SampleProfile";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Profile from "./Profile";
import NavbarLogin from "../NavbarLogin";
import Footer from "../Footer"

function CandidateDetail() {
  return (
    <>
      <NavbarLogin/>
      <div className="p-8">
      <Row gutter={20} className="mt-4">
        <Col span={18}>
          <Row gutter={20}>
            <Col span={15}>
              <Profile></Profile>
            </Col>
            <Col span={9}>
              <Certifications></Certifications>
            </Col>
          </Row>

          <Col span={30} className="mt-4">
            <Skills></Skills>
          </Col>
        </Col>
        <Col span={6}>
          <SampleProfile></SampleProfile>
        </Col>
      </Row>
      <Row gutter={20}></Row>
    </div>
    <Footer/>
    </>
    
  );
}

export default CandidateDetail;
