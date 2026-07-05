import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, router } from "expo-router";
import React from "react";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ProductCard } from "@/components/ProductCard";
import { getCategoryById, getProductsByCategory } from "@/constants/products";
import { useColors } from "@/hooks/useColors";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  const category = getCategoryById(id);
  const items = getProductsByCategory(id);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={[
          styles.header,
          { paddingTop: (isWeb ? 67 : insets.top) + 8 },
        ]}
      >
        <Pressable
          onPress={() => router.back()}
          style={[styles.backButton, { backgroundColor: colors.muted }]}
          hitSlop={10}
          testID="category-back-button"
        >
          <Ionicons name="arrow-back" size={18} color={colors.foreground} />
        </Pressable>
        <View style={styles.headerText}>
          <Text style={[styles.title, { color: colors.foreground }]}>
            {category?.shortName ?? "Category"}
          </Text>
          <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
            {category?.description}
          </Text>
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        scrollEnabled={items.length > 0}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="cube-outline" size={32} color={colors.mutedForeground} />
            <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
              No products in this category yet
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <ProductCard product={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 19,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 12,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },
  row: {
    gap: 12,
  },
  gridItem: {
    flex: 1,
    marginBottom: 12,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    gap: 10,
  },
  emptyText: {
    fontSize: 14,
  },
});
