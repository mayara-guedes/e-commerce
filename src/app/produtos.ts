export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
}
export interface IProdutoCarrinho extends IProduto{
    quantidade: number;

}

export const produtos = [
    { id: 1, descricao: "Mouse Gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg" },
    { id: 2, descricao: 'Monitor 28"', preco: 1200.50, descricaoPreco: "À vista no PIX", desconto: 2000.00, imagem: "./assets/monitor-1.jpg" },
    { id: 3, descricao: "Teclado One", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg" },
    { id: 4, descricao: "Fone One", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg" },
    { id: 5, descricao: "Fone Two", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg" },
    { id: 6, descricao: "Fone ", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg" },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg" },
    { id: 8, descricao: "Combo - Placas de Vídeo", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg" },
    { id: 9, descricao: "Processador ", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg" },
    { id: 10, descricao: "Notebook One", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg" },
    { id: 11, descricao: "Notebook Plus", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg" },
    { id: 12, descricao: "Mouse", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png" }
]