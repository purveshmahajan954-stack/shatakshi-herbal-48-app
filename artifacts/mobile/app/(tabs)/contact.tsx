import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { business } from "@/constants/products";
import { useColors } from "@/hooks/useColors";

export default function ContactScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  const actions = [
    {
      icon: "phone" as const,
      label: "Call Us",
      value: business.phoneDisplay,
      onPress: () => Linking.openURL(`tel:${business.phone}`),
      testID: "contact-call",
    },
    {
      icon: "message-circle" as const,
      label: "WhatsApp",
      value: "Chat with us",
      onPress: () =>
        Linking.openURL(
          `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
            "Hello Shatakshi Herbal, I have a question about your products.",
          )}`,
        ),
      testID: "contact-whatsapp",
    },
    {
      icon: "mail" as const,
      label: "Email",
      value: business.email,
      onPress: () => Linking.openURL(`mailto:${business.email}`),
      testID: "contact-email",
    },
    {
      icon: "map-pin" as const,
      label: "Visit Us",
      value: business.address,
      onPress: () =>
        Linking.openURL(
          `https://maps.google.com/?q=${encodeURIComponent(business.address)}`,
        ),
      testID: "contact-map",
    },
  ];

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{
        paddingTop: isWeb ? 67 : insets.top,
        paddingBottom: isWeb ? 34 : insets.bottom + 24,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.brandBlock}>
        <View style={[styles.logoCircle, { backgroundColor: colors.primary }]}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.logoImage}
            contentFit="cover"
          />
        </View>
        <Text style={[styles.brandName, { color: colors.foreground }]}>
          {business.name}
        </Text>
        <Text style={[styles.brandTagline, { color: colors.mutedForeground }]}>
          {business.tagline}
        </Text>
      </View>

      <View style={styles.aboutCard}>
        <Text style={[styles.aboutText, { color: colors.mutedForeground }]}>
          We craft authentic Ayurvedic formulations rooted in ancient wisdom —
          pure, potent and trusted by {business.customerCount} customers across
          India. AYUSH certified, 100% natural, made with care in Gadarwara,
          Madhya Pradesh.
        </Text>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
        Get in Touch
      </Text>
      <View style={styles.actionsList}>
        {actions.map((action) => (
          <Pressable
            key={action.label}
            onPress={action.onPress}
            style={({ pressed }) => [
              styles.actionRow,
              { backgroundColor: colors.card, borderColor: colors.border },
              pressed && { opacity: 0.85 },
            ]}
            testID={action.testID}
          >
            <View
              style={[
                styles.actionIcon,
                { backgroundColor: colors.secondary },
              ]}
            >
              <Feather name={action.icon} size={18} color={colors.primary} />
            </View>
            <View style={styles.actionText}>
              <Text style={[styles.actionLabel, { color: colors.foreground }]}>
                {action.label}
              </Text>
              <Text
                style={[styles.actionValue, { color: colors.mutedForeground }]}
                numberOfLines={2}
              >
                {action.value}
              </Text>
            </View>
            <Feather name="chevron-right" size={18} color={colors.mutedForeground} />
          </Pressable>
        ))}
      </View>

      <Text style={[styles.footerNote, { color: colors.mutedForeground }]}>
        {business.website.replace("https://", "")}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  brandBlock: {
    alignItems: "center",
    paddingVertical: 28,
    gap: 8,
  },
  logoCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  brandName: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 4,
  },
  brandTagline: {
    fontSize: 13,
  },
  aboutCard: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  aboutText: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  actionsList: {
    paddingHorizontal: 20,
    gap: 10,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    flex: 1,
    gap: 2,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  actionValue: {
    fontSize: 12,
  },
  footerNote: {
    textAlign: "center",
    fontSize: 11,
    marginTop: 28,
  },
});
