import product from "../assets/img/product.svg";
const Menu = () => {
  return (
    <section id="menu" className="w-full h-full mb-32 flex items-center">
      <div className="w-[50%] h-full flex justify-center items-center gap-[50px] flex-nowrap">
        <div className="w-56 h-1/2 shadow-xl rounded-[141px] flex flex-col bg-white">
          <div className="w-full h-[50%]">
            <img src={product} alt="" className="scale-[1.5]" />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center my-6">
            <h1 className="font-extrabold text-2xl text-[#2a5731]">Lemper Ayam</h1>
            <p className="font-semibold text-[#2a5731]">Lemper isi ayam</p>
            <h1 className="font-extrabold text-[24px] text-[#2a5731] mt-[1rem]">Rp. 2000</h1>
          </div>
          <div className="w-auto h-full flex justify-center translate-y-6">
            <div className="w-[68px] h-[68px] rounded-[50%] bg-[#2a5731] shadow-lg flex justify-center items-center hover:cursor-pointer">
              <h1 className="text-[3rem] text-white mb-[0.3rem]">+</h1>
            </div>
          </div>
        </div>
        <div className="w-56 h-1/2 shadow-xl rounded-[141px] flex flex-col bg-white">
          <div className="w-full h-[50%]">
            <img src={product} alt="" className="scale-[1.5]" />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center mb-[2rem] mt-[1.5rem]">
            <h1 className="font-extrabold text-2xl text-[#2a5731]">Lemper Abon</h1>
            <p className="font-semibold text-[#2a5731]">Lemper isi abon</p>
            <h1 className="font-extrabold text-[24px] text-[#2a5731] mt-[1rem]">Rp. 2000</h1>
          </div>
          <div className="w-auto h-full flex justify-center translate-y-6 cursor-pointer">
            <div className="w-[68px] h-[68px] rounded-[50%] bg-[#2a5731] shadow-lg flex justify-center items-center">
              <h1 className="text-[3rem] text-white mb-[0.3rem]">+</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full ">
        <h1 className="font-extrabold text-[32px] text-[#2a5731]">Kami mempunyai dua pilihan rasa</h1>
        <p className="font-semibold text-[#5e5e5e] pr-[2rem] mt-[1rem]">
          Kami menawarkan dua varian lemper yang lezat: isi ayam dan isi abon. Lemper isi ayam memadukan nasi ketan lembut dengan daging ayam beraroma dan bumbu rempah-rempah khas. Sementara itu, lemper isi abon menggabungkan nasi ketan
          lengket dengan rasa gurih abon sapi atau ayam yang diolah dengan rempah-rempah pilihan. Dengan dua pilihan ini, Anda bisa menikmati sensasi lezat dari lemper sesuai selera Anda.
        </p>
      </div>
    </section>
  );
};

export default Menu;
