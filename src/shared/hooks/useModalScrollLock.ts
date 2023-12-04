import { useState, useEffect } from 'react';

const useModalScrollLock = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isModalOpen) {
      // Сохраняем текущую прокрутку
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
    } else {
      // Восстанавливаем прокрутку при закрытии модального окна
      body.style.overflow = 'visible';
      body.style.position = '';
      body.style.top = '';
    }

    return () => {
      // Очищаем эффект при размонтировании компонента
      body.style.overflow = 'visible';
      body.style.position = '';
      body.style.top = '';
    };
  }, [isModalOpen]);

  return { isModalOpen, setModalOpen };
};

export default useModalScrollLock;
