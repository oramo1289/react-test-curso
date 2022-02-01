
export const todoReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'add':
             
            return [...state, action.payload];        
    
        case 'delete':
            const newSate = [...state].filter((todo) => todo.id !== action.payload )

            return newSate;
        
        case 'toggle':
           return [...state].map( todo => 
                (todo.id === action.payload) 
                    ? { ...todo, done: !todo.done } 
                    : todo
            )

        default:
            return state;
    }

}
