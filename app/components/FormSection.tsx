import Form from "./Form";

const FIELD_STYLE = "border p-1 px-2";

export default function FormSection() {
  return (
    <section className="flex flex-col gap-4 md:gap-6 w-full md:w-4/5 lg:w-3/5 mx-auto my-8 p-4 md:p-8 bg-[var(--foreground)] rounded-xl">
      <p className="text-base md:text-lg">
        To reach Dr. John Mignelli directly, fill the following form:
      </p>
      <Form />
    </section>
  );
}
