import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import styles from "../styles";

export default function ProgressChart({
  size = 180,
  strokeWidth = 12,
  gap = 12,
  data,
}) {
  const radius = (size - strokeWidth) / 2;

  const hexToRgba = (hex, opacity) => {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        "," +
        opacity +
        ")"
      );
    }
    return hex;
  };

  return (
    <View style={styles.center}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data?.map((item, index) => {
          const r = radius - index * (strokeWidth + gap);
          const circumference =
            2 * Math.PI * (radius - index * (strokeWidth + gap));
          const progress = (item.value / item.max) * circumference;

          const startX = size / 2;
          const startY = size / 2 - r;

          return (
            <View>
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                stroke={hexToRgba(item.color, 0.2)}
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${progress}, ${circumference}`}
                strokeLinecap="round"
                fill="transparent"
                rotation="-90"
                origin={`${size / 2}, ${size / 2}`}
              />

              <Circle
                cx={startX}
                cy={startY}
                r={strokeWidth / 2.2} // size of the dot
                fill="#fff"
              />
            </View>
          );
        })}
      </Svg>
    </View>
  );
}
