import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      default: string;
      lightgray: string;
    };
    fontColor: {
      primary: string;
      secondary: string;
      warning: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
