export interface ColorsEntity {
  white: string;
  darkGrey: string;
  black: string;
  success: string;
  error: string;
  warning: string;
  darkPurple: string;
  lightPurple: string;
  darkBlue: string;
}

export interface SizeEntity {
  xxl: string;
  xl: string;
  l: string;
  m: string;
  s: string;
}

export interface StyleProperties {
  colors: ColorsEntity;
  fontsize: SizeEntity;
}

export interface PropsStyle {
  theme: StyleProperties;
}
