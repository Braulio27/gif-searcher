import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';
    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });
    const gifs = [{
        id: 'ABC',
        title: 'Cualquier cosa',
        url: 'https://localhost/imagen.jpg',
    },
    {
        id: '123',
        title: 'Cualquier cosa',
        url: 'https://localhost/imagen.jpg',
    }
    ]
    test('debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
        // screen.debug();
    });
});