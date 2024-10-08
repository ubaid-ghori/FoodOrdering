import { Text, FlatList } from "react-native";
import orders from "@assets/data/orders";
import OrderListItem from "@/components/OrderListIem";
export default function Orders() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{
        padding: 16,
        gap: 10,
      }}
    />
  );
}
