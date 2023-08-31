import clsx from "clsx";
import footer from "../../contents/footer";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={clsx(
        "w-full flex flex-col gap-10 py-8 px-6",
        "bg-[url('/assets/background/bg-yellow-mobile.png')] bg-top bg-cover bg-repeat"
      )}
    >
      <div className="footer-container">
        <h3 className="footer-heading leading-4">About Us</h3>
        <div className="footer-divider" />
        <p className="text-xs font-medium">
          Berdiri sejak tahun 2018, Trix Collective bukan hanya sekedar creative
          agency. Kami adalah <strong>INISIATOR</strong> yang menciptakan
          movemen baru untuk menggali potensi dari brand Anda, dengan
          menyediakan strategi digital marketing kreatif agar brand Anda semakin
          meroket dan bersinar. Dengan keahlian dan wawasan kami, Trix telah
          dipercaya oleh banyak organisasi, UMKM di dalam dan luar negeri, dan
          telah sukses berkolaborasi dengan banyak proyek pemerintah Indonesia.
        </p>
      </div>
      <div className="footer-container">
        <h3 className="footer-heading">Get In Touch</h3>
        <div className="footer-divider" />
        {footer.contacts.map((c) => (
          <a href="" key={c.name} className="footer-icon-links">
            <div className="footer-icon-wrapper">
              {c.name === "email" ? <HiOutlineMail /> : <HiOutlinePhone />}
            </div>
            {c.contact}
          </a>
        ))}
      </div>
      <div className="footer-container">
        <h3 className="footer-heading">Find Us at Social Media</h3>
        <div className="footer-divider" />
        {footer.socials.map((s) => (
          <a
            href={s.link}
            key={s.name}
            target="_blank"
            className="footer-icon-links"
            rel="noreferrer"
          >
            <div className="footer-icon-wrapper">
              {s.name === "instagram" ? <FiInstagram /> : <FaLinkedinIn />}
            </div>
            {s.text}
          </a>
        ))}
      </div>
      <span className="text-2xs text-center font-semibold pt-4 border-t border-black">
        Copyright 2023 PT. Semua Ada Trixnya. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
