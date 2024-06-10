import Image from 'next/image';
import classes from '../backgrounds.module.css';

const HeroAbout = () => {
  return (
    <section
      className={
        classes.bgTriangle +
        ' relative flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-y-hidden p-4 py-36 text-center'
      }
    >
      <p className="max-w-2xl gap-4 text-lg font-black uppercase tracking-widest text-primary">O nas</p>
      <h4 className="max-w-2xl text-5xl font-bold leading-[1.3]">Wynajem autolawety w Katowicach</h4>

      <Image
        width={1000}
        height={700}
        src="/img/laweta1.jpg"
        alt=""
        className="z-10 max-h-[35rem] w-[64rem] rounded-xl object-cover"
      />

      <div className={classes.bgGradientBlack + ' absolute bottom-0 left-0 h-[30rem] w-full bg-fixed'}></div>
    </section>
  );
};

export default HeroAbout;
