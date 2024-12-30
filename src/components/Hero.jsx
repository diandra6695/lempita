import product from "../assets/img/product.svg";

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="px-10 h-full flex justify-center mx-auto items-center">
        <div className="w-[40%]">
          <h1 className="text-4xl w-[90%] font-extrabold mb-6 text-[#2A5731] font-">Lemper Nih Guys, Cemilan Ngenyangin Anti Drama!</h1>
          <p className="text-sm w-[85%] mb-10">
            Lemper itu makanan yang comfort food banget guys, pokoknya bikin kenyang dan mood langsung naik deh!. Kalian bisa makan ini sambil jalan-jalan atau nongkrong bareng temen-temen, pokoknya anti ribet deh. Ayo cobain sekarang!!
          </p>
          <a href="hero.html" className="font-semibold">
            <div className="btn">
              <a href="" className="bg-[#2A5731] text-white px-7 text-sm py-3 rounded-l-full rounded-tr-full">
                Beli Sekarang
              </a>
            </div>
          </a>
        </div>
        <div className="w-[60%]">
          <img className="w-full" src={product} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
