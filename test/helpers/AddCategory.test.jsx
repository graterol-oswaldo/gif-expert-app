import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Testing AddCategory Component', () => { 
    test('should change textbox value', () => { 
        render(<AddCategory onNewCategory={ () => {} } />)
        const input = screen.getByRole("textbox");
        fireEvent.input(input,{ target: {value: 'Saitama' }});
        expect( input.value ).toBe('Saitama');
        // screen.debug()
     })

     test('should call onNewCategory if the textbox is not empty', () => { 
        const inputValue = 'Saitama';
        
        render(< AddCategory onNewCategory={ () => {} } />); 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);
    
        expect(input.value).toBe('')

      })
 })