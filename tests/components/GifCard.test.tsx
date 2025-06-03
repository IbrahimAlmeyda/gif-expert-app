import { render, screen } from "@testing-library/react";
import GifCard from "../../src/components/GifCard";

describe("Pruebas en <GifCard />", () => {
  it("debe mostrar el componente correctamente con los props dados", () => {
    const gif = { id: "8291", title: "Avatar", url: "https://avatar-image" };

    render(<GifCard gif={gif} />);

    // Verificar que la imagen este en el documento
    const img = screen.getByRole("img", { name: /avatar/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", gif.url);
  });
});
