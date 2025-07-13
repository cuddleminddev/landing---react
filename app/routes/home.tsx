import About from "./home/about";
import App from "./home/app";
import Card from "./home/card";
import Carousel from "./home/carousel";
import Count from "./home/count";
import Journey from "./home/journey";
import Matter from "./home/matter";
import Mind from "./home/mind";
import Quotes from "./home/quotes";

export default function Home() {
  return (
    <>
      <Journey />
      <App />
      <Count />
      <About />
      <div style={{ margin: "2rem 0", padding: "1.5rem" }}>
        <Card />
      </div>
      <Matter />
      <div style={{ margin: "2rem 0", padding: "1.5rem" }}>
        <Mind />
      </div>
      <Carousel/>
      <Quotes/>
    </>
  );
}
