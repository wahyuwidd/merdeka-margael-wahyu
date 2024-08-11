'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  const typedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: ["Merdeka", "Abadi", "Nan Jaya"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
        cursorChar: '', 
      };

      // @ts-ignore
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <h3 className="text" ref={typedRef}></h3>;
};

export default TypedText;
