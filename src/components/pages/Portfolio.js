// Portfolio page.  Brings in the main portfolio page.
import PortfolioImages from '../PortfolioImages'

// handlepagechange set the value of the current page so I can run logic on it.
const Portfolio = ({ handlepagechange }) => {
    handlepagechange('portfolio')

    return (
        <div className="container">
            <div className="row">
                <div className='col'>
                    <h2 className="ms-2 text-secondary">Portfolio</h2>
                </div>
            </div>
            <div><PortfolioImages /></div>
        </div>
    )
}

export default Portfolio