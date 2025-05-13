import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import colors, { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: getTabColor(route.name),
          },
          default: {
            backgroundColor: getTabColor(route.name),
          },
        }),
        tabBarActiveTintColor: colors.yaleBlue, // cor do ícone/texto ativo
        tabBarInactiveTintColor: colors.purple  // cor do ícone/texto inativo
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill"  color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// 👇 função pra mudar a cor baseada na aba
function getTabColor(routeName: string) {
  switch (routeName) {
    case 'index':
      return '#24B6BE'; // azul clarinho pra Home
    case 'explore':
      return '#A74CC2'; // rosinha pra Explore
    case 'profile':
      return '#71D19E'; // verde clarinho pra Profile
    default:
      return '#ffffff'; // branco padrão
  } 
}
