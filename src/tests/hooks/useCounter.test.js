import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter  } from '../../hooks/useCounter'

describe('prueba para useCounter Hook', () => {

    test('debe de retornar los valores por defecto ', () => {
         
        const { result } = renderHook( () => useCounter() )

        expect(result.current.state).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })
    
    test('debe de retornar el counter en 50 ', () => {
         
        const { result } = renderHook( () => useCounter(50) )

        expect(result.current.state).toBe(50)
    })

    test('debe de incrementar en 1', () => {
         
        const { result } = renderHook( () => useCounter(50) )
        const { increment } = result.current

        act(() => {
            increment()
        })

        const { state } = result.current;
        expect(state).toBe(51)
    })
    test('debe de decrementar en 1', () => {
         
        const { result } = renderHook( () => useCounter(50) )
        const { decrement } = result.current

        act(() => {
            decrement()
        })

        const { state } = result.current;
        expect(state).toBe(49)
    })

    test('debe de resetear el valor', () => {
         
        const { result } = renderHook( () => useCounter(50) )
        const { increment, reset } = result.current

        act(() => {
            increment()
            reset()
        })

        const { state } = result.current;
        expect(state).toBe(50)
    })
    
});