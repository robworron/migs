type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export default function Button({ label = "Click Me", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--primary)] px-4 py-2 text-white rounded-full shadow-md cursor-pointer transition-colors duration-300 hover:bg-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {label}
    </button>
  );
}
