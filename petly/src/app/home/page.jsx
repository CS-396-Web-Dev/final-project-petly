import MobileContainer from "@/components/organisms/mobile-container/mobile-container";
import HomeHeader from "@/components/molecules/home-header/home-header";
import Tamagotchi from "@/components/organisms/tamagotchi/tamagotchi";
import ButtonGroup from "@/components/molecules/button-group/button-group";

export default function Home() {
  return (
    <MobileContainer>
      <HomeHeader />
      <Tamagotchi />
      <ButtonGroup />
    </MobileContainer>
  );
}
