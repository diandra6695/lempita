import logo from "../assets/img/Untitled-2.png";
const Footer = () => {
  return (
    <footer className="px-10 pb-14">
      <div className="w-full h-[15rem] flex">
        <div className="w-[25rem] h-full">
          <img src={logo} className="w-36" alt="" />
        </div>
        <div className="w-[25rem] h-full">
          <h1 className="text-[#2a5731] text-xl font-extrabold">Layanan Kami</h1>
          <ul>
            <li className="w-full text-sm h-auto flex flex-col gap-2 w-400 mt-5">
              <a href="">Pricing</a>
              <a href="">Tracking</a>
              <a href="">Report a Bug</a>
              <a href="">Trms of Services</a>
            </li>
          </ul>
        </div>
        <div className="w-[25rem] h-full flex flex-col">
          <h1 className="text-[#2a5731] text-xl font-extrabold">Perusahaan Kami</h1>
          <ul>
            <li className="w-full text-sm h-auto flex flex-col gap-2 w-400 mt-5">
              <a href="">Reporting</a>
              <a href="">Get in Touch</a>
              <a href="">Management</a>
            </li>
          </ul>
        </div>
        <div className="w-[25rem] h-full">
          <h1 className="text-[#2a5731] text-xl font-extrabold">Alamat Kami</h1>
          <ul>
            <li className="w-full text-sm h-auto flex flex-col gap-2 w-400 mt-5">
              <a href="">JL. KH.Achmad Fauzan No.17 Bangsri Jepara</a>
              <a href="">085641616352</a>
              <a href="">@lem.pita</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center text-center justify-center">
        <h1 className="text-[#5e5e5e] text-sm font-medium">©PT.Bogeng Media Prima</h1>
      </div>
    </footer>
  );
};

export default Footer;
