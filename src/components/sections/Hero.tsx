import { useEffect, useState } from 'react';

function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    setAnimate(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{ transform: `translateY(${offsetY * 0.2}px)` }}
    >
      <div className={animate ? 'fade-in' : ''}>
        <h1>Techno Tech</h1>
        <p>Innovative solutions for a digital world</p>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
