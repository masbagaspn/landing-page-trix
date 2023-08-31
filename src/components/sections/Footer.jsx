import clsx from "clsx";
import footer from "../../contents/footer";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={clsx(
        "w-full flex flex-col py-8 px-6 gap-10 lg:px-36 lg:pt-24",
        "bg-[url('/assets/background/bg-yellow-mobile.png')] bg-top bg-cover bg-repeat"
      )}
    >
      <div className="w-full flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between">
        <div className="footer-container lg:w-2/5">
          <h3 className="footer-heading ">About Us</h3>
          <div className="footer-divider" />
          <p className="text-xs font-medium lg:text-lg lg:leading-6">
            Berdiri sejak tahun 2018, Trix Collective bukan hanya sekedar
            creative agency. Kami adalah <strong>INISIATOR</strong> yang
            menciptakan movemen baru untuk menggali potensi dari brand Anda,
            dengan menyediakan strategi digital marketing kreatif agar brand
            Anda semakin meroket dan bersinar. Dengan keahlian dan wawasan kami,
            Trix telah dipercaya oleh banyak organisasi, UMKM di dalam dan luar
            negeri, dan telah sukses berkolaborasi dengan banyak proyek
            pemerintah Indonesia.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="footer-container lg:items-end">
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="footer-divider" />
            {footer.contacts.map((c) => (
              <a
                href=""
                key={c.name}
                className="footer-icon-links lg:flex-row-reverse"
              >
                <div className="footer-icon-wrapper">
                  {c.name === "email" ? <HiOutlineMail /> : <HiOutlinePhone />}
                </div>
                {c.contact}
              </a>
            ))}
          </div>
          <div className="footer-container lg:items-end">
            <h3 className="footer-heading">Find Us at Social Media</h3>
            <div className="footer-divider" />
            {footer.socials.map((s) => (
              <a
                href={s.link}
                key={s.name}
                target="_blank"
                className="footer-icon-links lg:flex-row-reverse"
                rel="noreferrer"
              >
                <div className="footer-icon-wrapper">
                  {s.name === "instagram" ? <FiInstagram /> : <FaLinkedinIn />}
                </div>
                {s.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <span className="text-2xs text-center font-semibold pt-4 border-t border-black">
        Copyright 2023 PT. Semua Ada Trixnya. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
