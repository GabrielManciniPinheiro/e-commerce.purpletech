import { OrderStatus } from "@prisma/client";

export const getOrderStatus = (orderStatus: OrderStatus) => {
  return {
    [OrderStatus.PAYMENT_CONFIRMED]: "Pagamento Realizado",
    [OrderStatus.WAITING_FOR_PAYMENT]: "Aguardando Pagamento",
  }[orderStatus];
};
