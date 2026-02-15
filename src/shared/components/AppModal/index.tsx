import { useModalStore } from '@/shared/store/modal';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';

export function AppModal() {
  const { isOpen, content, config, close } = useModalStore();

  if (!isOpen || !content) return null;

  return (
    <Modal
      visible={isOpen}
      animationType={config.animationType}
      transparent={config.transparent}
      statusBarTranslucent={config.statusBarTranslucent}
      onRequestClose={close}
    >
      <TouchableWithoutFeedback onPress={close}>
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View className="w-full items-center">{content}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
