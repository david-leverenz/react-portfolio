// I decided to put all of the content on this page instead of linking it to something else.

// handlepagechange set the value of the current page so I can run logic on it.
const Resume = ({ handlepagechange }) => {
    handlepagechange('resume')
    return (
        <div className="container">
            <div className="row ps-2">
                <div className='col'></div>
                <h2 className="text-secondary">Resume</h2>
                <div className="pe-3">
                    <div className="container bg-secondary">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-5 pt-3">
                                <a href="https://docs.google.com/document/d/1g2UvsJ7degNwZ6AJhpDq_DQFWLt868BzaVKaikYU0MM/edit?usp=sharing" className="text-decoration-none text-light">
                                    <h4>Click here for my resume</h4>
                                </a>

                                <h5 className="text-decoration-none text-light">Qualifications</h5>
                                <ul className="text-decoration-none text-light">
                                    <li>Over 30 years experience in the technical field.</li>
                                    <li>Proven managerial track record for developing highly productive teams.</li>
                                    <li>Ability to solve problems quickly drive successful projects.</li>
                                    <li>Recent completion of full stack coding bootcamp.</li>
                                    <li>Excellent knowledge of Microsoft Office including Excel and Access.</li>
                                </ul>

                            </div>
                            <div className='col'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume