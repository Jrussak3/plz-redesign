export function PersonCard({ member }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full max-w-[380px]" data-name="Person">
      <div className="bg-[#ecedef] overflow-clip relative rounded-[999px] shrink-0 size-[200px]" data-name="Avatar">
        <img alt={member.name} className="absolute block inset-0 size-full object-cover" src={member.avatar} />
      </div>
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#22005d] text-[16px] text-center">
        <span className="font-['Poppins:Bold',sans-serif]">{member.name}</span>
        <span>{` - ${member.description}`}</span>
      </p>
    </div>
  );
}
