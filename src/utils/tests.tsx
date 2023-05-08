import { RenderResult, render } from '@testing-library/react';
import { ComponentType, Context, ProviderProps, ReactNode } from 'react';

type Options<T> = {
  value: T;
  context: Context<T> & {
    Provider: ComponentType<ProviderProps<T>>;
  };
};

/**
 * Renders a React component wrapped in a context provider for testing purposes.
 * @template T - The type of the context value.
 * @param {ReactNode} children - The child elements to be rendered within the context provider.
 * @param {Options<T>} options - The context provider options, including the context object and its value.
 * @returns {RenderResult} - The rendered result of the wrapped component.
 */
const customRender = <T,>(
  children: ReactNode,
  { value, context }: Options<T>
): RenderResult =>
  render(<context.Provider value={value}>{children}</context.Provider>);

export { customRender as render };
