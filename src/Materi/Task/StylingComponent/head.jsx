import React from "react";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "react-bootstrap";


export default class Head extends React.Component{

    render() {
        return(
            <Container fluid={true} className="head py-5 text-center bg-image">
                <Row className="row py-lg-5">
                    <Col lg={6} md={8} className="mx-auto" >
                    <h1 class="fw-light fw-bold">Raih profesi idamanmu,kami bantu</h1>
                    <h1 class="fw-light fw-bold">sampai diterima kerja</h1>
                    <p class="lead">Tanpa biaya pendaftaran!</p>
                    <p>
                        <Button variant="primary">Daftar Sekarang</Button>
                    </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}