import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

/**
 * 简单的自定义渐变颜色
 * ps：非渐变尽量不使用这个组件
 */
const colors = {
  main: ['#F23030', '#D7000F'],
  red: ['#FF6B6C', '#FB3B40'],
  yellow: ['#FFCC01', '#FFA90E'],
  blue: ['#4EB0FC', '#2FA3FF'],
  orange: ['#FF8F00', '#FF5100'],

  // 以下后面可能会移除，尽量不要使用
  // darkRed 和 darkYellow 是清洁列表里有的
  gray:['#EAEAEA','#EAEAEA'],
  gold:['#FFF5EF','#FFF5EF'],
  darkRed: ['#D7000F', '#D7000F'],
  darkYellow: ['#FFCC01', '#FFCC01'],
};

/**
 * 映射方向
 * h: 行向; v: 竖向; hReverse:反行向; vReverse: 反竖向
 */
const flexDirections = {
  h: {
    start: { x: 0.0, y: 1.0 },
    end: { x: 1.0, y: 1.0 }
  },
  v: {
    start: { x: 1.0, y: 0.0 },
    end: { x: 1.0, y: 1.0 }
  },
  hReverse: {
    start: { x: 1.0, y: 1.0 },
    end: { x: 0.0, y: 1.0 }
  },
  vReverse: {
    start: { x: 1.0, y: 1.0 },
    end: { x: 1.0, y: 0.0 }
  }
};

export default ({ color = 'main', direction = 'h', style, children }) => {
  return ['main', 'darkRed', 'red', 'yellow', 'darkYellow', 'blue', 'orange', 'gray', 'gold'].includes(color) && ['h', 'v', 'hReverse', 'vReverse'].includes(direction)
    ? <LinearGradient style={style} colors={colors[color]} {...flexDirections[direction]}>
      {children}
    </LinearGradient>
    : null;
};
