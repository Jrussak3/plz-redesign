import logo_warszawa_OPZZ from "../images/logos/warszawa_OPZZ.webp";
import logo_warszawa_nszzp_metra_warszawskiego from "../images/logos/warszawa_nszzp_metra_warszawskiego.webp";
import logo_warszawa_konfederacja_pracy_mlodych from "../images/logos/warszawa_konfederacja_pracy_mlodych.webp";
import logo_warszawa_zzpkm from "../images/logos/warszawa_zzpkm.webp";
import logo_warszawa_kp_kopernik from "../images/logos/warszawa_kp_kopernik.webp";
import logo_warszawa_zrbs from "../images/logos/warszawa_zrbs.webp";
import logo_michalow_reginow_ika from "../images/logos/michalow_reginow_ika.webp";
import logo_bydgoszcz_ozz_kas from "../images/logos/bydgoszcz_ozz_kas.webp";
import logo_brodnica_ozz_kas from "../images/logos/brodnica_ozz_kas.webp";
import logo_kalisz_ozz_kas from "../images/logos/kalisz_ozz_kas.webp";
import logo_kielce_ozz_kas from "../images/logos/kielce_ozz_kas.webp";
import logo_skarzysko_ozz_kas from "../images/logos/skarzysko_ozz_kas.webp";
import logo_ostrow_wielkopolski_ozz_kas from "../images/logos/ostrow_wielkopolski_ozz_kas.webp";
import logo_olsztyn_zztkm from "../images/logos/olsztyn_zztkm.webp";
import logo_sejny_targowisko from "../images/logos/sejny_targowisko.webp";
import logo_szczecin_znp from "../images/logos/szczecin_znp.webp";
import logo_polkowice_zzppm_ozwr from "../images/logos/polkowice_zzppm_ozwr.webp";
import logo_polkowice_zzppm from "../images/logos/polkowice_zzppm.webp";
import logo_lubin_dozor from "../images/logos/lubin_dozor.webp";
import logo_boleslawiec_zzpzc from "../images/logos/boleslawiec_zzpzc.webp";
import logo_czestochowa_kp_guardian_glass from "../images/logos/czestochowa_kp_guardian_glass.svg";
import logo_sztaszow_nszz_pgips from "../images/logos/sztaszow_nszz_pgips.webp";
import logo_puchaczow_zzg from "../images/logos/puchaczow_zzg.webp";
import logo_lublin_zrzeszenie_energetykow from "../images/logos/lublin_zrzeszenie_energetykow.webp";
import logo_rybnik_zzg from "../images/logos/rybnik_zzg.webp";
import logo_poznan_porozumienie from "../images/logos/poznan_porozumienie.webp";
import logo_poznan_credit_agricole from "../images/logos/poznan_credit_agricole.webp";
import logo_poznan_wet from "../images/logos/poznan_wet.webp";

// cx/cy are coordinates on the poland-map.svg viewBox (0 0 646.47 555.32).
export const TRUSTED_CITIES = [
  {
    id: "warszawa",
    label: "Warszawa",
    cx: 412.82,
    cy: 235.35,
    orgs: [
      { name: "OPZZ", logo: logo_warszawa_OPZZ },
      { name: "NSZZP Metra Warszawskiego", logo: logo_warszawa_nszzp_metra_warszawskiego },
      { name: "Konfederacja Pracy Młodych", logo: logo_warszawa_konfederacja_pracy_mlodych },
      { name: "ZZPKM", logo: logo_warszawa_zzpkm },
      { name: "KP Centrum Nauki Kopernik", logo: logo_warszawa_kp_kopernik },
      { name: "Związek Rewizyjny Banków Spółdzielczych im. Franciszka Stefczyka", logo: logo_warszawa_zrbs },
    ],
  },
  {
    id: "michalow_reginow",
    label: "Michałów-Reginów",
    cx: 397.68,
    cy: 219.13,
    orgs: [{ name: "IKA Kalisiak i Groszek Spółka Jawna", logo: logo_michalow_reginow_ika }],
  },
  {
    id: "bydgoszcz",
    label: "Bydgoszcz",
    cx: 233.94,
    cy: 183.06,
    orgs: [{ name: "OZZ KAS Bydgoszcz", logo: logo_bydgoszcz_ozz_kas }],
  },
  {
    id: "brodnica",
    label: "Brodnica",
    cx: 317.75,
    cy: 162.51,
    orgs: [{ name: "OZZ KAS Brodnica", logo: logo_brodnica_ozz_kas }],
  },
  {
    id: "kalisz",
    label: "Kalisz",
    cx: 269.89,
    cy: 294.42,
    orgs: [{ name: "OZZ KAS Kalisz", logo: logo_kalisz_ozz_kas }],
  },
  {
    id: "kielce",
    label: "Kielce",
    cx: 407.36,
    cy: 360.33,
    orgs: [{ name: "OZZ KAS Kielce", logo: logo_kielce_ozz_kas }],
  },
  {
    id: "skarzysko",
    label: "Skarżysko-Kamienna",
    cx: 425.21,
    cy: 347.35,
    orgs: [{ name: "OZZ KAS Skarżysko", logo: logo_skarzysko_ozz_kas }],
  },
  {
    id: "ostrow_wielkopolski",
    label: "Ostrów Wielkopolski",
    cx: 246.64,
    cy: 303.61,
    orgs: [{ name: "OZZ KAS Ostrów Wielkopolski", logo: logo_ostrow_wielkopolski_ozz_kas }],
  },
  {
    id: "olsztyn",
    label: "Olsztyn",
    cx: 371.31,
    cy: 102.12,
    orgs: [{ name: "ZZTKM", logo: logo_olsztyn_zztkm }],
  },
  {
    id: "sejny",
    label: "Sejny",
    cx: 522.51,
    cy: 58.75,
    orgs: [{ name: "Targowisko Miejskie w Sejnach", logo: logo_sejny_targowisko }],
  },
  {
    id: "szczecin",
    label: "Szczecin",
    cx: 58.1,
    cy: 153.15,
    orgs: [{ name: "ZNP Oddział Szczecin", logo: logo_szczecin_znp }],
  },
  {
    id: "polkowice",
    label: "Polkowice",
    cx: 149.34,
    cy: 336.78,
    orgs: [
      { name: "ZZPPM Oddział Zakłady Wzbogacania Rud", logo: logo_polkowice_zzppm_ozwr },
      { name: "ZZPPM O/ZG Polkowice-Sieroszowice", logo: logo_polkowice_zzppm },
    ],
  },
  {
    id: "lubin",
    label: "Lubin",
    cx: 156.89,
    cy: 362.28,
    orgs: [{ name: 'ZZPTIA "Dozór" Oddział Centralny Ośrodek Przetwarzania Informacji', logo: logo_lubin_dozor }],
  },
  {
    id: "boleslawiec",
    label: "Bolesławiec",
    cx: 117.05,
    cy: 357.24,
    orgs: [{ name: "Związek Zawodowy Pracowników Zakładów Ceramicznych Bolesławiec", logo: logo_boleslawiec_zzpzc }],
  },
  {
    id: "czestochowa",
    label: "Częstochowa",
    cx: 323.45,
    cy: 388.82,
    orgs: [{ name: "Konfederacja Pracy Guardian Glass", logo: logo_czestochowa_kp_guardian_glass }],
  },
  {
    id: "staszow",
    label: "Staszów",
    cx: 450.08,
    cy: 390.07,
    orgs: [{ name: "NSZZ PGiPS", logo: logo_sztaszow_nszz_pgips }],
  },
  {
    id: "puchaczow",
    label: "Puchaczów",
    cx: 551.51,
    cy: 305.6,
    orgs: [{ name: "ZZG Bogdanka", logo: logo_puchaczow_zzg }],
  },
  {
    id: "lublin",
    label: "Lublin",
    cx: 515.32,
    cy: 319.93,
    orgs: [{ name: "MZZP Energetyki", logo: logo_lublin_zrzeszenie_energetykow }],
  },
  {
    id: "rybnik",
    label: "Rybnik",
    cx: 293.29,
    cy: 454.8,
    orgs: [{ name: "ZZG PGG KWK Jankowice", logo: logo_rybnik_zzg }],
  },
  {
    id: "poznan",
    label: "Poznań",
    cx: 173.1,
    cy: 242.51,
    orgs: [
      { name: "Porozumienie 2014", logo: logo_poznan_porozumienie },
      { name: "Porozumienie 2014 Zarząd Zakładowy Credit Agricole Bank Polska S.A.", logo: logo_poznan_credit_agricole },
      { name: "Ogólnopolski Związek Zawodowy Pracowników Inspekcji Weterynaryjnej", logo: logo_poznan_wet },
    ],
  },
];
