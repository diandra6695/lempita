import logo from "../assets/img/Untitled-2.png";
const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50">
      <div className="w-full h-auto rounded-b-xl px-20 backdrop-blur bg-[#f8f8f8] bg-opacity-70 text-[15px] text-[#2a5731] font-semibold py-3">
        <div className="w-full flex items-center justify-between">
          <div className="">
            <img src={logo} className="w-36" alt="Logo" />
          </div>
          <div className="">
            <ul className="flex justify-between items-center gap-[3rem]">
              <li>
                <a href="#home">Beranda</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#testimoni">Testimoni</a>
              </li>
              <li>
                <a href="#contact">Kontak</a>
              </li>
              <button className="bg-[#2a5731] text-white rounded-full px-5 py-3 ">Beli Sekarang</button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
