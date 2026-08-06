const CORE_FEATURES = [
  { label: "Czat grupowy, indywidualny, Newsy, Twoja Karta, Głosowania, Wydarzenia, Kalendarz, Zadania", status: "included" },
  { label: "Powiadomienia push", status: "included" },
  { label: "Głosowania oraz możliwość generowania raportów z głosowań", status: "included" },
];

export const PRICING_PLANS = [
  {
    id: "podstawowy",
    name: "Pakiet Podstawowy",
    subtitle: "Do 250 członków społeczności",
    priceMain: "80 zł",
    priceNote: "netto miesięcznie",
    features: [
      ...CORE_FEATURES,
      { label: "Doradztwo Konsultantki Rozwoju Społeczności", status: "excluded" },
      { label: "Przyjmowanie płatności w aplikacji", status: "excluded" },
      { label: "Twój sklep", status: "excluded" },
      { label: "Możliwość tworzenia programów partnerskich", status: "excluded" },
      { label: "Możliwość utworzenia wielu społeczności", status: "excluded" },
    ],
  },
  {
    id: "pro",
    name: "Pakiet Pro",
    subtitle: "250-500 członków społeczności",
    priceMain: "145 zł",
    priceNote: "netto miesięcznie",
    featured: true,
    badge: "Najczęściej wybierany",
    features: [
      ...CORE_FEATURES,
      { label: "Doradztwo Konsultantki Rozwoju Społeczności", status: "pill", pillText: "60 minut kwartalnie" },
      { label: "Przyjmowanie płatności w aplikacji", status: "included" },
      { label: "Twój sklep", status: "included" },
      { label: "Możliwość tworzenia programów partnerskich", status: "excluded" },
      { label: "Możliwość utworzenia wielu społeczności", status: "excluded" },
    ],
  },
  {
    id: "indywidualny",
    name: "Pakiet Indywidualny",
    subtitle: "ponad 1000 członków społeczności",
    priceMain: "500 zł",
    priceSuffix: "+ 10 zł / społeczność",
    priceNote: "netto miesięcznie",
    features: [
      ...CORE_FEATURES,
      { label: "Doradztwo Konsultantki Rozwoju Społeczności", status: "pill", pillText: "120 minut kwartalnie" },
      { label: "Przyjmowanie płatności w aplikacji", status: "included" },
      { label: "Twój sklep", status: "included" },
      { label: "Możliwość tworzenia programów partnerskich", status: "included" },
      { label: "Możliwość utworzenia wielu społeczności", status: "included" },
    ],
  },
];
