/* eslint-disable @typescript-eslint/no-explicit-any */
// export type Type = string;
export type Props = Record<string, any>;
export type Key = string | number;
export type Ref = any;
export type ElementType = string;

export interface ReactElementType {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	props: Props;
	ref: Ref;
}
