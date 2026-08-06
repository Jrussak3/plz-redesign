import imgLogo from "../../../Assets/dff59f9add33f17deb16905203fc8a27faaa7a2f.png";
import imgLogo1 from "../../../Assets/5847848ba298061f4994915c175a75057017a7b9.png";
import imgLogo2 from "../../../Assets/dd7e5ae7c8acf304feeecb5d167dc80fc07c54ad.png";

export const TESTIMONIALS = [
  {
    paragraphs: [
      "Zarządzanie ogólnopolskim stowarzyszeniem branżowym takim jak Polska Sieć Ekonomii wymaga częstego używania narzędzi cyfrowych. Przy około 100 członków rozproszonych po wszystkich polskich miastach akademickich, komunikacja, wymiana prac naukowych oraz spotkania muszą odbywać się zdalnie. Stosowane dotychczas technologie stały się zawodne - niedopasowane do działań stowarzyszenia rejestrowego, wymagające opłat jak dla korporacji, zbyt ciężkie i przeładowane.",
      "Dzięki PLZ stowarzyszenie ma jeden prosty kanał komunikacji, którym dostarczane są najważniejsze informacje. W PLZ pojawiają się zawiadomienia o Walnych Zgromadzeniach i prowadzone są zdalne głosowania. Z punktu widzenia oszczędności pracy, korzyść z aplikacji PLZ jest oczywista.",
    ],
    logoSrc: imgLogo,
    logoClassName: "size-[64px]",
    name: "Polska Sieć Ekonomii",
  },
  {
    paragraphs: [
      <>
        Pandemia COVID-19 uświadomiła wszystkim, że cyfryzacja to nie tylko dodatek do sprawdzonych procesów, ale konieczność w świecie XXI wieku.{" "}
        <span className="font-['Poppins:Medium',sans-serif]">
          Nie inaczej było w przypadku Ogólnopolskiego Porozumienia Związków Zawodowych – największej w Polsce centrali związkowej, która mierzyła się z trudnościami związanymi z zamykaniem zakładów, koniecznością przeprowadzania spotkań oraz głosowań w formie zdalnej i zmianą metod komunikacji.
        </span>
      </>,
      <>
        {`Aplikacja PLZ stała się nową „wirtualną tablicą związkową” dla ok. 30 ogólnopolskich związków zawodowych z branż od przemysłu, przez handel i usługi aż po administrację publiczną. `}
        <span className="font-['Poppins:Bold',sans-serif]">Związki zawodowe komunikują się w PLZ, pobierają składki członkowskie, głosują i działają w bezpiecznej, zaufanej przestrzeni w której dane należą do nich.</span>
      </>,
    ],
    logoSrc: imgLogo1,
    logoClassName: "h-[64px] w-[67px]",
    name: (
      <>
        {`Ogólnopolskie Porozumienie `}
        <br aria-hidden />
        Związków Zawodowych
      </>
    ),
  },
  {
    paragraphs: [
      "Fundacja Wolne Miejsce od lat organizuje jedne z największych w Polsce Śniadań Wielkanocnych i Wigilii dla samotnych i potrzebujących. W 2020 roku pandemia uniemożliwiła tradycyjne spotkania, więc zdecydowano się na mobilną wersję wydarzenia za pośrednictwem aplikacji PLZ. Wolontariusze dołączali do społeczności fundacji poprzez aplikację, znajdowali informacje i zadania, a dzięki czatowi utrzymywali stały kontakt z koordynatorami.",
      "Dzięki PLZ dostarczanie paczek z żywnością i upominkami dla potrzebujących stało się bardziej efektywne. Po akcji na czacie grupowym pojawiało się wiele pozytywnych komunikatów, a organizacja kolejnych edycji Śniadań Wielkanocnych i Wigilii była znacznie ułatwiona dzięki zbudowanej bazie wolontariuszy. Aplikacja PLZ umożliwiła skuteczne koordynowanie działań dla ponad tysiąca wolontariuszy, co przyczyniło się do usprawnienia dostaw paczek do kilkunastu tysięcy domów.",
    ],
    logoSrc: imgLogo2,
    logoClassName: "h-[64px] w-[100px]",
    name: "Fundacja wolne miejsce",
  },
];
