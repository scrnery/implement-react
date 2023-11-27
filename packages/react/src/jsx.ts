/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbol';
import {
	ElementType,
	Key,
	Props,
	Ref,
	ReactElementType
} from 'shared/ReactType';

const ReactElement = (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType => {
	const element: ReactElementType = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props
	};
	return element;
};

export const jsx = (
	type: ElementType,
	config: Record<string, any>,
	...otherProps: any[]
) => {
	let ref = null;
	const props: Record<string, any> = {};
	let key = null;
	if (config) {
		for (const prop in config) {
			const val = config[prop];
			if (prop === 'ref' && val) {
				ref = val;
			}
			if (prop === 'key' && val) {
				key = val;
			}
			if (Object.hasOwnProperty.call(config, prop)) {
				props[prop] = val;
			}
		}
	}
	if (otherProps.length > 0) {
		props.children = otherProps.length === 1 ? otherProps[0] : otherProps;
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDev = (type: ElementType, config: Record<string, any>) => {
	let ref = null;
	const props: Record<string, any> = {};
	let key = null;
	if (config) {
		for (const prop in config) {
			const val = config[prop];
			if (prop === 'ref' && val) {
				ref = val;
			}
			if (prop === 'key' && val) {
				key = val;
			}
			if (Object.hasOwnProperty.call(config, prop)) {
				props[prop] = val;
			}
		}
	}
	return ReactElement(type, key, ref, props);
};
