import MySwiper from "../components/swiper";
import ListItem from "../components/list-item";
import ExclusiveGames from "../components/exclusive-games";
import Providers from "../components/providers";

export default function Home() {
  return (
    <main>
      <MySwiper />
      <ListItem />
      <ExclusiveGames />
      <Providers />
    </main>
  );
}
