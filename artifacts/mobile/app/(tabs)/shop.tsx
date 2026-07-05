import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/constants/products";
import { useColors } from "@/hooks/useColors";

export default function ShopScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";
  const params = useLocalSearchParams<{ category?: string }>();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    params.category ?? null,
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory
        ? p.categoryId === activeCategory
        : true;
      const matchesQuery = query
        ? p.name.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  // Pair products into rows of 2 for the main FlatList
  const rows = useMemo(() => {
    const result: (typeof products)[] = [];
    for (let i = 0; i < filtered.length; i += 2) {
      result.push(filtered.slice(i, i + 2));
    }
    return result;
  }, [filtered]);

  const chipData = [{ id: null, shortName: "All" }, ...categories];

  const ListHeader = (
    <View>
      {/* Title + Search */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.foreground }]}>Shop</Text>
        <View
          style={[
            styles.searchBar,
            { backgroundColor: colors.muted, borderColor: colors.border },
          ]}
        >
          <Feather name="search" size={16} color={colors.mutedForeground} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search products"
            placeholderTextColor={colors.mutedForeground}
            style={[styles.searchInput, { color: colors.foreground }]}
            testID="shop-search-input"
          />
          {query.length > 0 ? (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <Feather name="x" size={16} color={colors.mutedForeground} />
            </Pressable>
          ) : null}
        </View>
      </View>

      {/* Category chips — horizontal scroll inside a fixed-height wrapper */}
      <FlatList
        data={chipData}
        horizontal
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipRow}
        style={styles.chipList}
        renderItem={({ item }) => {
          const active = activeCategory === item.id;
          return (
            <Pressable
              onPress={() => setActiveCategory(item.id)}
              style={[
                styles.chip,
                {
                  backgroundColor: active ? colors.primary : colors.muted,
                  borderColor: active ? colors.primary : colors.border,
                },
              ]}
              testID={`category-chip-${item.id ?? "all"}`}
            >
              <Text
                style={[
                  styles.chipText,
                  {
                    color: active
                      ? colors.primaryForeground
                      : colors.foreground,
                  },
                ]}
              >
                {item.shortName}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.list,
        { paddingTop: isWeb ? 67 : insets.top },
      ]}
      data={rows}
      keyExtractor={(_, i) => String(i)}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Feather name="search" size={32} color={colors.mutedForeground} />
          <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
            No products found
          </Text>
        </View>
      }
      renderItem={({ item: row }) => (
        <View style={styles.row}>
          {row.map((product) => (
            <View key={product.id} style={styles.gridItem}>
              <ProductCard product={product} />
            </View>
          ))}
          {/* Fill empty slot when odd number of items in last row */}
          {row.length === 1 ? <View style={styles.gridItem} /> : null}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    height: 44,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  chipList: {
    flexGrow: 0,
  },
  chipRow: {
    paddingHorizontal: 20,
    gap: 8,
    paddingBottom: 14,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
  },
  chipText: {
    fontSize: 12,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  gridItem: {
    flex: 1,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    gap: 10,
  },
  emptyText: {
    fontSize: 14,
  },
});
