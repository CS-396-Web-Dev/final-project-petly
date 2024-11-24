import Image from "next/image";
import MobileContainer from "@/components/organisms/mobile-container/mobile-container";
import PageHeader from "@/components/atoms/page-header/page-header";
import PetNameInput from "@/components/atoms/pet-name-input/pet-name-input";
import PetPicker from "@/components/molecules/pet-picker/pet-picker";
import new_user_bg from "../../../public/new-user/new_user_bg.svg";

export default function NewUser() {
  return (
    <MobileContainer>
      <PageHeader text={"New User"} showOptions={false} />
      <Image
        src={new_user_bg}
        alt=""
        width={347}
        height={209}
        priority
        style={{ objectFit: "cover", margin: "2rem auto" }}
      />
      <PetNameInput />
      <PetPicker />
    </MobileContainer>
  );
}
