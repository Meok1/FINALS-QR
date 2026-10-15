import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from '@/components/AuthProvider';
import { COLORS } from '@/constants/colors';

export default function TabLayout() {
  const { role } = useAuth();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.textOnPrimary,
        tabBarInactiveTintColor: COLORS.surface,
        headerStyle: { backgroundColor: COLORS.primary },
        headerShadowVisible: false,
        headerTintColor: COLORS.textOnPrimary,
        tabBarStyle: { backgroundColor: COLORS.primary, borderTopColor: COLORS.accent },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'qr-code' : 'qr-code-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'time' : 'time-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      {role === 'teacher' && (
        <Tabs.Screen
          name="teacher"
          options={{
            title: 'Teacher',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'school' : 'school-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
      )}
    </Tabs>
  );
}
