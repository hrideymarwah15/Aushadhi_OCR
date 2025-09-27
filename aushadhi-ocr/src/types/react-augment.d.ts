/// <reference types="react" />

declare module 'react' {
  interface ComponentType<P = any> {
    (props: P, context?: any): ReactElement<P, any> | null;
  }

  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }

  type JSXElementConstructor<P> = ((props: P) => ReactElement<P, any> | null) | (new (props: P) => Component<P, any>);

  interface ReactNode {
    // Type declarations
  }

  export type FC<P = {}> = FunctionComponent<P>;
  export interface FunctionComponent<P = {}> {
    (props: P & { children?: ReactNode }, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
  }
}