import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Saitama';
    const url = 'https://localhost/algo.jpg';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostar la imagen con el URL y el ALT indicados', () => {
        render(<GifGridItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe mostrar el title en el componente', () => {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});