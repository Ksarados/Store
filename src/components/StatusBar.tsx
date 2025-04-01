import React from 'react';
import { StatusBar } from 'react-native';

const StatusBarF: React.FC = () => {
  return (
    <StatusBar
      barStyle={'dark-content'} // Стиль текста (например, light-content, dark-content)
      backgroundColor="#F5F5FA" // Цвет фона статус-бара (для Android)
      translucent={false} // Делает статус-бар прозрачным (опционально)
    />
  );
};

export default StatusBarF;