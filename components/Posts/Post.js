import { Container, Row, Col} from 'reactstrap'
import Link from 'next/Link'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle

}from 'reactstrap';

const Post =({id,name, description}) => (


    <Container>
        <Row>
            <Col>
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle> <h2>{name}</h2> </CardTitle>
                            <CardSubtitle>{description}</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                        </CardBody>
                    </Card>
                 </div>
            </Col>
        </Row>
    </Container>

);


export default Post;