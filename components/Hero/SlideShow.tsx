'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const colors = ['laweta2.jpg', 'laweta1.JPEG', 'laweta3.JPEG', 'laweta4.JPEG'];
const delay = 6500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef: any = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden brightness-[.3]">
      <div
        className="h-full w-full whitespace-nowrap duration-1000 ease-linear"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((photo, index) => (
          <Image
            width={1080}
            height={1500}
            alt="Laweta do przewożenia aut"
            src={'/img/' + photo}
            className="inline-block h-full w-full object-cover"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
