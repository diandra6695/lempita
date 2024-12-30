import "../css/testimoni.css";
import People from "./People";
const Testimoni = () => {
  return (
    <section id="testimoni" className="w-full h-screen px-10">
      <h1 className="font-black mb-8 text-3xl text-[#2a5731]">Lihat Kata Konsumen</h1>
      <div className="w-full  h-auto flex flex-row pb-[1rem] gap-10">
        <div className="w-full pl-5 h-[30rem] justify-center flex flex-wrap gap-[15px] pb-[1rem] overflow-auto scrollbar-hide">
          <People />
          <People />
          <People />
          <People />
          <People />
        </div>
        <div className="w-full h-[30rem]">
          <h1 className="font-extrabold text-[24px] text-[#2a5731]">Toko Lemper Lempita ini bener-bener faforit banget deh!!</h1>
          <span className=""> ⭐ ⭐ ⭐ ⭐ ⭐</span>
          <div className="font-semibold text-base text-[#5e5e5e] mt-[1rem] flex flex-col gap-5">
            <p>Gue pertama kali nyoba pas temen gue kasih waktu kita nge-gathering di rumah. Gue tuh biasanya agak skeptis sama makanan tradisional, tapi lemper ini bener-bener ngejutin.</p>
            <p>
              Rasanya enak banget dan gak bikin ribet. Gue juga suka banget sama teksturnya yang lembut, jadi cocok buat camilan atau buat ngeganjal perut pas lagi laper. Terus, harganya juga terjangkau buat anak muda kaya gue yang lagi
              budget.
            </p>
            <p>Sejak itu, gue sering pesen lemper dari Toko Lempita, terutama buat temen-temen gue pas kita ngumpul. Pokoknya, lemper ini recommended banget buat anak muda yang suka kulineran!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
