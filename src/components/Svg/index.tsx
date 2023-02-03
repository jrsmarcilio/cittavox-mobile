import { Pressable } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { theme } from '../../global/styles/theme';

type SVGProps = {
  backgroundColor?: string;
  SVG: React.FC<SvgProps>
  width?: number;
  height?: number;
}

export function SVGComponent({ backgroundColor, SVG, width, height }: SVGProps) {
  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor ? backgroundColor : theme.colors.primary,
        width: width ? width : 50,
        height: height ? height : 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SVG />
    </Pressable>
  );
};