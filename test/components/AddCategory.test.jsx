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
        const onNewCategory = jest.fn();
        
        render(< AddCategory onNewCategory={ onNewCategory } />); 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);
    
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toBeCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
      })

      test('should not call onNewCategory if the textbox is empty', () => { 
        const onNewCategory = jest.fn();
        
        render(< AddCategory onNewCategory={ onNewCategory } />); 
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toBeCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
       })

      
 })