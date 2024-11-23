import MobileContainer from "@/components/organisms/mobile-container/mobile-container";
import HomeHeader from "@/components/molecules/home-header/home-header";
import Tamagotchi from "@/components/organisms/tamagotchi/tamagotchi";
import HomeOptions from "@/components/organisms/home-options/home-options";
import Dialog from "@/components/organisms/dialog/dialog";
import PetProfile from "@/components/organisms/pet-profile/pet-profile";
import PetAction from "@/components/organisms/pet-action/pet-action";
import PetRanking from "@/components/organisms/pet-ranking/pet-ranking";

export default function Home() {
  return (
    <MobileContainer>
      <HomeHeader />
      <Tamagotchi />
      <Dialog />
      <HomeOptions />
      <PetProfile />
      <PetAction />
      <PetRanking />
    </MobileContainer>
  );
}
