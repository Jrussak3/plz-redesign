import { useState } from "react";
import polandMap from "../images/poland-map.svg";
import { TRUSTED_CITIES } from "../data/trustedCities";

const MAP_WIDTH = 646.47;
const MAP_HEIGHT = 555.32;

const TRUSTED_ORGS = TRUSTED_CITIES.flatMap((city) => city.orgs);

function TrustedIntro() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full max-w-[800px] text-center">
      <h1 className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.25] not-italic relative text-[#22005d] text-[28px] sm:text-[36px] md:text-[48px]">
        Zaufali nam
      </h1>
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative text-[#707070] text-[16px] md:text-[18px]">
        Jesteśmy dumni z ugruntowanego partnerstwa ze związkami zawodowymi oraz samorządami, które zdecydowały się na
        aplikację PLZ. Ich zaufanie to dla nas największa nagroda i motywacja do dalszego doskonalenia naszych
        rozwiązań.
      </p>
    </div>
  );
}

function CityDot({ city, isActive, onHover, onLeave }) {
  return (
    <button
      type="button"
      aria-label={city.label}
      onMouseEnter={onHover}
      onFocus={onHover}
      onMouseLeave={onLeave}
      onBlur={onLeave}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ left: `${(city.cx / MAP_WIDTH) * 100}%`, top: `${(city.cy / MAP_HEIGHT) * 100}%` }}
    >
      <span
        className={`block rounded-full bg-[#ce002c] transition-transform duration-150 ${isActive ? "scale-[1.6]" : "scale-100"}`}
        style={{ width: 11, height: 11 }}
      />
    </button>
  );
}

const ORG_CARD_BASE = "flex w-[130px] flex-col items-center justify-center gap-[4px] rounded-[8px] p-[8px]";
const ORG_CARD_VARIANTS = {
  card: `${ORG_CARD_BASE} shadow-[0px_0px_5px_0px_rgba(51,51,51,0.3)]`,
  listing: `${ORG_CARD_BASE} shrink-0 shadow-[0px_0px_5px_0px_rgba(1,1,1,0.3)]`,
};

function OrgCard({ org, variant }) {
  return (
    <div className={ORG_CARD_VARIANTS[variant]}>
      <div className="flex h-[90px] w-[90px] items-center justify-center p-[4px]">
        <img alt="" className="h-full max-h-full w-auto max-w-full object-contain" src={org.logo} />
      </div>
      <span className="text-center font-['Poppins:SemiBold',sans-serif] text-[11px] leading-[1.3] text-[#22005d]">{org.name}</span>
    </div>
  );
}

function CityCard({ city }) {
  const anchorLeft = city.cx / MAP_WIDTH > 0.5;
  const anchorTop = city.cy / MAP_HEIGHT > 0.5;

  return (
    <div
      className="absolute z-10 flex flex-wrap items-start justify-center gap-[8px] rounded-[12px] bg-[#fffbff] p-[12px] shadow-[0px_3px_10px_0px_rgba(51,51,51,0.35)] w-max max-w-[min(420px,90vw)]"
      style={{
        left: `${(city.cx / MAP_WIDTH) * 100}%`,
        top: `${(city.cy / MAP_HEIGHT) * 100}%`,
        transform: `translate(${anchorLeft ? "-100%" : "0%"}, ${anchorTop ? "calc(-100% - 14px)" : "14px"})`,
      }}
    >
      {city.orgs.map((org) => (
        <OrgCard key={org.name} org={org} variant="card" />
      ))}
    </div>
  );
}

function PolandMap() {
  const [activeCityId, setActiveCityId] = useState(null);
  const activeCity = TRUSTED_CITIES.find((city) => city.id === activeCityId) ?? null;

  return (
    <div className="relative hidden w-full max-w-[900px] md:block" style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}>
      <img alt="Mapa Polski" className="absolute inset-0 size-full" src={polandMap} />
      {TRUSTED_CITIES.map((city) => (
        <CityDot
          key={city.id}
          city={city}
          isActive={city.id === activeCityId}
          onHover={() => setActiveCityId(city.id)}
          onLeave={() => setActiveCityId((current) => (current === city.id ? null : current))}
        />
      ))}
      {activeCity && <CityCard city={activeCity} />}
    </div>
  );
}

function OrgsListing() {
  return (
    <div className="flex w-full max-w-[1200px] flex-wrap items-start justify-center gap-[16px]">
      {TRUSTED_ORGS.map((org) => (
        <OrgCard key={org.name} org={org} variant="listing" />
      ))}
    </div>
  );
}

export function TrustedMapSection() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center gap-[40px] py-[60px] md:py-[100px] px-[24px] relative shrink-0 w-full" data-name="Zaufali nam">
      <TrustedIntro />
      <PolandMap />
      <OrgsListing />
    </div>
  );
}
