import Script from "next/script";
import Peristiwa from "@/data/peristiwa.json";
import '@/app/timeline.scss'
export default function SectionSejarah() {
  return (
    <>
      <div className="timeline-container" id="timeline-1">
        <div className="timeline-header">
          <h2 className="timeline-header__title">
            Jejak Pahlawan dan Peristiwa
          </h2>
          <h3 className="timeline-header__subtitle">Kemerdekaan Indonesia</h3>
        </div>
        <div className="timeline">
          {Peristiwa.map((item, index) => (
            <div className="timeline-item" key={index} data-text={item.title}>
              <div className="timeline__content">
                <img
                  className="timeline__img"
                  src={item.imgSrc}
                  alt={item.alt}
                />
                <h2 className="timeline__content-title">{item.date}</h2>
                <p className="timeline__content-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/timeline.js" strategy="lazyOnload" />
    </>
  );
}
