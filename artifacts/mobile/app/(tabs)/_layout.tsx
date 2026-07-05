// Android & web tab layout — no iOS-only imports here.
// iOS uses _layout.ios.tsx which handles NativeTabs / Liquid Glass / SF Symbols.
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { Home, LayoutGrid, ShoppingBag, Phone } from "lucide-react-native";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { useCart } from "@/contexts/CartContext";

export default function TabLayout() {
  const colors = useColors();
  const isWeb = Platform.OS === "web";
  const { totalItems } = useCart();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: isWeb ? 1 : 0,
          borderTopColor: colors.border,
          elevation: 0,
          ...(isWeb ? { height: 84 } : {}),
        },
        tabBarBackground: isWeb
          ? () => (
              <View
                style={[
                  StyleSheet.absoluteFill,
                  { backgroundColor: colors.background },
                ]}
              />
            )
          : undefined,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <LayoutGrid size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarBadge: totalItems > 0 ? totalItems : undefined,
          tabBarIcon: ({ color }) => (
            <ShoppingBag size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <Phone size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
