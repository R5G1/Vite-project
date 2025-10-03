import Header from './components/section/Header.jsx';
import TabsSections from './components/section/TabsSections.jsx';
import IntroductoryInfoSection from './components/section/IntroductoryInfoSection.jsx';

import DifferenceSection from './components/section/DifferenceSection.jsx';
import FunctionalBtnSection from './components/section/FunctionalBtnSection.jsx';
import PortfolioSection from './components/section/PortfolioSection.jsx';
import FeedbackSection from './components/section/FeedbackSection.jsx';

import { useState } from 'react';

function App() {
  const array = ['Главная страница', 'О нас', 'Портфолио', '📞 Контакты'];
  const [activeTab, setActiveTab] = useState('Главная страница');

  return (
    <>
      <Header />
      <TabsSections activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === array[0] && (
          <>
            <IntroductoryInfoSection />
          </>
        )}
        {activeTab === array[1] && (
          <>
            <FunctionalBtnSection />
            <DifferenceSection />
          </>
        )}
        {activeTab === array[2] && (
          <>
            <PortfolioSection />
          </>
        )}
      </main>
      {activeTab === array[3] && <FeedbackSection />}
    </>
  );
}

export default App;
