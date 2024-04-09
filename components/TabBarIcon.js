import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TabBarIcon = ({ name, focused, color, size }) => {
  return focused ? (
    <Icon
      name={name}
      size={size}
      color={color}
      style={{
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#e7e7e7",
        height: 33,
        width: 70,
        borderRadius: 35,
      }}
    />
  ) : (
    <Icon name={`${name}-outline`} size={size} color={color} />
  );
};

export default TabBarIcon;
