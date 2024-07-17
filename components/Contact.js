import { FaPaperPlane } from "react-icons/fa";


export default function Contact() {

    const gtag_report_conversion_6 = () => {
        let callback = function () {
            if (typeof url != "undefined") {
                    //window.location = url;
            }
        };
        gtag("event", "conversion", {
            send_to: "AW-618975445/c0XLCITZiZIZENWhk6cC",
            event_callback: callback,
        });
        return false;
    }
    
    return (
        <div>
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14366.639113785855!2d-80.1404425!3d25.814796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901ae341963ad%3A0xe0ed276ec964bb80!2sDaniel%20Gologorsky%20MD%20%7C%20Miami%20Eye%20%26%20Retina%20%7C%20Ophthalmology!5e0!3m2!1sen!2sus!4v1720748390686!5m2!1sen!2sus"
                    width="400" height="300" loading="lazy"></iframe>
            </figure>
            </section>

            <section className="contact-form">

                <h3 className="h3 form-title">Contact Form</h3>

                <form action="https://formspree.io/mpzyppro" className="form" data-form>

                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input/>

                        <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input/>
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

                    <button aria-label="contact-btn" className="contact-section-form-submission-btn form-btn bg-blue-500" type="submit" onClick={gtag_report_conversion_6} disabled data-form-btn>
                        <FaPaperPlane />
                    <span>Send Message</span>
                    </button>
                </form>
            </section>
        </div>
  )
}
