import MobileContainer from "@/components/organisms/mobile-container/mobile-container";
import HomeHeader from "@/components/molecules/home-header/home-header";
import Tamagotchi from "@/components/organisms/tamagotchi/tamagotchi";
import HomeOptions from "@/components/organisms/home-options/home-options";

export default function Home() {
  return (
    <MobileContainer>
      <HomeHeader />
      <Tamagotchi />
      <HomeOptions />
    </MobileContainer>
  );
}
