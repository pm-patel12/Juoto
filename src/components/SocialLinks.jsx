import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandTiktok,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandTumblr,
} from "react-icons/tb";
import { useAppContext } from "../ThemeProvider";

const socialIcons = {
  instagram: <TbBrandFacebook />,
  facebook: <TbBrandInstagram />,
  youtube: <TbBrandYoutube />,
  tiktok: <TbBrandTiktok />,
  tumblr: <TbBrandTumblr />,
  twitter: <TbBrandTwitter />,
  linkedin: <TbBrandLinkedin />,
};

const SocialLinks = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const socialLinks = storeConfig.socialLinks || {};
  return (
    <div className="social-links">
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          {socialIcons[item.name.toLowerCase()] || item.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
