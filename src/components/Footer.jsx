import Logo from "../assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="lg:pt-24 pt-0">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>

          <div className="flex-1 flex flex-col gap-16 lg:flex-row">
            <div className="text-center w-full lg:text-left">
              <p className="text-xl font-medium mb-6">Quick Links</p>

              <ul className="space-y-4 text-gray">
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center w-full lg:text-left">
              <p className="text-xl font-medium mb-6">Resources Links</p>

              <ul className="space-y-4 text-gray">
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Download whitepapper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Smart Token
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Blockchain Explore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Crypto API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">
                    Interest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
