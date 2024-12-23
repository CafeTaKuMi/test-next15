"use client";
import { App, Button, Card } from "antd";
import React from "react";
import NotificationDemo from "../components/NotificationDemo";

type Props = {};

const { Meta } = Card;

export default function page({}: Props) {
  return (
    <App>
      {" "}
      <Button type="primary">Button</Button>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <NotificationDemo />
    </App>
  );
}
