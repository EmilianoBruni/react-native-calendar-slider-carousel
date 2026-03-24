declare module 'react-native' {
  import * as React from 'react';

  export const Platform: {
    OS: string;
  };

  export class ScrollView extends React.Component<any> {
    scrollTo(options: { x?: number; y?: number; animated?: boolean }): void;
  }

  export const Text: React.ComponentType<any>;
  export const TouchableOpacity: React.ComponentType<any>;
  export const View: React.ComponentType<any>;

  export const StyleSheet: {
    create<T extends Record<string, any>>(styles: T): T;
  };
}
