import Layout from '../components/Layout/index'
import {Jumbotron, Button, Toast, ToastHeader, ToastBody, Progress} from 'reactstrap';
import D3Chart from "./D3Chart";
import Container from "react-bootstrap/Container";
import React from "react";

import chartWrapper from "./chartWrapper";

export default () => (


    <Layout>

        <div className="p-3 my-2 rounded">
            <Toast>
                <ToastHeader>
                    Task !
                </ToastHeader>
                <ToastBody>
                    <Container>
                    <chartWrapper></chartWrapper>
                     </Container>
                </ToastBody>
             </Toast>
        </div>

    </Layout>

);
