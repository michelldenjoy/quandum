import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 w-full">
      <div className="w-full px-6 py-16">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto text-center md:text-left"
        >
          {/* LEFT COLUMN */}
          <div className="md:col-span-6 space-y-6 flex flex-col items-center md:items-start pr-0 md:pr-16">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              QUANDUM
              <span className="text-zinc-500 ml-2 font-semibold">
                AEROSPACE
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-500 max-w-md">
              {t("description")}
            </p>
          </div>

          {/* COMPANY */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start md:pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
              {t("company")}
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/empresa/historia"
                  className="hover:text-white transition-colors"
                >
                  {t("history")}
                </Link>
              </li>

              <li>
                <Link
                  to="/empresa/infraestructuras"
                  className="hover:text-white transition-colors"
                >
                  {t("infrastructure")}
                </Link>
              </li>

              <li>
                <Link
                  to="/sobre-quandum/calidad"
                  className="hover:text-white transition-colors"
                >
                  {t("quality")}
                </Link>
              </li>

              <li>
                <Link
                  to="/sobre-quandum/certificaciones"
                  className="hover:text-white transition-colors"
                >
                  {t("certificates")}
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT + LEGAL */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start md:pl-8">
            <Link to="/contacto" className="inline-block mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white hover:text-zinc-300 transition-colors">
                {t("contact")}
              </h4>
            </Link>

            <div className="space-y-2 text-sm mb-8">
              <p>info@quandum.com</p>
              <p>España</p>
            </div>

            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
              {t("legal")}
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>

              <li>
                <Link
                  to="/legal-notice"
                  className="hover:text-white transition-colors"
                >
                  {t("legalNotice")}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-600 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Quandum Aerospace.{" "}
            {t("rights")}
          </p>

          <p className="tracking-widest uppercase">
            {t("slogan")}
          </p>
        </div>
      </div>
    </footer>
  );
}