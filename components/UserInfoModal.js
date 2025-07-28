import { Modal, Text, Pressable, View } from "react-native";
import { useSocket } from "../global/socketContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const UserInfoModal = ({ toggleModal, visible }) => {
  const socket = useSocket();

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          toggleModal();
        }}
      >
        <View className="mt-[50%] p-2 w-1/2 rounded-2xl bg-primary-250 absolute left-1/4">
          <View className="w-9">
            <Icon
              name="close-thick"
              color="#075e54"
              size={32}
              onPress={toggleModal}
            />
          </View>
          <View className="m-5 p-9 items-center">
            <Text className="mb-4 text-xl text text-center" selectable>
              User ID: <Text className="font-extrabold">{socket.id}</Text>
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default UserInfoModal;
