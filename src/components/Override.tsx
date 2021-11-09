import React from "react";

type BaseProps = ReactNative.TextInputProps;
interface Table extends BaseProps {
  name: string;
  onChangeText: (args: { name: string; value: string }) => void;
  style: ReactNative.TextStyle;
}