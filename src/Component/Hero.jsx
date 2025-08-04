import "@/index.css";

function Hero() {
  return (
    <div class="flex p-5 bg-gray-900 gap-5">
      <div>
        <img src="/assets/deal1.jpg" alt="" />
      </div>
      <div class="flex flex-col gap-5">
        <img src="/assets/deal2.jpg" alt="" />
        <img src="/assets/deal3.jpg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
