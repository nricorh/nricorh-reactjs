import React from "react";
import "./index.css"
import { Col, Container, Row } from "react-bootstrap";

export default class Content extends React.Component {
    render () {
        return (
            <Container className="px-4 py-5">
                <Row className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <Col className="feature col" >
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                        </div>
                        <p className="tittle fs-5">Apa sih eduwork itu?</p>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, obcaecati iure ad qui exercitationem in optio iste sapiente dolore eveniet, laborum aperiam, voluptate iusto! Rerum magnam aspernatur quos nisi. Optio.
                        </p>
                    </Col>
                    <Col className="feature col" >
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                        </div>
                        <p className="tittle fs-5">Program ISA</p>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, obcaecati iure ad qui exercitationem in optio iste sapiente dolore eveniet, laborum aperiam, voluptate iusto! Rerum magnam aspernatur quos nisi. Optio.
                        </p>
                    </Col>
                    <Col className="feature col" >
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                        </div>
                        <p className="tittle fs-5">Berbagai Mentor</p>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, obcaecati iure ad qui exercitationem in optio iste sapiente dolore eveniet, laborum aperiam, voluptate iusto! Rerum magnam aspernatur quos nisi. Optio.
                        </p>
                    </Col>
                    <Col className="feature col" >
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                        </div>
                        <p className="tittle fs-5">Penyaluran Kerja</p>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, obcaecati iure ad qui exercitationem in optio iste sapiente dolore eveniet, laborum aperiam, voluptate iusto! Rerum magnam aspernatur quos nisi. Optio.
                        </p>
                    </Col>
                    <Col className="feature col" >
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                        </div>
                        <p className="tittle fs-5">Ilmu Praktis</p>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, obcaecati iure ad qui exercitationem in optio iste sapiente dolore eveniet, laborum aperiam, voluptate iusto! Rerum magnam aspernatur quos nisi. Optio.
                        </p>
                    </Col>
                    <Col className="feature col" >
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                        </div>
                        <p className="tittle fs-5">Fleksibel Intensif</p>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, obcaecati iure ad qui exercitationem in optio iste sapiente dolore eveniet, laborum aperiam, voluptate iusto! Rerum magnam aspernatur quos nisi. Optio.
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}