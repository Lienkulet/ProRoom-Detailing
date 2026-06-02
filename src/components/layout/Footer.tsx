'use client';
import RightArrowIcon from "../icons/RightArrowIcon"
import InstagramIcon from "../icons/InstagramIcon"
import FacebookIcon from "../icons/FacebookIcon"
import TikTokIcon from "../icons/TikTokIcon"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import "@/i18n/config"
import AnimateIn from "@/components/UI/AnimateIn"

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

const Footer = () => {
  const { t } = useTranslation();
  const services: string[] = t("footer.services", { returnObjects: true }) as string[];
  const company: string[] = t("footer.company", { returnObjects: true }) as string[];
  const legal: string[] = t("footer.legal", { returnObjects: true }) as string[];
  const companyHrefs = ["#about", "#gallery", "#reviews", "#contact"];

  return (
    <footer className="footer" id="book">
      <div className="footer-content">

        <AnimateIn variant="fade-up" className="foot-cta">
          <h2 style={{ whiteSpace: "pre-line" }}>{t("footer.tagline")}</h2>
          <a className="foot-cta-btn" href="#book">
            {t("footer.bookNow")}
            <RightArrowIcon />
          </a>
        </AnimateIn>

        <div className="foot-grid">
          <AnimateIn variant="fade-up" delay={0.05} className="foot-brand">
            <a href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
              <Image
                src="/gallery/logo.jpg"
                alt="Pro Room Detailing logo"
                width={60} height={60}
                className="object-contain rounded-sm"
                style={{ height: 60, width: "auto" }}
                priority
              />
              <span className={`${ims} text-white hidden sm:block`} style={{ fontSize: "clamp(13px, 1.3vw, 16px)", letterSpacing: "-0.01em" }}>
                Pro Room<span style={{ color: "#b0b0b0" }}> Detailing</span>
              </span>
            </a>
            <p>{t("footer.brandDesc")}</p>
            <div className="foot-social">
              <a href="https://www.instagram.com/proroomdetailing/" target="_blank" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://www.facebook.com/people/PRO-ROOM-Detailing/61574453804967/" target="_blank" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://www.tiktok.com/@proroomdetailing_" target="_blank" aria-label="TikTok"><TikTokIcon /></a>
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.15} className="foot-col">
            <h4>{t("footer.servicesTitle")}</h4>
            <ul>
              {services.map((s) => <li key={s}><a href="#services">{s}</a></li>)}
            </ul>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.25} className="foot-col">
            <h4>{t("footer.companyTitle")}</h4>
            <ul>
              {company.map((s, i) => <li key={s}><a href={companyHrefs[i] ?? "#"}>{s}</a></li>)}
            </ul>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.35} className="foot-col">
            <h4>{t("footer.legalTitle")}</h4>
            <ul>
              {legal.map((s) => <li key={s}><a href="#">{s}</a></li>)}
            </ul>
          </AnimateIn>
        </div>

        <div className="foot-divider" />
        <AnimateIn variant="fade-in" delay={0.2} className="foot-bottom">
          <span>{t("footer.slogan")}</span>
          <span>{t("footer.copyright")}</span>
        </AnimateIn>
      </div>

      <div className="foot-wordmark-wrap" aria-hidden="true">
        <div className="foot-wordmark">ProRoomDetailing</div>
      </div>
    </footer>
  )
}

export default Footer
