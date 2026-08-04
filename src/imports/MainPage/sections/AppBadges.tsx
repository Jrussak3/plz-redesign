import appBadgeSvgPaths from "../svg-kv3yk0jd26";
import imgGooglePlayBadge from "../6fceb9f2cb82d2c00b27de567752c78e974f6807.png";

function GooglePlayBadgeLink() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-start overflow-clip relative rounded-[12px] shrink-0" data-name="a.app-btns-module--app-btn--ba6c6">
      <div className="h-[40px] relative shrink-0 w-[135px]" data-name="google-play-badge">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGooglePlayBadge} />
        </div>
      </div>
    </div>
  );
}

// Apple's badge SVG has no single-path glyph, so it stays split into its
// three visual layers: outline+background, the Apple glyph icon, and the
// two lines of "Download on the / App Store" text.
function AppStoreBadgeBackground() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="40.0001" preserveAspectRatio="none" viewBox="0 0 119.664 40.0001" width="119.664">
      <g id="Group">
        <path d={appBadgeSvgPaths.pe30ae00} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        <path d={appBadgeSvgPaths.p1c0d3400} fill="var(--fill-0, black)" id="Vector_2" />
      </g>
    </svg>
  );
}

function AppStoreBadgeGlyph() {
  return (
    <div className="absolute inset-[21.8%_76.86%_23.76%_8.33%]" data-name="<Group>">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.776" preserveAspectRatio="none" viewBox="0 0 17.7166 21.776" width="17.7166">
        <g id="<Group>">
          <path d={appBadgeSvgPaths.p11c46880} fill="var(--fill-0, white)" id="<Path>" />
          <path d={appBadgeSvgPaths.p26de8970} fill="var(--fill-0, white)" id="<Path>_2" />
        </g>
      </svg>
    </div>
  );
}

function AppStoreBadgeMainText() {
  return (
    <div className="absolute inset-[44.68%_8.5%_16.27%_28.77%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.6202" preserveAspectRatio="none" viewBox="0 0 75.0606 15.6202" width="75.0606">
        <g id="Group">
          <path d={appBadgeSvgPaths.p19eaa100} fill="var(--fill-0, white)" id="Vector" />
          <path d={appBadgeSvgPaths.p17b2f400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={appBadgeSvgPaths.p3c7bcc00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={appBadgeSvgPaths.p10598288} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={appBadgeSvgPaths.p281afc80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={appBadgeSvgPaths.p3e942a70} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={appBadgeSvgPaths.p26bfc900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={appBadgeSvgPaths.p2a194000} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function AppStoreBadgeTopLine() {
  return (
    <div className="absolute inset-[20.63%_36.73%_63.01%_29.81%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.54198" preserveAspectRatio="none" viewBox="0 0 40.0356 6.54198" width="40.0356">
        <g id="Group">
          <path d={appBadgeSvgPaths.p1b43f300} fill="var(--fill-0, white)" id="Vector" />
          <path d={appBadgeSvgPaths.p3d749a80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={appBadgeSvgPaths.p21464480} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={appBadgeSvgPaths.p2412ad80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={appBadgeSvgPaths.p10a19b00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={appBadgeSvgPaths.p377aa200} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={appBadgeSvgPaths.p3307ac00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={appBadgeSvgPaths.p30a0a100} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function AppStoreBadgeLink() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-start overflow-clip relative rounded-[12px] shrink-0" data-name="a.app-btns-module--app-btn--ba6c6">
      <div className="content-stretch flex h-[40px] items-center justify-center overflow-clip relative shrink-0 w-[119.66px]" data-name="app-store-badge">
        <div className="h-[40px] overflow-clip relative shrink-0 w-[119.664px]" data-name="Component 1">
          <AppStoreBadgeBackground />
          <AppStoreBadgeGlyph />
          <AppStoreBadgeMainText />
          <AppStoreBadgeTopLine />
        </div>
      </div>
    </div>
  );
}

export function StoreBadgeRow() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_12px] items-center p-[8px] relative shrink-0" data-name="div.app-btns-module--btn-container--52654">
      <GooglePlayBadgeLink />
      <AppStoreBadgeLink />
    </div>
  );
}

