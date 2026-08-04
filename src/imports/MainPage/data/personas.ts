import imgPersonaAdamMask from "../persona-adam-mask.svg";
import imgPersonaAdamAvatar from "../persona-adam-avatar.svg";
import imgPersonaPiotrMask from "../persona-piotr-mask.svg";
import imgPersonaPiotrAvatar from "../persona-piotr-avatar.svg";
import imgPersonaTeresaMask from "../persona-teresa-mask.svg";
import imgPersonaTeresaAvatar from "../persona-teresa-avatar.svg";
import imgPersonaMonikaMask from "../persona-monika-mask.svg";
import imgPersonaMonikaAvatar from "../persona-monika-avatar.svg";
import imgPersonaEwaMask from "../persona-ewa-mask.svg";
import imgPersonaEwaAvatar from "../persona-ewa-avatar.svg";

export type PersonaKey = "adam" | "piotr" | "teresa" | "monika" | "ewa";

export type PersonaData = {
  name: string;
  role: string;
  paragraphs: [string, string, string];
  mask: string;
  avatar: string;
  wrapperClass: string;
  outerClipClass: string;
  innerClipClass: string;
};

export const PERSONAS: Record<PersonaKey, PersonaData> = {
  adam: {
    name: "Adam",
    role: "Związkowiec",
    paragraphs: [
      "Adam na co dzień walczy o prawa pracowników, ale formalności i komunikacja w Związku się dla niego drugim etatem.",
      "Adam stworzył na PLZ wirtualną tablicę związkową. Teraz publikuje komunikaty, które dzięki dedykowanym czatom i powiadomieniom push trafiają prosto na telefony członków. Funkcja zadań i projektów usprawniła działanie organizacji, a zintegrowane głosowania dały związkowcom realny wpływ na decyzje. Dodatkowo wbudowany system płatności w pełni zautomatyzował i zabezpieczył proces zbierania składek członkowskich.",
      "Dzięki PLZ Adam zyskał nowoczesne narzędzie do sprawnego zarządzania organizacją, a związek – silną, cyfrową tożsamość.",
    ],
    mask: imgPersonaAdamMask,
    avatar: imgPersonaAdamAvatar,
    wrapperClass: "size-[120px]",
    outerClipClass: "inset-0",
    innerClipClass: "inset-[5.57%_8.17%_-101.85%_5.98%] mask-position-[-7.18px_-6.69px] mask-size-[120px_120px]",
  },
  piotr: {
    name: "Piotr",
    role: "Samorządowiec",
    paragraphs: [
      "Piotr wie, że sercem każdej gminy są jej mieszkańcy i lokalny biznes.",
      "Dzięki tablicy na PLZ i kalendarzowi wydarzeń, gmina natychmiast dociera do mieszkańców, klientów i turystów bez wydatków na kampanie reklamowe. Respektowane w KRS głosowania stały się prostym narzędziem do błyskawicznych konsultacji społecznych, dzięki którym mieszkańcy czują się docenieni. Zintegrowana bramka płatnicza pozwoliła na wygodne rozliczanie opłat lokalnych, biletów parkingowych czy komunikacyjnych, a karta mieszkańca z systemem punktowym zmotywowała ludzi do zostawiania pieniędzy u lokalnych partnerów.",
      "Dzięki PLZ pieniądz zostaje lokalnie. Biznes zamiast używać zachodnich platform do promocji, współpracuje z miastem, przynosząc realne zyski.",
    ],
    mask: imgPersonaPiotrMask,
    avatar: imgPersonaPiotrAvatar,
    wrapperClass: "size-[120px]",
    outerClipClass: "inset-0",
    innerClipClass: "inset-[9.03%_-14.23%_-101.92%_3.45%] mask-position-[-4.142px_-10.841px] mask-size-[120px_120px]",
  },
  teresa: {
    name: "Teresa",
    role: "Spółdzielczyni",
    paragraphs: [
      "Budowanie lojalności klientów w świecie zdominowanym przez korporacyjne giganty wymagało od Teresy narzędzi, na które mały biznes rzadko może sobie pozwolić.",
      "Teresa wprowadziła swoją spółdzielnię do aplikacji PLZ. Ta niezależna przestrzeń cyfrowa dała jej zintegrowany system komunikacji i płatności w jednym miejscu. Dzięki bezpiecznej bramce płatniczej i funkcji PolCard Go, może przyjmować płatności zbliżeniowe telefonem. Codzienna komunikacja na czacie grupowym toczy się bez rozpraszaczy, a wbudowany system głosowań pozwolił prowadzić Walne Zgromadzenia online.",
      "Dzięki PLZ Teresa zjednoczyła i wzmocniła swoją spółdzielnię, budując silny, lojalny ekosystem wokół swojego biznesu.",
    ],
    mask: imgPersonaTeresaMask,
    avatar: imgPersonaTeresaAvatar,
    wrapperClass: "size-[120px]",
    outerClipClass: "bottom-[-87px] left-[-90px]",
    innerClipClass: "inset-[4.47%_-18.45%_-89.08%_2.38%] mask-position-[-92.86px_-98.363px] mask-size-[300px_300px]",
  },
  monika: {
    name: "Monika",
    role: "Działaczka społeczna",
    paragraphs: [
      "Monika koordynuje zbiórki, organizuje wolontariuszy, rozmawia z lokalnym biznesem i samorządem, ale komunikacja małej organizacji ginie w informacyjnym chaosie.",
      "Dzięki PLZ publikuje kluczowe komunikaty na tablicy ogłoszeniowej, mając pewność, że dotrą do całej społeczności. Projekty omawia na dedykowanych czatach bez rozpraszaczy, a lokalne potrzeby bada za pomocą błyskawicznych głosowań. Wbudowany system płatności automatyzuje zbieranie składek i zrzutek, a wirtualna karta lojalnościowa pozwala jej odwdzięczyć się wolontariuszom.",
      "Monika może się skupić na tym, co najważniejsze. Realną pomoc i budowanie silnej, lokalnej społeczności.",
    ],
    mask: imgPersonaMonikaMask,
    avatar: imgPersonaMonikaAvatar,
    wrapperClass: "h-[121px] w-[120px]",
    outerClipClass: "inset-[0_-1.57%_0_1.57%]",
    innerClipClass: "inset-[6.64%_13.91%_-87.53%_-13.47%] mask-position-[18.05px_-8.033px] mask-size-[120px_121px]",
  },
  ewa: {
    name: "Ewa",
    role: "Mieszkanka osiedla",
    paragraphs: [
      "Ewa chciała stworzyć przestrzeń, w której każdy z jej osiedla poczuje się bezpiecznie i zyska realny głos, tymczasem grupy na mediach społecznościowych były pełne anonimowego hejtu, fake newsów i reklam.",
      "Stworzenie prywatnej społeczności na PLZ zagwarantowało, że każda informacja pochodzi od zweryfikowanego autora. Dzięki tablicy i kalendarzowi wydarzeń, mieszkańcy zawsze wiedzą, co dzieje się w okolicy. Dedykowane czaty stały się cyfrowym odbiciem spotkań twarzą w twarz. Z kolei szybkie głosowania pozwoliły wspólnie decydować o losach osiedla, a wirtualna karta mieszkańca z systemem punktowym zmobilizowała lokalne firmy do wspierania sąsiedzkich inicjatyw.",
      "Dzięki plz Ewa stworzyła nowoczesne, prawdziwie inkluzywne osiedle, gdzie technologia buduje realne więzi zamiast dzielić.",
    ],
    mask: imgPersonaEwaMask,
    avatar: imgPersonaEwaAvatar,
    wrapperClass: "size-[120px]",
    outerClipClass: "inset-[1.57%_-1.57%_-1.57%_1.57%]",
    innerClipClass: "inset-[8.31%_-4.71%_-99.64%_8.7%] mask-position-[-8.544px_-8.08px] mask-size-[120px_120px]",
  },
};

export const PERSONA_ORDER: PersonaKey[] = ["adam", "piotr", "teresa", "monika", "ewa"];
