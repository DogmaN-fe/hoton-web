import PhotoSlider from "./ui/photoSlider/photoSlider";
import styles from "./page.module.css";
import ConceptSection from "./ui/conceptSection/conceptSection";
import HouseSlider from "./ui/houseSlider/houseSlider";
import AdvantagesSection from "./ui/advantagesSection/advantagesSection";
import ContacsSection from "./ui/contacsSection/contacsSection";

export default function Page() {
  return (
    <main className={styles.main}>
      <PhotoSlider />
      <ConceptSection />
      <p className={styles.section_title}>юрты глэмпинга</p>
      <HouseSlider />
      <AdvantagesSection />
     {/*  <section className={styles.section_video}>
        <iframe
          src="https://www.youtube.com/embed/ezz2w-Ztf1o?si=4_OgXjtOEp4ugkrn"
          width={'100%'}
          height={'100%'}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section> */}

      <ContacsSection />
    </main>
  );
}
