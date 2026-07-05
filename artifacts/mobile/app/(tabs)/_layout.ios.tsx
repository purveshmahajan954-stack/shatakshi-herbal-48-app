import { BlurView } from "expo-blur";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs, Badge } from "expo-router/unstable-native-tabs";
import { SymbolView } from "expo-symbols";
import React from "react";
import { StyleSheet, View, useColorScheme } from "react-native";

import { useColors } from "@/hooks/useColors";
import { useCart } from "@/contexts/CartContext";

function NativeTabLayout() {
  const { totalItems } = useCart();

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf={{ default: "house", selected: "house.fill" }} />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="shop">
        <Icon sf={{ default: "leaf", selected: "leaf.fill" }} />
        <Label>Shop</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="cart">
        <Icon sf={{ default: "bag", selected: "bag.fill" }} />
        <Label>Cart</Label>
        {totalItems > 0 ? <Badge>{String(totalItems)}</Badge> : null}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="contact">
        <Icon sf={{ default: "phone", selected: "phone.fill" }} />
        <Label>Contact</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function ClassicTabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const { totalItems } = useCart();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            tint={isDark ? "dark" : "light"}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <SymbolView name="house" tintColor={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <SymbolView name="leaf" tintColor={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarBadge: totalItems > 0 ? totalItems : undefined,
          tabBarIcon: ({ color }) => (
            <SymbolView name="bag" tintColor={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <SymbolView name="phone" tintColor={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  if (isLiquidGlassAvailable()) {
    return <NativeTabLayout />;
  }
  return <ClassicTabLayout />;
}
