import { useEffect, useState } from 'react';

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
      <h1>Techno Tech</h1>
    </section>
  );
}

export default Hero;
