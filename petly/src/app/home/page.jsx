import Header from "@/components/molecules/home/header/header";
import Tamagotchi from "@/components/organisms/tamagotchi/tamagotchi";
import ButtonGroup from "@/components/molecules/home/button-group/button-group";
import "./home.css";

export default function Home() {
  return (
    <main id="home">
      <Header />
      <Tamagotchi />
      <ButtonGroup />
    </main>
  );
}
