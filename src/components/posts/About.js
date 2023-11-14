import "../posts/postCss/About.css"
import aboutimg from "../../assets/aboutimg.jpg"




export const About = () => {


    return (
        <>

            <div className="about-whole-box">



                <div className="about-box">

                    <div>
                       

                        <p>Ramblings Vintage started in Boston, MA back in 2013. This side-project is a way to share my passion for quality, sustainable clothing.

                            As a New England native with years of experience in retail, I've always understood the importance of having durable, high-quality clothing. </p>


                        <p>At Ramblings Vintage, we specialize in curating an exquisite collection of "Made in USA" goods from the pre-2000s era. Each piece in our
                            collection is carefully selected to reflect the craftsmanship and artistry of a time when fashion was built to last. Our dedication to
                            preserving the stories woven into each garment is unwavering, and we take immense pride in offering you a carefully curated selection of
                            vintage treasures.</p>

                        <p>We believe in the enduring value of vintage fashion. Our emphasis on quality is reflected in our commitment to sourcing garments that have
                            stood the test of time and are still in exceptional condition. Each piece in our collection is a testament to the timeless craftsmanship
                            that is often lacking in today's fast-fashion culture.

                            Furthermore, sustainability is at the core of our business. By giving new life to pre-loved garments, we contribute to reducing the fashion
                            industry's environmental footprint. Choosing vintage fashion means you're making a conscious choice to support sustainable and eco-friendly
                            practices, one stylish piece at a time.</p>



                    </div>

                </div>
                <div className="right-side">

                    <div className="about_header_style">
                        <div className="about_header">
                           
                                ABOUT US
                        </div>
                    </div>

                    <div className="about-image-box">

                        <div><img className="aboutimg" src={aboutimg} alt="logo" /></div>

                    </div>








                </div>
            </div>
        </>

    )

}