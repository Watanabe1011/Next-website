import { useContext, useState, useEffect } from "react";
import parse from 'html-react-parser';

import { about_texts } from "../const/data";
import { Lang_Mode } from "../context/context";



export default function About() {
    const { lang } = useContext(Lang_Mode);
    const [about_text, setAboutText] = useState(about_texts.en);
    useEffect(() => {
        switch (lang) {
            case 'Es':
                setAboutText(about_texts.es);
                break;
            case 'He':
                setAboutText(about_texts.he);
                break;
            case 'Ru':
                setAboutText(about_texts.ru);
                break;
            default:
                setAboutText(about_texts.en);
                break;
    }
    }, [lang])
    
    return (
      <div>
        <header>
	        <h2 className="h2 article-title">About</h2>
        </header>
        <section className="about-text">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm" >
                            <div className="col-md-12">
                                    <div className="about-desc">
                                    { parse(about_text) } 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    
  )
}
