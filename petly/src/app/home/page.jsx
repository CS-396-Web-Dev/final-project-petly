"use client";
import ProtectedRoute from '@/components/ProtectedRoute';
import HomeHeader from "@/components/molecules/home-header/home-header";
import Tamagotchi from "@/components/organisms/tamagotchi/tamagotchi";
import ButtonGroup from "@/components/molecules/button-group/button-group";
import "./home.css";

function HomeContent() {
  return (
    <main id="home">
      <HomeHeader />
      <Tamagotchi />
      <ButtonGroup />
    </main>
  );
}

export default function Home() {
  return (
    <ProtectedRoute>
      <HomeContent />
    </ProtectedRoute>
  );
}