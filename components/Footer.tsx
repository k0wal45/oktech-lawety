import classes from './backgrounds.module.css';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className={
        classes.bgGradientBlack +
        ' flex w-full flex-col items-center justify-between gap-8 p-4 text-xl text-white lg:flex-row lg:px-12'
      }
    >
      <p>Copyright © {year} - All right reserved</p>
      <p>
        Created by:{' '}
        <a href="https://lunarisweb.pl/" className="underline">
          Lunaris Web
        </a>
      </p>
    </footer>
  );
};

export default Footer;
