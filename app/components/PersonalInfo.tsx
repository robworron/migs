export default function PersonalInfo() {
  return (
    <section className="flex flex-col gap-2 lg:gap-4 my-4 p-4 lg:p-6 bg-[var(--foreground)] md:opacity-80 md:transition-all md:duration-200 md:hover:scale-105 md:hover:opacity-100">
      <h2 className="text-3xl lg:text-4xl font-semibold">Dr. John Mignelli</h2>
      <p className="lg:text-lg">drjohnmignelli.dc@gmail.com</p>
      <p className="text-sm md:text-base">
        Please find the contact info for each of the clinics John works at below
      </p>
    </section>
  );
}
