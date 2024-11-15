import Header from "@/components/molecules/home/header/header";
import Mametchi from "@/components/organisms/mametchi/mametchi";
import Hatch from "@/components/organisms/hatch/hatch";
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
