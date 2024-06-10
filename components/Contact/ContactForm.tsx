'use client';

import { Fragment, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { name, email, phone, message } = formData;

  const form: any = useRef();

  const onMutate = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (e.target.validate.checked) {
      console.log('validate');
      toast.error('Cos poszło nie tak, Skontaktuj się mailowo: lunarisweb.pl@gmail.com', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    if (!e.target.accpet.checked) {
      toast.error('Pamiętaj aby wyrazić zgodę na przetwarzanie danych na dole formularza', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    // Wyrażenia regularne do walidacji
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{9,15}$/;

    // Sprawdzanie pola "name"
    if (name.trim() === '') {
      toast.error('Nieprawidłowo wpisane imię', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    // Sprawdzanie pola "email"
    if (email.trim() === '') {
      toast.error('Nieprawidłowy adres e-mail', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    } else if (!emailRegex.test(email)) {
      toast.error('Nieprawidłowy adres e-mail', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    // Sprawdzanie pola "phone"
    if (phone.trim() === '') {
      toast.error('Nieprawidłowy numer telefonu', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    } else if (!phoneRegex.test(phone)) {
      toast.error('Nieprawidłowy numer telefonu', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    // Sprawdzanie pola "message"
    if (message.trim() === '') {
      toast.error('Cos poszło nie tak, Skontaktuj się mailowo: lunarisweb.pl@gmail.com', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    emailjs.sendForm('service_r8dmshk', 'template_pojq8ao', form.current, process.env.NEXT_PUBLIC_EMAIL_JS).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        toast.error('Cos poszło nie tak, Skontaktuj się mailowo: lunarisweb.pl@gmail.com', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        return;
      },
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    toast.success('Sukces', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <Fragment>
      <form
        className="flex w-[90vw] flex-1 flex-col rounded-l-xl bg-white p-4 text-start shadow-lg lg:w-[30rem]"
        onSubmit={handleSubmit}
        ref={form}
      >
        <p className="text-secondary text-lg font-bold">Masz pytania?</p>
        <p className="text-4xl font-bold">Napisz tutaj!</p>

        <label htmlFor="name" className="w-min whitespace-nowrap rounded-lg bg-white p-2">
          Imię i Nazwisko
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={onMutate}
          value={name}
          className="outlne-white mb-4 w-full rounded-xl border-2 border-base bg-white p-4 ring-white autofill:bg-white focus:bg-white"
          required
        />

        <label htmlFor="email" className="w-min whitespace-nowrap rounded-lg bg-white p-2">
          Twój e-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={onMutate}
          value={email}
          className="outlne-white mb-4 w-full rounded-xl border-2 border-base bg-white p-4 ring-white autofill:bg-white focus:bg-white"
          required
        />

        <label htmlFor="phone" className="w-min whitespace-nowrap rounded-lg bg-white p-2">
          Numer Telefonu
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={onMutate}
          value={phone}
          className="outlne-white mb-4 w-full rounded-xl border-2 border-base bg-white p-4 ring-white autofill:bg-white focus:bg-white"
          required
        />

        <input type="checkbox" name="validate" id="validate" className="h-0 w-0 scale-0" />

        <label htmlFor="message" className="w-min whitespace-nowrap rounded-lg bg-white p-2">
          Wiadomość
        </label>
        <textarea
          name="message"
          id="message"
          onChange={onMutate}
          value={message}
          className="outlne-white mb-4 h-48 w-full rounded-xl border-2 border-base bg-white p-4 ring-white autofill:bg-white focus:bg-white"
          required
        />

        <div className="flex w-full items-start gap-2">
          <input type="checkbox" name="accpet" id="accpet" className="block" required />
          <label htmlFor="accept" className="w-full text-xs text-neutral-700">
            Akceptując, wyrażasz zgodę na przetwarzanie Twoich danych osobowych przez właściciela strony oraz na
            otrzymywanie ofert i informacji handlowych na podany adres e-mail lub numer telefonu."
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-primary p-4 px-6 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none lg:text-xl"
        >
          {' '}
          Prześlij
        </button>

        <ToastContainer />
      </form>
    </Fragment>
  );
};

export default Form;
