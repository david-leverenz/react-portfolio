// Contact form.  Uses the form I created in Bootsrap.
import Form from '../Form';

const Contact = ({handlepagechange}) => {
    handlepagechange('contact')
    return (
                <div className="container">
            <div >
                <div className="row">
                    <div className='col'>
                        <h2 className="ms-2 text-secondary">Contact Me</h2>
                    </div>
                </div>
            </div>
            <div><Form />
            </div>
        </div>
    )
}

export default Contact