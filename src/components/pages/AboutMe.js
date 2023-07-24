// Importing picture for the page.
import Header from '../Header'

const AboutMe = ({handlepagechange}) => {
handlepagechange('aboutMe')
    // I am going back and forth about the placement of the picture which is why I left the commented out header in the div.  Bootstrap helped me to get the text centered on the page.
    return (
        <div className="container" id="aboutMe">
            <div className="row">
                <div className='col'>
                    <h2 className="text-secondary ms-2">About Me</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 ms-5 pt-4 ps-5"><Header /></div>
                            <div className="col-8">
                                <div className="pt-3">
                                    <p className="text-center ps-5 pe-5 pb-3 pt-2 mt-2 bg-secondary rounded text-light fs-5 lh-lg">

                                        I've worked with and around developers my entire career which includes management of professional services, consulting, product management, technical support, content management and some sales.  What our development teams were able to do with code always fascinated me.  As a result I did a lot of work in MS Access because I was able to build applications without needing knowledge of coding, per se.  Recently I decided to take a coding class to learn how to do things the right way.  Checkout my Portfolio page to see a few of the things I created in class.  I hope you like them.
                                    </p>
                                </div>


                            </div>
                            <div className='col'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe