import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import {
  business,
  categories,
  getFeaturedProducts,
} from "@/constants/products";
import { useCart } from "@/contexts/CartContext";
import { useColors } from "@/hooks/useColors";

const HEADER_HEIGHT = 56;

export default function HomeScreen() {
  const colors = useColors();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const featured = getFeaturedProducts();
  const isWeb = Platform.OS === "web";
  const { totalItems } = useCart();

  const topInset = isWeb ? 0 : insets.top;
  const headerTotal = topInset + HEADER_HEIGHT;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* ── Fixed Header ── */}
      <View
        style={[
          styles.header,
          {
            paddingTop: topInset,
            height: headerTotal,
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
          },
        ]}
      >
        {/* Logo */}
        <View style={styles.logoWrap}>
          <View style={styles.logoLeaf}>
            <Text style={styles.leafEmoji}>🌿</Text>
          </View>
          <View>
            <Text style={[styles.logoTop, { color: colors.primary }]}>
              SHATAKSHI
            </Text>
            <Text style={[styles.logoBottom, { color: colors.primary }]}>
              HERBAL
            </Text>
          </View>
        </View>

        {/* Action icons */}
        <View style={styles.actions}>
          <Pressable
            onPress={() => router.push("/shop")}
            style={styles.iconBtn}
            hitSlop={8}
            testID="header-search"
          >
            <Feather name="search" size={22} color={colors.foreground} />
          </Pressable>

          <Pressable
            style={styles.iconBtn}
            hitSlop={8}
            testID="header-wishlist"
          >
            <Feather name="heart" size={22} color={colors.foreground} />
          </Pressable>

          <Pressable
            onPress={() => router.push("/cart")}
            style={styles.iconBtn}
            hitSlop={8}
            testID="header-cart"
          >
            <Feather name="shopping-bag" size={22} color={colors.foreground} />
            {totalItems > 0 && (
              <View
                style={[
                  styles.badge,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Text style={styles.badgeText}>
                  {totalItems > 9 ? "9+" : String(totalItems)}
                </Text>
              </View>
            )}
          </Pressable>

          <Pressable
            style={styles.iconBtn}
            hitSlop={8}
            testID="header-menu"
          >
            <Feather name="menu" size={22} color={colors.foreground} />
          </Pressable>
        </View>
      </View>

      {/* ── Scrollable content ── */}
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={{ paddingBottom: isWeb ? 34 : 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={styles.hero}>
          <Image
            source={require("../../assets/images/hero.png")}
            style={StyleSheet.absoluteFillObject}
            contentFit="cover"
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <View
              style={[
                styles.pill,
                { backgroundColor: "rgba(255,255,255,0.18)" },
              ]}
            >
              <Text style={styles.pillText}>AYUSH CERTIFIED · 100% NATURAL</Text>
            </View>
            <Text style={styles.heroTitle}>
              Pure Herbal Healing for Modern Life
            </Text>
            <Text style={styles.heroSubtitle}>
              Ancient Ayurvedic wisdom, reimagined for today.
            </Text>
            <Pressable
              onPress={() => router.push("/shop")}
              style={[styles.heroButton, { backgroundColor: colors.accent }]}
              testID="hero-shop-now"
            >
              <Text
                style={[
                  styles.heroButtonText,
                  { color: colors.accentForeground },
                ]}
              >
                Shop Now  →
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: colors.foreground }]}>
              {business.rating}
            </Text>
            <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
              Rating
            </Text>
          </View>
          <View
            style={[styles.statDivider, { backgroundColor: colors.border }]}
          />
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: colors.foreground }]}>
              {business.customerCount}
            </Text>
            <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
              Customers
            </Text>
          </View>
          <View
            style={[styles.statDivider, { backgroundColor: colors.border }]}
          />
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: colors.foreground }]}>
              50+
            </Text>
            <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
              Products
            </Text>
          </View>
        </View>

        {/* Shop by Category */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            Shop by Category
          </Text>
          <Link href="/shop" asChild>
            <Pressable testID="see-all-categories">
              <Text style={[styles.seeAll, { color: colors.primary }]}>
                See all
              </Text>
            </Pressable>
          </Link>
        </View>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          scrollEnabled
          renderItem={({ item }) => <CategoryCard category={item} />}
        />

        {/* Featured Products */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            Featured Products
          </Text>
          <Link href="/shop" asChild>
            <Pressable testID="see-all-products">
              <Text style={[styles.seeAll, { color: colors.primary }]}>
                See all
              </Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.productGrid}>
          {featured.map((product) => (
            <View key={product.id} style={styles.productGridItem}>
              <ProductCard product={product} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // ── Header ──────────────────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    zIndex: 10,
  },
  logoWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  logoLeaf: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  leafEmoji: {
    fontSize: 26,
  },
  logoTop: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    lineHeight: 13,
  },
  logoBottom: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    lineHeight: 13,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  iconBtn: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 4,
    right: 2,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    width: "100%",
    aspectRatio: 0.95,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(7, 25, 15, 0.55)",
  },
  heroContent: {
    padding: 20,
    paddingBottom: 28,
    gap: 10,
  },
  pill: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  pillText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 36,
    maxWidth: 320,
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
    maxWidth: 300,
  },
  heroButton: {
    marginTop: 8,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
  },
  heroButtonText: {
    fontSize: 15,
    fontWeight: "700",
  },

  // ── Stats ─────────────────────────────────────────────────────────────────
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  stat: {
    alignItems: "center",
    gap: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 12,
  },
  statDivider: {
    width: StyleSheet.hairlineWidth,
    height: 32,
  },

  // ── Sections ──────────────────────────────────────────────────────────────
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
  },
  seeAll: {
    fontSize: 13,
    fontWeight: "600",
  },
  categoryList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 12,
  },
  productGridItem: {
    width: "47%",
  },
});
