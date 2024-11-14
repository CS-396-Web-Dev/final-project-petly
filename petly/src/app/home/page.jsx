import HomeHeader from "@/components/molecules/home-header/home-header";
import Mametchi from "@/components/organisms/mametchi/mametchi";
import Dialog from "@/components/organisms/dialog/dialog";
import "./home.css";

export default function Home() {
  return (
    <main id="home">
      <HomeHeader />
      <Mametchi />
      <Dialog />
    </main>
  );
}
