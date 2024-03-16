import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "./../constants/index";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} flex-col`}>
    <div className={` ${styles.flexStart} flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} text-white max-w-[310px] mt-4`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1-5] w-full flex flex-row justify-between flex-wrap mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-2">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-dimWhite text-[16] leading-[24px] hover:text-secondary cursor-pointer
              ${index === footerLink.links.length - 1 ? "mb-0" : "m-2"}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex md:flex-row flex-col items-center justify-start justify-between pt-6 border-t-[1px] border-t-[#3f3r45]">
      <p className="font-poppins font-normal text-center text-[18px] leading[27px] text-white ">
        Copyright © 2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row justify-end md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] cursor-pointer object-contain ${index === socialMedia.length - 1 ? "mr-0" : "mr-6"}`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
