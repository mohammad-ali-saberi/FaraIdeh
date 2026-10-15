interface ITeamMemberCardDecorationProps {
  className?: string;
}

/**
 * Corner motif for the team member card.
 *
 * The card body is right-aligned, so the lower-left corner of every card is
 * empty — and worse on the cards whose job titles wrap to one line, since the
 * grid stretches every card to the tallest in its row. These rings are centred
 * on the card's bottom-left corner and bleed off it, so they read as a deliberate
 * accent rather than a gap. Kept faint: the role text can run into them.
 */
const TeamMemberCardDecoration = ({ className }: ITeamMemberCardDecorationProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="120" r="34" stroke="#0a2fb6" strokeOpacity="0.16" strokeWidth="1.5" />
      <circle cx="0" cy="120" r="54" stroke="#0a2fb6" strokeOpacity="0.13" strokeWidth="1.5" />
      <circle cx="0" cy="120" r="76" stroke="#0a2fb6" strokeOpacity="0.1" strokeWidth="1.5" />
      <circle cx="0" cy="120" r="100" stroke="#0a2fb6" strokeOpacity="0.07" strokeWidth="1.5" />

      <circle cx="38" cy="82" r="3" fill="#0a2fb6" fillOpacity="0.18" />
      <circle cx="66" cy="82" r="2.5" fill="#0a2fb6" fillOpacity="0.14" />
      <circle cx="57" cy="38" r="2.5" fill="#0a2fb6" fillOpacity="0.12" />

      <circle cx="17" cy="91" r="4" fill="#ff6300" fillOpacity="0.55" />
    </svg>
  );
};

export default TeamMemberCardDecoration;
