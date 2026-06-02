'use client';
import dynamic from "next/dynamic"
import PhoneIcon from "../icons/PhoneIcon"
import MailIcon from "../icons/MailIcon"

const ContactMap = dynamic(() => import("../UI/ContactMap"), { ssr: false })

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase"

export default function ContactSection() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: "url('/bg-contact.png')" }}
    >
      <section className="flex flex-col gap-4 md:flex-row max-w-[1180px] mx-auto p-4 border border-[#414141]">

        {/* Map */}
        <div className="relative w-full md:w-[30%] min-h-[360px] md:min-h-[427px]">
          <ContactMap />
        </div>

        {/* Info — matches IMS .block---location-contain */}
        <div className="flex flex-col justify-start w-full md:w-[70%] overflow-hidden backdrop-blur-md"
        >
          {/* Address block */}
          <div className="flex flex-col gap-3 px-8 pt-8 pb-6">
            <h2
              className={`${ims} m-0 text-[#b0b0b0] leading-none tracking-[-0.2rem]`}
              style={{ fontSize: "clamp(52px, 7vw, 80px)", textShadow: "2px 14px 30px rgba(0,0,0,0.7)" }}
            >
              Visit Us
            </h2>
            <p
              className={`${ims} m-0 text-white leading-tight tracking-[-0.05rem]`}
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", lineHeight: "1.2" }}
            >
              Str. Tudor Vladimirescu 79<br />
              Durleşti, MD-2003, Moldova
            </p>
          </div>

          {/* Call / Email block — matches .block---phone-email-location */}
          <div
            className="flex flex-row w-full"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Call Us */}
            <a
              href="tel:12033454647"
              className="flex flex-col items-center justify-around flex-1 py-7 px-4 no-underline transition-opacity hover:opacity-75"
            >
              <strong
                className={`${ims} text-white`}
                style={{ fontSize: "clamp(18px, 2vw, 28px)", lineHeight: "30px" }}
              >
                Call us!
              </strong>
              <PhoneIcon className="w-14 h-14 my-4 text-[#b0b0b0]" />
              <strong
                className={`${ims} text-white`}
                style={{ fontSize: "clamp(14px, 1.6vw, 24px)", lineHeight: "24px" }}
              >
                1 - 203 - 345 - 4647
              </strong>
            </a>

            {/* Vertical divider */}
            <div style={{ width: "1px", background: "rgba(255,255,255,0.1)", alignSelf: "stretch" }} />

            {/* Email Us */}
            <a
              href="mailto:info@imsperformance.com"
              className="flex flex-col items-center justify-around flex-1 py-7 px-4 no-underline transition-opacity hover:opacity-75"
            >
              <strong
                className={`${ims} text-white`}
                style={{ fontSize: "clamp(18px, 2vw, 28px)", lineHeight: "30px" }}
              >
                Email us!
              </strong>
              <MailIcon className="w-14 h-14 my-4 text-[#b0b0b0]" />
              <strong
                className={`${ims} text-white text-center break-all`}
                style={{ fontSize: "clamp(12px, 1.4vw, 24px)", lineHeight: "24px" }}
              >
                info@imsperformance.com
              </strong>
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
