import {homeContents} from '../data';
import ShowMainComponents from '../ShowMainComponents';

export default function IntroductoryInfoSection() {
  return (
    <section className="introductory-info-section">
      {homeContents.map((item) => (
        <ShowMainComponents key={item.contentTitle}>
          <h3>{item.contentTitle}</h3>
          <p>{item.contentBody}</p>
        </ShowMainComponents>
      ))}
    </section>
  );
}
