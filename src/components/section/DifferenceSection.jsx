import MainContent from '../ShowMainComponents';
import { aboutContents } from '../data';

export default function DifferenceSection() {
  return (
    <section>
      {aboutContents.map((item) => (
        <MainContent key={item.contentTitle}>
          <ul>
            <li>
              <h3>{item.contentTitle}</h3>
              <p>{item.contentBody}</p>
            </li>
          </ul>
        </MainContent>
      ))}
    </section>
  );
}
