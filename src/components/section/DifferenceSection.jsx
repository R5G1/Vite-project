import ContentCard from '../ContentCard/ContentCard';
import { aboutContents } from '../data';

export default function DifferenceSection() {
  return (
    <section>
      {aboutContents.map((item) => (
        <ContentCard key={item.contentTitle}>
          <ul>
            <li>
              <h3>{item.contentTitle}</h3>
              <p>{item.contentBody}</p>
            </li>
          </ul>
        </ContentCard>
      ))}
    </section>
  );
}
