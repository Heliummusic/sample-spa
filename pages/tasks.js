import Layout from '../components/Layout/index'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Progress } from 'reactstrap';

export default () => (

    <Layout>

        <div className="p-3 my-2 rounded">
            <Toast>
                <ToastHeader>
                    Task !
                </ToastHeader>
                <ToastBody>
                    Some body for the toast
                </ToastBody>
                <Progress striped value={2 * 5} />
            </Toast>


        </div>

        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
                <ToastHeader>
                    Task 2
                </ToastHeader>
                <ToastBody>
                    Some body text
                </ToastBody>
                <Progress striped value={50} />

            </Toast>
        </div>

        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
                <ToastHeader>
                    Task 3
                </ToastHeader>
                <ToastBody>
                    Third Toast
                </ToastBody>
                <Progress striped value={2 * 5} />

            </Toast>
        </div>

    </Layout>

);

