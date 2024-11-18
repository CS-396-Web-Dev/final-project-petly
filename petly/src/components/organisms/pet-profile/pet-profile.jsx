import BackModal from "@/components/atoms/back-modal/back-modal";
import TextBtn from "@/components/atoms/text-btn/text-btn";
import PetInfo from "@/components/molecules/pet-info/pet-info";
import PetLevel from "@/components/molecules/pet-level/pet-level";
import PetHappiness from "@/components/molecules/pet-happiness/pet-happiness";
import PetHungriness from "@/components/molecules/pet-hungriness/pet-hungriness";
import PetTraining from "@/components/molecules/pet-training/pet-training";
import "./pet-profile.css";

const PetProfile = () => {
  return (
    <section id="pet-profile-wrapper">
      <BackModal />
      <section id="pet-profile">
        <TextBtn text={"close"} />

        <PetInfo />

        <span className="heading-level">
          <p>Level</p>
        </span>

        <section className="pet-level-container">
          <PetLevel />
        </section>

        <span className="heading-status">
          <p>Status</p>
        </span>

        <section className="pet-status-container">
          <PetHappiness />
          <PetHungriness />
          <PetTraining />
        </section>

        <p className="user-id">UID: 88bc0428-2c0a-48b1-953c-2e68ffa588d4</p>
      </section>
    </section>
  );
};

export default PetProfile;
