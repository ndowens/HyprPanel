import { Opt } from 'src/lib/options';
import { RecursiveOptionsObject, HexColor, MatugenTheme } from 'src/lib/options/options.types';

export const isOpt = <T>(value: unknown): value is Opt<T> =>
    typeof value === 'object' && value !== null && 'value' in value && value instanceof Opt;

export const isOptString = (value: unknown): value is Opt<string> => {
    return value instanceof Opt && typeof value.get() === 'string';
};

export const isOptNumber = (value: unknown): value is Opt<number> => {
    return value instanceof Opt && typeof value.get() === 'number';
};

export const isOptBoolean = (value: unknown): value is Opt<boolean> => {
    return value instanceof Opt && typeof value.get() === 'boolean';
};

export const isOptMatugenTheme = (value: unknown): value is Opt<MatugenTheme> => {
    return value instanceof Opt && typeof value.get() === 'object' && 'specificProperty' in value.get();
};

export const isRecursiveOptionsObject = (value: unknown): value is RecursiveOptionsObject => {
    return typeof value === 'object' && value !== null && !(value instanceof Opt);
};

export const isHexColor = (val: unknown): val is HexColor => {
    return typeof val === 'string' && /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val);
};
