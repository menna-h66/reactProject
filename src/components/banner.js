import React, { useState, useEffect } from 'react';
import { Link } from '@mui/material';
import { FaArrowRightLong } from 'react-icons/fa6';
import bannerImg from '../assets/banner-img.svg';

function Banner() {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const toRotate = ['FrontEnd Developer', 'Web Developer'];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]); 

  const tick = () => {
    const i = loopNumber % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(500);
    }
  };

  return (
    <section className='Banner' id="home">
      <div className='container'>
        <div className='banner_info'>
          <h4>Welcome All In My Portfolio</h4>
          <h1>Hi! I'm Menna <p className='banner_info_P'></p> Allah Hany Fathy, <span className='Wrap'>{text}</span></h1>
          <p>Hello Everyone, I have 8 years of experience in web development.</p>
          <Link className='banner_info_link' href='#'>
            Let's Connect <FaArrowRightLong className='icon' />
          </Link>
        </div>
        <div className='banner_img'>
          <img src={bannerImg} alt='Banner' />
        </div>
      </div>
    </section>
  );
}

export default Banner;
