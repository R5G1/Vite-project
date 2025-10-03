import Header from './components/Section/Header.jsx';
import TabsSections from './components/Section/TabsSections.jsx';
import IntroductoryInfoSection from './components/Section/IntroductoryInfoSection.jsx';

import DifferenceSection from './components/Section/DifferenceSection.jsx';
import FunctionalBtnSection from './components/Section/functionalBtnSection.jsx';
import PortfolioSection from './components/Section/PortfolioSection.jsx';
import FeedbackSection from './components/Section/FeedbackSection.jsx';

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
