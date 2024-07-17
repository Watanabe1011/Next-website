// import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { useContext } from "react";
import { ImLocation2 } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt,FaChevronDown, FaFax,FaStar,FaLinkedin,FaRssSquare } from 'react-icons/fa';
import { ButtonGroup } from 'react-bootstrap';
import { Lang_Mode } from '../context/context';
import { avatar_url } from '../const/data'
import siteMetadata from '../utils/siteMetaData';
import Toggle from './Toggle'

export default function Sidebar() {

  const [countries] = useState([
    { code: 'fi fi-us mr-1 text-xl', imgSrc:'/assets/img/flags/us.webp', title: 'En'},
    { code: 'fi fi-es mr-1 text-xl', imgSrc:'/assets/img/flags/es.webp', title: 'Es'},
    { code: 'fi fi-ru mr-1 text-xl', imgSrc:'/assets/img/flags/ru.webp', title: 'Ru'},
    { code: 'fi fi-il mr-1 text-xl', imgSrc:'/assets/img/flags/he.webp', title: 'He'}
  ]);

  const [selectedCode, setSelectedCountry] = useState('fi fi-us mr-1 text-xl');
  const { lang, setLangMode } = useContext(Lang_Mode);

  const selectLanguage = ( selected ) => {
                  
    const { code, title } = countries.find(({ code }) => selected === code);
    setSelectedCountry(selected);
    setLangMode(title);
  }

  return (
    <div className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image width={300} height={300} src={avatar_url} alt="Daniel Gologorsky"></Image>
        </figure>
        <div className="info-content">
          <h1 className="name" title="Daniel Gologorsky">Daniel Gologorsky, MD, MBA</h1>

          <p className="title">Ophthalmologist & Retina Specialist</p>
          <div id="job-contact" className="text-center text-uppercase small pt-2">
            <a
              className="sidebar-schedule-btn"
              href={siteMetadata.square}
              target="_blank"
              rel="nofollow noreferrer noopener">Schedule a consultation</a>
          </div>
        </div>

        <button aria-label="show-contact-btn" className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
            <FaChevronDown />
        </button>    
      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <IoMailSharp />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a className="sidebar-email-btn contact-link"
                  href="mailto:support@miamiretina.com"
                target="_blank" rel="noopener noreferrer">{siteMetadata.email}</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <FaPhoneAlt />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a className="contact-link contact-section-call-btn" href="tel:3059023200">{siteMetadata.phone}</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <FaFax />
            </div>
            
            <div className="contact-info">
              <p className="contact-title">Fax</p>
              <a className="contact-link contact-section-call-btn" href="fax:305-834-4371">{siteMetadata.fax}</a>
            </div>
          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ImLocation2 />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              
              <address>
                  <a className="contact-section-get-direction-btn contact-link"
                    href="https://www.google.com/maps/place/4308+Alton+Road+Suite+610+Miami+Beach+FL+33140/@25.8135422,-80.1456993,17z"
                    target="_blank" rel="noopener noreferrer"> {siteMetadata.location}<br />Miami Beach, FL 33140</a></address>
            </div>
                
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaStar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Reviews</p>
              <a className="contact-link" href={siteMetadata.review}
                    target="_blank"
                    rel="noopener noreferrer">
                    Healthgrades Reviews
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <div className='lang-mode'>
            <ButtonGroup>
              {countries.map(({ code, imgSrc, title }) => (
                <button aria-label={code} className={selectedCode == code ? 'lang-btn d-flex items-center mx-2 selected' : 'lang-btn d-flex items-center mx-2'} key={code} onClick={() => selectLanguage(code)} ><Image width={30} height={20} src={imgSrc} className={code} alt={code} /><span>{title}</span></button>
              ))}
            </ButtonGroup>
        </div>
        <div className='side-footer mt-3'>
          <div className='social'>
            <ul className="social-list">
              <li className="social-item">
                <a href={siteMetadata.linkedin} target="_blank" className="social-link" rel="noreferrer" aria-label='daniel-linkedin'>
                  <FaLinkedin />
                </a>
              </li>
              <li className="social-item">
                <a className="social-link"
                    href={siteMetadata.social}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    aria-label='daniel-social'
                >
                  <FaRssSquare />
                </a>
              </li>
              <li className="social-item">
                <Toggle/>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}
