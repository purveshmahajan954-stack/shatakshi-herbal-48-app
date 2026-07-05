import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import type { Product } from "@/constants/products";
import { useCart } from "@/contexts/CartContext";
import * as Haptics from "expo-haptics";

export function ProductCard({ product }: { product: Product }) {
  const colors = useColors();
  const { addToCart } = useCart();

  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100,
  );

  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable
        style={({ pressed }) => [
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border },
          pressed && { opacity: 0.85 },
        ]}
        testID={`product-card-${product.id}`}
      >
        <View style={styles.imageWrap}>
          <Image
            source={product.image}
            style={styles.image}
            contentFit="cover"
            transition={150}
          />
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

        <View style={styles.info}>
          <Text
            style={[styles.name, { color: colors.foreground }]}
            numberOfLines={2}
          >
            {product.name}
          </Text>
          <Text style={[styles.tagline, { color: colors.mutedForeground }]}>
            {product.tagline}
          </Text>

          <View style={styles.ratingRow}>
            <Feather name="star" size={12} color={colors.accent} />
            <Text style={[styles.ratingText, { color: colors.mutedForeground }]}>
              {product.rating} ({product.reviewCount})
            </Text>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.priceRow}>
              <Text style={[styles.price, { color: colors.foreground }]}>
                ₹{product.price}
              </Text>
              {discount > 0 ? (
                <Text
                  style={[styles.mrp, { color: colors.mutedForeground }]}
                >
                  ₹{product.mrp}
                </Text>
              ) : null}
            </View>
            <Pressable
              onPress={(e) => {
                e.preventDefault();
                e.stopPropagation();
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                addToCart(product.id);
              }}
              style={[styles.addButton, { backgroundColor: colors.primary }]}
              hitSlop={8}
              testID={`add-to-cart-${product.id}`}
            >
              <Feather name="plus" size={16} color={colors.primaryForeground} />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: "hidden",
  },
  imageWrap: {
    width: "100%",
    aspectRatio: 1,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  info: {
    padding: 12,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
  },
  tagline: {
    fontSize: 12,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  ratingText: {
    fontSize: 11,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
  mrp: {
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
