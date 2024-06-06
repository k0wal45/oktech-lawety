import classes from '../backgrounds.module.css';
import WhyUsElement from './WhyUsElement';

const WhyUs = () => {
  return (
    <section className={classes.bgCircles + ' flex flex-col gap-24 overflow-y-hidden bg-fixed p-4 py-24'}>
      <WhyUsElement
        header="Czemu my"
        title="Całodniowa obsługa wynajmu lawety"
        text="Świadczymy usługi wynajmu lawet dostępne 7 dni w tygodniu. Zapewniamy szybki, przystępny cenowo, przyjazny i niezawodny pojazd."
        list1="Laweta do 3.5 tony, dzięki czemu każdy może nią jechać. Więc jeżeli potrzebujesz lawety i masz prawojazdy kategorii B zgłoś się już dziś"
        list2="Oferujemy szybkie, przystępne cenowo, przyjazne i niezawodne usługi wynajmu lawet"
        photo="laweta8.jpeg"
      />

      <WhyUsElement
        header="Czemu my"
        title="Pomoc w Nagłych Wypadkach"
        text="Transport pojazdu może być trudne bez odpowiedniego sprzętu lub dobrze przystosowanego pojazdu. Nie ryzykuj dalszych uszkodzeń swojego samochodu, i wynajmij lawetę już dziś"
        list1="Nasza laweta jest nowoczesna, czysta i wyposażona w profesjonalny sprzęt, aby zapewnić bezpieczny transport"
        list2="Proces wynajmu naszej lawety jest szybki i prosty, bez zbędnych formalności. Oferujemy elastyczne godziny wynajmu, dostosowane do Twojego harmonogramu"
        photo="laweta9.jpg"
      />
    </section>
  );
};

export default WhyUs;
