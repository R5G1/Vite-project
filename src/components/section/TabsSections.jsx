
import {Button} from '../button/button';

export default function TabsSections({ activeTab, setActiveTab }) {
  const array = ['Главная страница', 'О нас', 'Портфолио', '📞 Контакты'];

  return (
    <div className="tabs-sections">
      <>
        {array.map((item) => (
          <Button
            key={item}
            isActive={item === activeTab}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </Button>
        ))}
      </>
    </div>
  );
}
