import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../../hooks/useForm";

describe('Pruebas es useForm', () => {
    const initialForm = {
        name: 'Alejandro',
        email: 'alejo@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Alfonzo'
                }
            });
        });
        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'Alfonzo' });
    });

    test('Debe de restablecer el formulario con reset', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Alfonzo'
                }
            });
            reset();

        });
        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);

    });
})