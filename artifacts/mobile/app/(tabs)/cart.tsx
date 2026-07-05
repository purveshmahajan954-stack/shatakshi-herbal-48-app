import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import React from "react";
import {
  Alert,
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

export default function CartScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";
  const { lines, setQuantity, removeFromCart, clearCart, totalPrice, isLoaded } =
    useCart();

  const items = lines
    .map((line) => ({ line, product: getProductById(line.productId) }))
    .filter((x) => x.product);

  const handleOrder = () => {
    if (items.length === 0) return;
    const summary = items
      .map(
        (i) =>
          `- ${i.product!.name} (${i.product!.tagline}) x${i.line.quantity} — ₹${
            i.product!.price * i.line.quantity
          }`,
      )
      .join("\n");
    const message = `Hello Shatakshi Herbal, I would like to order:\n\n${summary}\n\nTotal: ₹${totalPrice}`;
    const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => {
      Alert.alert("Unable to open WhatsApp", "Please try calling us instead.");
    });
  };

  if (!isLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingTop: isWeb ? 67 : insets.top,
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: isWeb ? 67 : insets.top,
      }}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.foreground }]}>
          Your Cart
        </Text>
        {items.length > 0 ? (
          <Pressable
            onPress={() => {
              Alert.alert("Clear cart", "Remove all items from your cart?", [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Clear",
                  style: "destructive",
                  onPress: () => clearCart(),
                },
              ]);
            }}
            testID="clear-cart-button"
          >
            <Text style={[styles.clearText, { color: colors.destructive }]}>
              Clear
            </Text>
          </Pressable>
        ) : null}
      </View>

      {items.length === 0 ? (
        <View style={styles.empty}>
          <Feather name="shopping-bag" size={40} color={colors.mutedForeground} />
          <Text style={[styles.emptyTitle, { color: colors.foreground }]}>
            Your cart is empty
          </Text>
          <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
            Browse our herbal collection and add products you love.
          </Text>
          <Pressable
            onPress={() => router.push("/shop")}
            style={[styles.shopButton, { backgroundColor: colors.primary }]}
            testID="empty-cart-shop-button"
          >
            <Text
              style={[styles.shopButtonText, { color: colors.primaryForeground }]}
            >
              Browse Products
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          <ScrollView
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          >
            {items.map(({ line, product }) => (
              <View
                key={line.productId}
                style={[
                  styles.cartItem,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <Link href={`/product/${product!.id}`} asChild>
                  <Pressable>
                    <Image
                      source={product!.image}
                      style={styles.itemImage}
                      contentFit="cover"
                    />
                  </Pressable>
                </Link>
                <View style={styles.itemInfo}>
                  <Text
                    style={[styles.itemName, { color: colors.foreground }]}
                    numberOfLines={2}
                  >
                    {product!.name}
                  </Text>
                  <Text
                    style={[styles.itemTagline, { color: colors.mutedForeground }]}
                  >
                    {product!.tagline}
                  </Text>
                  <Text style={[styles.itemPrice, { color: colors.foreground }]}>
                    ₹{product!.price * line.quantity}
                  </Text>
                </View>
                <View style={styles.qtyControls}>
                  <Pressable
                    onPress={() => {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      setQuantity(line.productId, line.quantity - 1);
                    }}
                    style={[styles.qtyButton, { borderColor: colors.border }]}
                    hitSlop={6}
                    testID={`decrement-${line.productId}`}
                  >
                    <Feather name="minus" size={14} color={colors.foreground} />
                  </Pressable>
                  <Text style={[styles.qtyText, { color: colors.foreground }]}>
                    {line.quantity}
                  </Text>
                  <Pressable
                    onPress={() => {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      setQuantity(line.productId, line.quantity + 1);
                    }}
                    style={[styles.qtyButton, { borderColor: colors.border }]}
                    hitSlop={6}
                    testID={`increment-${line.productId}`}
                  >
                    <Feather name="plus" size={14} color={colors.foreground} />
                  </Pressable>
                </View>
                <Pressable
                  onPress={() => removeFromCart(line.productId)}
                  style={styles.removeButton}
                  hitSlop={8}
                  testID={`remove-${line.productId}`}
                >
                  <Feather name="trash-2" size={16} color={colors.destructive} />
                </Pressable>
              </View>
            ))}
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
            <View style={styles.totalRow}>
              <Text style={[styles.totalLabel, { color: colors.mutedForeground }]}>
                Total
              </Text>
              <Text style={[styles.totalValue, { color: colors.foreground }]}>
                ₹{totalPrice}
              </Text>
            </View>
            <Pressable
              onPress={handleOrder}
              style={[styles.orderButton, { backgroundColor: colors.primary }]}
              testID="order-whatsapp-button"
            >
              <Feather name="message-circle" size={18} color={colors.primaryForeground} />
              <Text
                style={[styles.orderButtonText, { color: colors.primaryForeground }]}
              >
                Order via WhatsApp
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  clearText: {
    fontSize: 14,
    fontWeight: "600",
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    gap: 10,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginTop: 6,
  },
  emptyText: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
  shopButton: {
    marginTop: 14,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 14,
  },
  shopButtonText: {
    fontSize: 14,
    fontWeight: "700",
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 12,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 10,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  itemInfo: {
    flex: 1,
    gap: 2,
  },
  itemName: {
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 17,
  },
  itemTagline: {
    fontSize: 11,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },
  qtyControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  qtyButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    fontSize: 13,
    fontWeight: "600",
    minWidth: 16,
    textAlign: "center",
  },
  removeButton: {
    paddingLeft: 4,
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: 12,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalLabel: {
    fontSize: 14,
  },
  totalValue: {
    fontSize: 22,
    fontWeight: "700",
  },
  orderButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 15,
    borderRadius: 14,
  },
  orderButtonText: {
    fontSize: 15,
    fontWeight: "700",
  },
});
