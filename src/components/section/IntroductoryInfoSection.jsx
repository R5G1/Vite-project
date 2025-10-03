import {homeContents} from '../data';
import ContentCard from '../ContentCard/ContentCard';

export default function IntroductoryInfoSection() {
  return (
    <section className="introductory-info-section">
      {homeContents.map((item) => (
        <ContentCard key={item.contentTitle}>
          <h3>{item.contentTitle}</h3>
          <p>{item.contentBody}</p>
        </ContentCard>
      ))}
    </section>
  );
}
