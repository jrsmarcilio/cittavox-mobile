import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Avatar } from '../Avatar';
import { styles } from './styles';

import { theme } from '../../global/styles/theme';

export interface HeaderNavigateProps {
  title: string;
  backScreenNavigation?: string;
  iconRight?: any;
  handleRight?: any;
  iconLeft?: any;
  handleLeft?: any;
}

export function HeaderNavigate(props: HeaderNavigateProps) {

  const router = useNavigation();

  const handleRightNavigate = () => {
    if (props.backScreenNavigation) {
      router.navigate(props.backScreenNavigation as never);
      return;
    }

    props.handleRight();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? theme.colors.grayScale[100] : 'transparent', marginLeft: 10 },
            styles.button
          ]} onPress={handleRightNavigate}
        >
          {props.iconRight ? (
            <Avatar IconSvg={props.iconRight} />
          ) : (
            <Icon name="arrow-back" size={15} color={theme.colors.overlay} />
          )}
        </Pressable>

        <Text style={styles.title}>
          {props.title}
        </Text>


        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? theme.colors.grayScale[100] : 'transparent', marginRight: 10 },
            styles.button
          ]} onPress={props.handleLeft}
        >
          {props.iconLeft ? (
            <Avatar IconSvg={props.iconLeft} />
          ) : (
            <Text></Text>
          )}
        </Pressable>

      </View>
    </View >
  )

}