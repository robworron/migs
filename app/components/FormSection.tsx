import Form from "./Form";

export default function FormSection() {
  return (
    <section className="flex flex-col gap-4 md:gap-6 w-full md:w-4/5 lg:w-3/5 mx-auto my-8 p-4 md:p-8 bg-[var(--foreground)] rounded-xl">
      <Form />
    </section>
  );
}
