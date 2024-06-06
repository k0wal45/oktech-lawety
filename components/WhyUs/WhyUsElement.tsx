import AppearFromBottom from '@/Animations/AppearFromBottom';
import Image from 'next/image';

import { FaCheck } from 'react-icons/fa';

const WhyUsElement = ({
  header,
  title,
  text,
  list1,
  list2,
  photo,
}: {
  title: string;
  header: string;
  text: string;
  list1: string;
  list2: string;
  photo: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:even:flex-row-reverse">
      <AppearFromBottom>
        <div className="flex w-full max-w-2xl flex-col items-start justify-center gap-4">
          <p className="text-lg font-black uppercase tracking-widest text-neutral-600">{header}</p>
          <h2 className="text-5xl font-bold leading-[1.3]">{title}</h2>
          <p className="my-4 text-xl leading-normal text-neutral-600 lg:text-2xl">{text}</p>
          <ul className="flex flex-col gap-8 font-semibold">
            <li className="flex items-start justify-start gap-4">
              <div className="rounded-full border-4 border-neutral-900 bg-primary p-2 text-2xl text-neutral-900">
                <FaCheck />
              </div>
              <p className="text-xl text-neutral-800">{list1}</p>
            </li>
            <li className="flex items-start justify-start gap-4">
              <div className="rounded-full border-4 border-neutral-900 bg-primary p-2 text-2xl text-neutral-900">
                <FaCheck />
              </div>
              <p className="text-xl text-neutral-800">{list2}</p>
            </li>
          </ul>
        </div>
      </AppearFromBottom>
      <AppearFromBottom>
        <Image
          width={700}
          height={400}
          src={'/img/' + photo}
          alt=""
          className="h-[23rem] w-[40rem] rounded-xl object-cover"
        />
      </AppearFromBottom>
    </div>
  );
};

export default WhyUsElement;
