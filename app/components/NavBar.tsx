const ANCHOR_STYLES =
  "relative group px-1 py-2 transform-transition duration-300 hover:scale-110";

export default function NavBar() {
  return (
    <nav className="flex justify-end w-full h-12 lg:h-16 px-4 lg:px-8 bg-[var(--primary)] text-white text-lg shadow-lg">
      <div className="relative flex gap-4 lg:gap-12 items-center">
        <a href="/" className={ANCHOR_STYLES}>
          Home
        </a>
        <a href="/about" className={ANCHOR_STYLES}>
          <h3>About</h3>
        </a>
        <a href="/services" className={ANCHOR_STYLES}>
          Services
        </a>
        <a href="/contact" className={ANCHOR_STYLES}>
          Contact
        </a>
      </div>
    </nav>
  );
}
