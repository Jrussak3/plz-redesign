export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "O aplikacji PLZ",
    items: [
      {
        question: "Czym jest PLZ?",
        answer:
          "PLZ to platforma składająca się z wielofunkcyjnej aplikacji mobilnej i panelu administracyjnego. Jest to autorski, polski produkt stworzony na potrzeby zmieniającego się świata. Platforma skierowana jest do szerokiego grona odbiorców zarówno indywidualnych jak i instytucjonalnych. Umożliwia zakładanie społeczności, skupia się na współpracy międzysektorowej. Każdy użytkownik może utworzyć swój profil, zapraszać znajomych, rozmawiać, dołączać do społeczności oraz korzystać z ofert w aplikacji.",
      },
      {
        question: "Jak jest zbudowany PLZ?",
        answer:
          'Aplikacja podzielona jest na zakładki "Ja", "Czat", "Razem", "Zakupy" i "Smart".\n' +
          "- JA - to centrum profilu użytkownika, profil, zainteresowania, aktywności, zapisane wydarzenia i preferencje.\n" +
          "- CZAT - odpowiada za zakładkę komunikacyjną. Rozmowy z użytkownikami i znajomymi.\n" +
          "- RAZEM - Twoje społeczności w jednym miejscu czyli grupy wspólnego działania z wbudowanymi opcjami czatu i innymi opcjami wspólnych inicjatyw.\n" +
          "- ZAKUPY - Marketplace lokalny i kooperacyjny — produkty, usługi, oferty od społeczności i partnerów.\n" +
          "- SMART - Twoje finanse, inteligentne powiadomienia — to, co ważne dla Ciebie.",
      },
      {
        question: "Co oznacza nazwa PLZ?",
        answer:
          "- PLZ to skrót od PLATFORMA LOKALNYCH ZASOBÓW\n" +
          "- PL to Polska dla nowego pokolenia - Generacji Z\n" +
          "- Planeta, Ludzie, Zarządzanie - czyli narzędzie do organizacji i komunikacji społecznej na poziomie lokalnym\n" +
          "- PLZ to również oznaczenie kodowe polskiego złotego przed denominacją w roku 1995 (kod ISO 4217 dla waluty polskiej, zł)",
      },
      {
        question: "Czym jest społeczność?",
        answer:
          "Sercem naszej Aplikacji jest zakładka RAZEM – to tam znajdują się wszystkie społeczności. Społeczność to tematyczna grupa, która działa w różnych obszarach (w różnych kategoriach). Uczestnik ma w niej wiele możliwości. Osoba zarządzająca taką społecznością ma bazę wszystkich członków w jednym miejscu. Zarządzanie jest łatwe i intuicyjne.",
      },
      {
        question: "Jakie funkcjonalności znajdę w społeczności?",
        answer:
          "Podstawowymi funkcjonalnościami w społeczności są:\n" +
          "Czat – umożliwia rozmowy, wymienianie się opiniami, wysyłanie zdjęć i linków. Masz możliwość rozmawiania na czacie grupowym ze wszystkimi uczestnikami społeczności lub na czacie prywatnym z administratorem społeczności.\n" +
          "Tablica – znajdziesz tam informacje, ogłoszenia, artykuły, ciekawostki itp.\n" +
          "Dla mnie – oferta produktów tej społeczności – masz możliwość zakupu produktów, pobrania darmowych kuponów, rabatów, przekazania darowizn, opłat.\n" +
          "Wydarzenia\n" +
          "Mam – produkty, wydarzenia, w których zostały przez Ciebie zakupione, pobrane w tej społeczności.\n" +
          "Głosowania i ankiety\n" +
          "Zadania i projekty\n" +
          "Moja karta – unikatowa karta członka społeczności. W zależności od rodzaju społeczności pewne funkcjonalności mogą być ograniczone.",
      },
      {
        question: "Do czego służy kod społeczności i jak do nich dołączać?",
        answer:
          "Każda społeczność posiada swój własny, unikatowy kod. Dzięki niemu możesz do niej dołączyć. Występuje on w formie kodu QR oraz ciągu znaków (np. COOP_TECH_HUB).\n" +
          "Do społeczności możesz dołączyć po zeskanowaniu lub wpisaniu kodu jeśli go znasz (administrator społeczności może Ci go udostępnić). Możesz także dołączyć do społeczności otwartych – znajdziesz je w katalogu głównym (zakładka RAZEM po wybraniu przycisku z plusikiem).",
      },
      {
        question: "Czym jest kod QR i gdzie go znajdę w PLZ?",
        answer:
          "Kod QR to graficzna forma zapisu różnego rodzaju danych. W naszej aplikacji kod QR ma wiele zastosowań. Możesz znaleźć go:\n" +
          "- przy swojej karcie w społeczności\n" +
          "- po zeskanowaniu administrator może nadać Ci punkty lub Cię zidentyfikować\n" +
          '- w zakładce "Ja" obok Twojego zdjęcia po zeskanowaniu przez innego użytkownika aplikacja zaprezentuje informację o uczestnictwie w społecznościach oraz liście świadczonych usług przez użytkownika w aplikacji.\n' +
          "Ta funkcjonalność umożliwia również szybkie dodanie innego użytkownika aplikacji do listy kontaktów na czacie prywatnym w zakładce Czat.\n" +
          "- przy produkcie – po zeskanowaniu go możesz coś kupić/przekazać darowiznę w formie kodu społeczności\n" +
          "- po zeskanowaniu możesz dołączyć do danej społeczności",
      },
      {
        question: "Gdzie w aplikacji mogę wprowadzić kod społeczności i kod QR?",
        answer:
          "W prawym dolnym rogu aplikacji istnieje zakładka SMART. Po kliknięciu w ikonkę kodu otwiera nam się skaner, którym możemy zeskanować konkretny kod, jest także możliwość wpisania kodu ręcznie.",
      },
      {
        question: "Jak dołączyć do innych społeczności?",
        answer:
          "Aby dołączyć do innych społeczności musisz wpisać lub zeskanować jej kod używając skanera w aplikacji. Jeżeli społeczność jest zamknięta będziesz musiał/musiała zaczekać na akceptację dołączenia przez administratora.",
      },
      {
        question: "Jak mogę założyć grupę do rozmów ze znajomymi i dodawać ich do swoich kontaktów?",
        answer:
          'Kliknij zakładkę Razem i wybierz kategorię "Grupy prywatne", kliknij przycisk Plus + i utwórz grupę do rozmów. W każdej chwili możesz zapraszać do niej swoich znajomych. W takiej grupie znajdziesz również funkcjonalność stworzenia listy np. zakupów, zadań lub rzeczy do zrobienia. Możesz ją wykorzystać przy okazji organizowania wspólnych aktywności z przyjaciółmi i bliskimi.\n' +
          'Jeśli chcesz porozmawiać z kimś prywatnie w zakładce "Czat" za pomocą przycisku z plusikiem możesz zapraszać swoich znajomych ze swojej książki telefonicznej. W tym celu aplikacja poprosi Cię o zgodę do Twojej książki adresowej. Wybrany numer jest zanonimizowany i nie informuje kogo dotyczy. System zapisze jedynie inicjały imienia i nazwiska wskazanej osoby z listy kontaktów.',
      },
      {
        question: "Jak zaprosić innych do korzystania z PLZ?",
        answer:
          "Jeśli chcesz zaprosić innych do PLZ masz kilka możliwości. Możesz udostępnić kod społeczności na wybranym przez Ciebie komunikatorze, który udostępni się z instrukcją dołączenia do PLZ. Kod społeczności znajdziesz klikając w logo w społeczności w górnej części aplikacji.",
      },
      {
        question: "Czy mogę zsynchronizować kalendarze i ustawiać przypomnienia?",
        answer:
          'Oczywiście w aplikacji PLZ istnieje możliwość synchronizacji kalendarza i ustawienia przypomnień. Wejdź w zakładkę SMART, następnie kliknij w pole "Kalendarz PLZ" i włącz opcję "Synchronizuj". Aplikacja może potrzebować udzielenia dostępu do Twojego kalendarza, co możesz wykonać wchodząc w ustawienia telefonu.',
      },
    ],
  },
  {
    title: "Dane osobowe",
    items: [
      {
        question: "Kto jest administratorem aplikacji?",
        answer:
          "Współadministratorami danych Platformy PLZ są:\n" +
          "- Spółdzielnia z siedzibą w Warszawie, ul. Grażyny 13, 02-548 Warszawa, wpisaną do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego pod nr KRS 0000894451, nr NIP: 527295541.\n" +
          "- Z GO S.A. z siedzibą w Warszawie, ul. Grażyny 13, 02-548 Warszawa, wpisana do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS 0000646372, NIP: 6751565680.",
      },
      {
        question: "Jakie dane muszę podać przy rejestracji i dlaczego?",
        answer:
          "Przy rejestracji musisz podać swoje: imię, nazwisko, e-mail, nr telefonu, datę urodzenia. Służy to weryfikacji konta użytkownika a podawane dane nie są dalej przetwarzane. W aplikacji mogą zarejestrować się tylko użytkownicy, którzy mają ukończony 13 rok życia. Podanie daty urodzenia pomaga nam zarządzać funkcjonalnościami, zgodami oraz publikowanymi treściami i produktami. Niektóre z nich są wyświetlane tylko dla pełnoletnich użytkowników.",
      },
      {
        question: "Jak mogę usunąć konto w aplikacji?",
        answer:
          'Aby usunąć konto należy postępować zgodnie z regulaminem aplikacji – konto można usunąć samodzielnie w zakładce "Ja" po kliknięciu w zębatkę w prawym górnym rogu. Chęć usunięcia konta musisz potwierdzić wpisując hasło swojego konta.',
      },
      {
        question: "Jak aplikacja dba o prywatność i bezpieczeństwo? Czy moje dane są bezpieczne?",
        answer:
          "Tak, dane są bezpieczne.\n" +
          "- Przetwarzanie danych osobowych odbywa się zgodnie z treścią Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.\n" +
          "- Szczegółowe warunki przetwarzania danych zawarte są w klauzuli informacyjnej RODO stanowiącej załącznik do regulaminu.\n" +
          "- Regulamin Aplikacji znajduje się do pobrania na stronie: https://static.plz.pl/regulamin-html",
      },
    ],
  },
  {
    title: "Aplikacja technicznie",
    items: [
      {
        question: "Gdzie mogę pobrać aplikację?",
        answer: "W zależności od posiadanego oprogramowania możesz pobrać w:\n- App Store – iOS\n- Google Play – Android",
      },
      {
        question: "O jakie zgody prosi aplikacja użytkownika by umożliwić działanie niektórych funkcji?",
        answer:
          "Aby PLZ sprawnie działało musisz zezwolić na dostęp aplikacji do Twojego aparatu (byś mógł używać skaner) oraz do książki telefonicznej (abyś mógł zapraszać swoich znajomych).",
      },
      {
        question: "Dlaczego aplikacja prosi o podanie daty urodzenia?",
        answer:
          "W aplikacji mogą się zarejestrować różni użytkownicy, co najmniej, muszą mieć ukończony 13 rok życia. Podanie daty urodzenia pomaga nam zarządzać funkcjonalnościami, zgodami oraz publikowanymi treściami i produktami. Niektóre z nich wyświetlane są tylko dla pełnoletnich użytkowników.",
      },
      {
        question: "Jak mogę zmienić język aplikacji?",
        answer:
          "Podstawowym językiem aplikacji jest język polski. Jeśli chcesz go zmienić, musisz zmienić język w ustawieniach Twojego telefonu. Aplikacja automatycznie dostosuje się do wybranego języka urządzenia - polskiego, angielskiego czy ukraińskiego. Dla pozostałych języków obcych aplikacja dostosuje angielski.",
      },
      {
        question: "Kim jest ZUZA?",
        answer:
          "ZUZA to bot PLZ, wysyła automatycznie komunikaty systemowe na czacie - np. istotne zmiany, komunikaty techniczne, powiadomienia dla użytkowników, przypomnienia.",
      },
      {
        question: "Jak mogę sprawdzić wersję aplikacji?",
        answer:
          'Wersję aplikacji znajdziesz w zakładce "Ja" na dolnym pasku menu. Następnie w prawym górnym rogu, kliknij zębatkę i wybierz opcję "O aplikacji".',
      },
      {
        question: "W jaki sposób mogę zaktualizować aplikację?",
        answer:
          'Aplikacja z reguły aktualizuje się automatycznie. W przypadku starszej wersji należy wejść do sklepu Google Play/App Store i wybrać opcję "Zaktualizuj"/"Uaktualnij".',
      },
      {
        question: "Co zrobić jeśli nie mogę się zalogować na nowym urządzeniu?",
        answer:
          "Sprawdź czy podany e-mail, telefon i hasło są prawidłowe oraz na nie zostało założone konto. Jeżeli wszystkie podawane dane są poprawne skontaktuj się z naszą obsługą klienta (mail).",
      },
    ],
  },
  {
    title: "Dla administratora społeczności",
    items: [
      {
        question: "Chcę mieć społeczność w PLZ, co powinienem zrobić?",
        answer: "",
      },
      {
        question: "Jak zacząć sprzedaż produktów w aplikacji?",
        answer:
          "Każda zainteresowana społeczność może uruchomić dostęp do bramki płatniczej poprzez formularz rejestracyjny. Należy skontaktować się z opiekunem społeczności w celu integracji z bramką płatniczą. Środki ze sprzedaży produktów będą wpływały na podany nr konta.",
      },
      {
        question: "Z jakiego operatora płatności korzysta aplikacja PLZ?",
        answer:
          "Platforma PLZ współpracuje z poniższymi serwisami:\n" +
          "Autopay S.A. z siedzibą w Sopocie, ul. Powstańców Warszawy 6, 81-718 Sopot, NIP 585-13-51-185\n" +
          "Fiserv Polska S.A., Aleje Jerozolimskie 100, 00-807 Warszawa, NIP 526-02-10-429",
      },
      {
        question: "Na czym polega integracja z operatorem płatności?",
        answer:
          "Integracja z operatorem płatności to techniczne połączenie aplikacji z bramką (np. Autopay), które umożliwia przyjmowanie i obsługę płatności (jednorazowych lub cyklicznych) bezpośrednio w aplikacji.",
      },
    ],
  },
];
