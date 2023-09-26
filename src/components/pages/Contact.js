// Contact form.  Uses the form I created in Bootsrap.
import Form from '../Form';

// handlepagechange set the value of the current page so I can run logic on it.
const Contact = ({ handlepagechange }) => {
    handlepagechange('contact')
    return (
        <div className="container">
            <div >
                <div className="row">
                    <div className='col'>
                        <h2 className="ms-2 text-secondary">Contact Me - david.leverenz@gmail.com</h2>
                    </div>
                </div>
            </div>
            <div><Form />
            </div>
        </div>
    )
}

export default Contact