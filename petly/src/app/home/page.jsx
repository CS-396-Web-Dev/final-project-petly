import Header from "@/components/molecules/home/header/header";
import Mametchi from "@/components/molecules/pet/mametchi/mametchi";
import Hatch from "@/components/molecules/pet/hatch/hatch";
import Dialog from "@/components/organisms/dialog/dialog";
import ButtonGroup from "@/components/molecules/home/button-group/button-group";
import "./home.css";

export default function Home() {
  return (
    <main id="home">
      <Header />
      <Hatch />
      <Dialog />
      <ButtonGroup />
    </main>
  );
}
