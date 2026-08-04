import { TEAM_MEMBERS } from "../data/team";
import { PersonCard } from "./PersonCard";

function TeamIntro() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] max-w-full font-['Poppins:Bold',sans-serif] leading-[1.25] not-italic relative text-[#22005d] text-[28px] sm:text-[36px] md:text-[48px] text-center">
        Zespół PLZ
      </p>
    </div>
  );
}

export function TeamGridSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[80px] items-center justify-center py-[60px] md:py-[120px] px-[24px] relative shrink-0 w-full" data-name="Zespół">
      <TeamIntro />
      <div className="content-stretch flex flex-wrap gap-[48px] items-start justify-center relative shrink-0 w-full max-w-[1500px]" data-name="Team grid">
        {TEAM_MEMBERS.map((member) => (
          <PersonCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
