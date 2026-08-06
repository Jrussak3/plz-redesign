// Small shared bits reused verbatim across multiple sections (extracted to
// avoid repeating the exact same Tailwind class strings in several files).

// Gradient card backgrounds reused by PricingCta's choice cards and
// CommunityPricingCta's big banner card.
export const GRADIENT_LILAC = "bg-gradient-to-br from-[#e2d5ef] to-[#f3edff]";
export const GRADIENT_PEACH = "bg-gradient-to-br from-[#fbe0c4] to-[#fdeee1]";

// The two decorative absolute layers behind a "pill" CTA button: a fill
// background (painted first, behind the label) and an inset top-highlight
// shadow (painted last, on top of the label). Used identically by Hero's
// HeroButton and CommunityPricingCta's "Zobacz cennik" link — kept as two
// separate pieces so callers can place the label between them, preserving
// the original paint order.
export function PillButtonFill({ backgroundClassName }) {
  return <div aria-hidden className={`absolute inset-0 pointer-events-none rounded-[16px] ${backgroundClassName}`} />;
}

export function PillButtonShadow() {
  return <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.25)]" />;
}
