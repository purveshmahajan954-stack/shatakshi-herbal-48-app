import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams, router } from "expo-router";
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

import { business, getProductById } from "@/constants/products";
import { useCart } from "@/contexts/CartContext";
import { useColors } from "@/hooks/useColors";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";
  const { addToCart, lines } = useCart();

  const product = getProductById(id);

  if (!product) {
    return (
      <View style={[styles.notFound, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.foreground }}>Product not found</Text>
      </View>
    );
  }

  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100,
  );
  const inCart = lines.some((l) => l.productId === product.id);

  const handleEnquire = () => {
    const message = `Hello Shatakshi Herbal, I'm interested in ${product.name} (${product.tagline}). Could you share more details?`;
    Linking.openURL(
      `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`,
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrap}>
          <Image
            source={product.image}
            style={styles.image}
            contentFit="cover"
          />
          <Pressable
            onPress={() => router.back()}
            style={[
              styles.backButton,
              { top: (isWeb ? 67 : insets.top) + 8 },
            ]}
            hitSlop={10}
            testID="product-back-button"
          >
            <Ionicons name="arrow-back" size={20} color="#0B1F14" />
          </Pressable>
          {product.badge ? (
            <View
              style={[
                styles.badge,
                {
                  backgroundColor:
                    product.badge === "New" ? colors.accent : colors.primary,
                },
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  {
                    color:
                      product.badge === "New"
                        ? colors.accentForeground
                        : colors.primaryForeground,
                  },
                ]}
              >
                {product.badge.toUpperCase()}
              </Text>
            </View>
          ) : null}
        </View>

        <View style={styles.content}>
          <Text style={[styles.name, { color: colors.foreground }]}>
            {product.name}
          </Text>
          <Text style={[styles.tagline, { color: colors.mutedForeground }]}>
            {product.tagline}
          </Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color={colors.accent} />
            <Text style={[styles.ratingText, { color: colors.foreground }]}>
              {product.rating}
            </Text>
            <Text style={[styles.reviewText, { color: colors.mutedForeground }]}>
              ({product.reviewCount} reviews)
            </Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={[styles.price, { color: colors.foreground }]}>
              ₹{product.price}
            </Text>
            {discount > 0 ? (
              <>
                <Text style={[styles.mrp, { color: colors.mutedForeground }]}>
                  ₹{product.mrp}
                </Text>
                <View
                  style={[
                    styles.discountPill,
                    { backgroundColor: colors.secondary },
                  ]}
                >
                  <Text style={[styles.discountText, { color: colors.primary }]}>
                    {discount}% OFF
                  </Text>
                </View>
              </>
            ) : null}
          </View>

          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            About this product
          </Text>
          <Text style={[styles.description, { color: colors.mutedForeground }]}>
            {product.description}
          </Text>

          <View
            style={[
              styles.infoCard,
              { backgroundColor: colors.secondary },
            ]}
          >
            <Ionicons name="shield-checkmark" size={16} color={colors.primary} />
            <Text style={[styles.infoText, { color: colors.foreground }]}>
              AYUSH certified · 100% natural ingredients
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          styles.footer,
          {
            backgroundColor: colors.card,
            borderTopColor: colors.border,
            paddingBottom: isWeb ? 34 : insets.bottom + 12,
          },
        ]}
      >
        <Pressable
          onPress={handleEnquire}
          style={[styles.enquireButton, { borderColor: colors.border }]}
          testID="product-enquire-button"
        >
          <Ionicons name="chatbubble" size={18} color={colors.foreground} />
        </Pressable>
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            addToCart(product.id);
          }}
          style={[styles.addButton, { backgroundColor: colors.primary }]}
          testID="product-add-to-cart-button"
        >
          <Ionicons name="bag" size={18} color={colors.primaryForeground} />
          <Text style={[styles.addButtonText, { color: colors.primaryForeground }]}>
            {inCart ? "Add Another" : "Add to Cart"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrap: {
    width: "100%",
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    left: 16,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.92)",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: 16,
    right: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  content: {
    padding: 20,
    gap: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
  },
  tagline: {
    fontSize: 14,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: "600",
  },
  reviewText: {
    fontSize: 12,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 12,
  },
  price: {
    fontSize: 26,
    fontWeight: "700",
  },
  mrp: {
    fontSize: 15,
    textDecorationLine: "line-through",
  },
  discountPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  discountText: {
    fontSize: 11,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 14,
    borderRadius: 14,
    marginTop: 20,
  },
  infoText: {
    fontSize: 12,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  enquireButton: {
    width: 52,
    height: 52,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 16,
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: "700",
  },
});
