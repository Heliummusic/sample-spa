import Layout from '../components/Layout/index'
  import { Jumbotron, Button } from 'reactstrap';


export default () => (

    <Layout>

        <div>
            <Jumbotron>
                <h1 className="display-3">Welcome to Next!</h1>
                <p className="lead">Welcome to the Nextjs sample project</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Saber mas</Button>
                </p>

            </Jumbotron>
        </div>

    </Layout>

);

