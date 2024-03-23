import styles from "./page.module.css";
import AdvantagesSection from "./ui/advantagesSection/advantagesSection";
import ConceptSection from "./ui/conceptSection/conceptSection";
import HouseSlider from "./ui/houseSlider/houseSlider";
import PhotoSlider from "./ui/photoSlider/photoSlider";

export default function Page() {
  return (
    <main className={styles.main}>
      <PhotoSlider />
      <ConceptSection />
      <p className={styles.section_title}>юрты глэмпинга</p>
      <HouseSlider />
      <AdvantagesSection />
    </main>
  );
}
