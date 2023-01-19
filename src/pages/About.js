import '../styles/about.css'
import about_img from '../img/home_img2.jpg'

const About = () => {
    return (
        <div className='about'>
            
            <div className="info-container-about">
                <div className="img-about-container">
                    <img  alt='img-about' className="img-about" src={about_img} />
                </div>
                <div className="info-about">
                    <h2 className="title-about">Our Story</h2>
                    <div className="underline-about"></div>
                    <p className="text-about">Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Fugiat accusantium 
                        sapiente tempora sed dolore esse deserunt 
                        eaque excepturi, delectus error accusamus 
                        vel eligendi, omnis beatae. Quisquam, dicta.
                        Eos quod quisquam esse recusandae vitae 
                        neque dolore, obcaecati incidunt sequi 
                        blanditiis est exercitationem molestiae 
                        delectus saepe odio eligendi modi porro 
                        eaque in libero minus unde sapiente 
                        consectetur architecto. Ullam rerum, nemo 
                        iste ex, eaque perspiciatis nisi, eum totam 
                        velit saepe sed quos similique amet. Ex, 
                        voluptate accusamus nesciunt totam vitae 
                        esse iste.</p>
                </div>
            </div>
        </div>
    )
}

export default About;