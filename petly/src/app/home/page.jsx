import MobileContainer from "@/components/organisms/mobile-container/mobile-container";
import PageHeader from "@/components/atoms/page-header/page-header";
import Tamagotchi from "@/components/organisms/tamagotchi/tamagotchi";
import Dialog from "@/components/organisms/dialog/dialog";
import HomeOptions from "@/components/organisms/home-options/home-options";
import PetProfile from "@/components/organisms/pet-profile/pet-profile";
import PetAction from "@/components/organisms/pet-action/pet-action";
import PetRanking from "@/components/organisms/pet-ranking/pet-ranking";
import Invite from "@/components/organisms/invite/invite";
import PetAttributeMonitor from "@/components/molecules/pet-attribute-monitor/pet-attribute-monitor";

export default function Home() {
  return (
    <MobileContainer>
      <PageHeader text={"Home"} showOptions={true} />
      <Tamagotchi/>
      <Dialog />
      <HomeOptions />
      <PetProfile />
      <PetAction />
      <PetRanking />
      <Invite />
      <PetAttributeMonitor />
    </MobileContainer>
  );
}
