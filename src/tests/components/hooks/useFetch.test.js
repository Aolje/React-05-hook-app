import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../../hooks/useFetch"

describe('Pruebas en useFetch', () => {
    test('should return default information', () => {
        const { result } = renderHook(() => useFetch('https://breakingbadapi.com/api/quotes/1'));
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });

    test('Debe de tener la info deseada, loading false, error false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate();
        const { data, loading, error } = result.current;

    })


})