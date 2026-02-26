import PersonalInfo from "./PersonalInfo";
import WorkplaceInfo from "./WorkplaceInfo";

export default function ContactInfo() {
  return (
    <section className="flex flex-col w-full p-2 md:p-10 bg-[var(--primary)]">
      <PersonalInfo />
      <div className="flex flex-col md:flex-row gap-6 items-center min-h-[340px]">
        <div className="w-full md:flex-1">
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
        <div className="w-full md:flex-1">
          <WorkplaceInfo
            name="Mobility Lab"
            address="4725 Dorchester Rd., Niagara Falls, ON"
            postalCode="L2E 0A8"
            phone="(289)-296-3433"
            fax="(289)-296-1057"
            email="info@mobility-lab.ca"
            website="https://www.mobility-lab.ca/"
            bookingURL="https://mobilitylab.janeapp.com/#/staff_member/3?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnoCztIY26tYGULY9NZsAm6ual0ZdI2ikrDV2O_68MtHPOiQ9CvvbTXQv2QdY_aem_48yKVxVnDbFD3UsYsuUC3w"
            imageSrc="/assets/mobility_lab.png"
            imageAlt="Mobility Lab Building"
          />
        </div>
      </div>
    </section>
  );
}
