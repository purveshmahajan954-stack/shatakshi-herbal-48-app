import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import type { Category } from "@/constants/products";

export function CategoryCard({ category }: { category: Category }) {
  const colors = useColors();

  return (
    <Link href={`/category/${category.id}`} asChild>
      <Pressable
        style={({ pressed }) => [
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border },
          pressed && { opacity: 0.85 },
        ]}
        testID={`category-card-${category.id}`}
      >
        <Image
          source={category.image}
          style={styles.image}
          contentFit="cover"
          transition={150}
        />
        <View style={styles.overlay} />
        <View style={styles.textWrap}>
          <Text style={styles.name} numberOfLines={2}>
            {category.shortName}
          </Text>
          <Text style={styles.desc} numberOfLines={1}>
            {category.description}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 152,
    height: 120,
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(7, 30, 15, 0.45)",
  },
  textWrap: {
    padding: 10,
    gap: 2,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 16,
  },
  desc: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 10,
  },
});
