import CategorySlider from "./_components/_CategorySlider/CategorySlider";
import MainSlider from "./_components/_MainSlider/MainSlider";
import Products from "./products/page";

export const metadata = {
  title: "Home Page",
};

export default function Home() {
  return <>
  <MainSlider/>
  {/* <CategorySlider/> */}
  <Products/>
  </>
}
