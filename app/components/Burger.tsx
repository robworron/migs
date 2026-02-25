type BurgerProps = {
  onClick: () => void;
  menuOpen: boolean;
};

const BURGER_LINE_STYLES =
  "block w-full h-[3px] bg-[var(--primary)] transition-transform";

export default function Burger({ onClick, menuOpen }: BurgerProps) {
  return (
    <button
      onClick={onClick}
      className="flex md:hidden flex-col justify-around w-6 h-6"
    >
      <span
        className={`${BURGER_LINE_STYLES} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
      />
      <span
        className={`${BURGER_LINE_STYLES} ${menuOpen ? "transition-opacity opacity-0" : "opacity-100"}`}
      />
      <span
        className={`${BURGER_LINE_STYLES} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
      />
    </button>
  );
}
