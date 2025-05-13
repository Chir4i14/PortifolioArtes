import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person.fill': 'person',
} as const;

export type IconSymbolName = keyof typeof MAPPING;

type IconSymbolProps = {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
};

export function IconSymbol({ name, size = 24, color, style }: IconSymbolProps) {
  const iconName = MAPPING[name];

  if (!iconName) {
    console.warn(`Icon "${name}" not found in mapping.`);
    return null;
  }

  return (
    <MaterialIcons
      name={iconName}
      size={size}
      color={color}
      style={style}
    />
  );
}
