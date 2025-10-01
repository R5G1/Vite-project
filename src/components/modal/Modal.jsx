import classes from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';
import { Button } from '../Button/button';

export default function Modal({ children, isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function handleOutsideClick(event) {
    if (event.target === dialogRef.current) {
      onClose(false);
    }
  }

  return createPortal(
    <dialog className={classes.modal} ref={dialogRef} onClick={handleOutsideClick}>
      <div className={classes.modalContent}>
        {children}
        <Button onClick={() => onClose(false)}>Закрыть</Button>
      </div>
    </dialog>,
    document.getElementById('overlay')
  );
}
