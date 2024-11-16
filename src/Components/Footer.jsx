

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center bg-base-300 text-base-content p-10 mt-40 ">
      <div className="flex items-center flex-col mb-5">
        <h1 className="text-4xl font-bold ">Gadget Heaven</h1>
        <p className="font-semibold text-xl">Leading the way in cutting-edge technology and innovation.</p>
      </div>
     
    
      <div className="flex lg:gap-32 flex-col lg:flex-row mr-40 gap-5">

      <nav className="flex flex-col gap-2">
        <h6 className="footer-title text-black text-lg">Service</h6>
        <a className="link link-hover">Product Support</a>
        <a className="link link-hover">Order Tracking</a>
        <a className="link link-hover">Shipping & Delivery</a>
        <a className="link link-hover">Returnss</a>
      </nav>
      <nav className="flex flex-col gap-2">
        <h6 className="footer-title text-black text-lg">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Contacts</a>
      </nav>
      <nav className="flex flex-col gap-2">
        <h6 className="footer-title text-black text-lg">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>
      </div>
    </footer>
  );
};

export default Footer;
