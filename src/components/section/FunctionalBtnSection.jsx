import {Button} from '../button/button';
import { differences } from '../data';
import '../../index.css';
import { useState } from 'react';

export default function ButtonSection() {
  const [text, setText] = useState(null);
  const keys = Object.keys(differences);

  return (
    <section className="main-interface">
      <div className="main-interface-buttons">
        {keys.map((item) => (
          <div key={item}>
            <Button
              isActive={text === differences[item]}
              onClick={() => setText(differences[item])}>
              {item}
            </Button>
          </div>
        ))}
      </div>

      <p>{text ?? 'Нажмите на кнопку'}</p>
    </section>
  );
}
