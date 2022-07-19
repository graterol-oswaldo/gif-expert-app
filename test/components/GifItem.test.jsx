import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

const title = 'saitama GIF';
const url = 'https://media0.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=3e5459b0og2rrkejg8y81tty3j2i6081jtabq03tneqbgmuc&rid=giphy.gif&ct=g'

describe('Testing <GifItem />', () => { 
    test('should match snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     })

     test('should show the image with the URL and ALT corresponding', () => { 
        render(<GifItem title={title} url={url} />)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
      })
      test('should show the paragraph corresponding', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText( title )).toBeTruthy();
        
       })
 })