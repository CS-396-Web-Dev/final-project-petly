import MobileContainer from "@/components/organisms/mobile-container/mobile-container";
import PageHeader from "@/components/atoms/page-header/page-header";
import Dialog from "@/components/organisms/dialog/dialog";
import HomeOptions from "@/components/organisms/home-options/home-options";
import PetProfile from "@/components/organisms/pet-profile/pet-profile";
import PetAction from "@/components/organisms/pet-action/pet-action";
import PetRanking from "@/components/organisms/pet-ranking/pet-ranking";
import Invite from "@/components/organisms/invite/invite";
import PetDisplay from "@/components/organisms/pet-display/pet-display";

export default function Home() {
  return (
    <MobileContainer>
      <PageHeader text={"Home"} showOptions={true} />
      <PetDisplay/>
      <Dialog />
      <HomeOptions />
      <PetProfile />
      <PetAction />
      <PetRanking />
      <Invite />
    </MobileContainer>
  );
}
