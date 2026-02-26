const FIELD_STYLE = "border p-1 px-2";

export default function FormSection() {
  return (
    <section className="flex flex-col gap-4 md:gap-6 w-full md:w-4/5 lg:w-3/5 mx-auto my-8 p-4 py-8 md:p-8 md:py-12 bg-[var(--foreground)] rounded-xl">
      <p className="text-base md:text-lg">
        To reach Dr. John Mignelli directly, fill the following form:
      </p>
      <form className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" className={FIELD_STYLE} required />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" className={FIELD_STYLE} required />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className={FIELD_STYLE} required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className={`${FIELD_STYLE} h-32 resize-none`}
            required
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-1/4 min-w-24 max-w-36 mx-auto mt-8 p-2 bg-[var(--primary)] hover:bg-linear-to-b hover:from-[var(--primary)] hover:to-[var(--secondary)] text-white rounded-3xl cursor-pointer transition-colors duration-300"
        />
      </form>
    </section>
  );
}
