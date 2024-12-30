const People = () => {
  return (
    <div className="w-[530px] cursor-pointer h-32 rounded-[28px] hover:shadow-xl transition flex flex-row bg-white">
      <div className="w-[10rem] h-full flex justify-center items-center">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-8c493da0ac58b293fc91adb3271b8884-lq" alt="" className="w-[72px] h-[72px] object-cover rounded-[50%]" />
      </div>
      <div className="w-full h-full flex flex-col justify-center ">
        <h1 className="font-extrabold text-[#2a5731] text-2xl">Ambarwati</h1>
        <p className="font-semibold text-[1rem] text-[#5D5D5D]">Pelajar</p>
      </div>
    </div>
  );
};

export default People;
