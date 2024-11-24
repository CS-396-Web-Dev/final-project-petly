import MobileContainer from "@/components/organisms/mobile-container/mobile-container";
import PageHeader from "@/components/atoms/page-header/page-header";
import Tamagotchi from "@/components/organisms/tamagotchi/tamagotchi";
import HomeOptions from "@/components/organisms/home-options/home-options";
import Dialog from "@/components/organisms/dialog/dialog";
import PetProfile from "@/components/organisms/pet-profile/pet-profile";
import PetAction from "@/components/organisms/pet-action/pet-action";

export default function Home() {
  return (
    <MobileContainer>
      <PageHeader text={"Home"} showOptions={true} />
      <Tamagotchi />
      <Dialog />
      <HomeOptions />
      <PetProfile />
      <PetAction />
    </MobileContainer>
  );
}
