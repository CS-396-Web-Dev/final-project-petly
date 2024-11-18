import HomeHeader from "@/components/molecules/home-header/home-header";
import Tamagotchi from "@/components/organisms/tamagotchi/tamagotchi";
import ButtonGroup from "@/components/molecules/button-group/button-group";
import "./home.css";

export default function Home() {
  return (
    <main id="home">
      <HomeHeader />
      <Tamagotchi />
      <ButtonGroup />
    </main>
  );
}
