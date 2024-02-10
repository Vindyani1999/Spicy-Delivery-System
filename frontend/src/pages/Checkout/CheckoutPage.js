import React from "react";
import { useCart } from "../../Hooks/UseCart";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import classes from "./checkoutPage.module.css";
import Title from "../../components/Title/Title";
import Input from "../../components/Imputs/Input";
import { createOrder } from "../../services/orderService";
import Button from "../../components/Buttons/Button";
import OrderItemsList from "../../components/OrderItemsList/OrderItemsList";
import Map from "../../components/Map/Map";

export default function CheckoutPage() {
  const { cart } = useCart();
  const { user } = useAuth();
  const Navigate = useNavigate();
  const [order, setOrder] = useState({ ...cart });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submit = async (data) => {
    if (!order.addressLatLng) {
      toast.warning("Please select your location on the map!");
      return;
    }

    await createOrder({ ...order, name: data.name, address: data.address });
    Navigate("/payment");
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={classes.container}>
        <div className={classes.content}>
          <Title title="Order Form" fontSize="1.6rem" />
          <div className={classes.inputs}>
            <Input
              defaultvalue={user.name}
              label="Name"
              {...register("name")}
              error={errors.name}
            />
            <Input
              defaultvalue={user.address}
              label="Address"
              {...register("address")}
              error={errors.address}
            />
          </div>

          <OrderItemsList order={order} />
        </div>
        <div>
          <Title title="Choose Your Location" fontSize="1.6rem" />
          <Map
            location={order.addressLatLng}
            onChange={(latLng) => {
              console.log(latLng);
              setOrder({ ...order, addressLatLng: latLng });
            }}
          />

          <div className={classes.buttons_container}>
            <div className={classes.buttons}>
              <Button
                type="submit"
                text="Go To Payment"
                width="100%"
                height="3rem"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
