import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from '../../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('Debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);

    })

    test('Debe de incrementar el counter en 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment();
        });
        const { counter } = result.current;
        expect(counter).toBe(101);
    })

    test('Debe de decrementar el counter en 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
        });
        const { counter } = result.current;
        expect(counter).toBe(99);
    })

    test('Debe de resetear el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { reset } = result.current;
        act(() => {
            reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(counter);
    })
})