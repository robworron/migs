import PersonalInfo from "./PersonalInfo";
import WorkplaceInfo from "./WorkplaceInfo";

export default function ContactInfo() {
  return (
    <section className="flex flex-col w-full">
      <PersonalInfo />
      <p>
        Please find the contact info for each of the clinics John works at below
      </p>
      <div className="flex gap-4 items-center min-h-[340px] mt-4">
        <div className="flex-1">
          <WorkplaceInfo
            name="Zero Gravity Physiotherapy"
            address="200 Finch St., Welland, ON"
            postalCode="L3C 4V9"
            phone="(905)-735-6006"
            fax="(905)-735-0220"
            email="zerogravityphysio@yahoo.com"
            website="https://www.zerogravityphysio.com/"
            imageSrc="/assets/zero_gravity.png"
            imageAlt="Zero Gravity Building"
          />
        </div>
        <span className="h-72 my-auto border border-gray-200" />
        <div className="flex-1">
          <WorkplaceInfo
            name="Mobility Lab"
            address="4725 Dorchester Rd., Niagara Falls, ON"
            postalCode="L2E 0A8"
            phone="(289)-296-3433"
            email="info@mobility-lab.ca"
            website="https://www.mobility-lab.ca/"
            imageSrc="/assets/mobility_lab.png"
            imageAlt="Mobility Lab Building"
          />
        </div>
      </div>
    </section>
  );
}
