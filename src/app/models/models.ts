export interface News {
    noticiaId: number; // Cambiado de 'id' y ajustado el tipo de 'string' a 'number'
    tituloNoticia: string; // Cambiado de 'title'
    descripcionNoticia: string; // Cambiado de 'description'
    descripcionBreve: string; // Cambiado de 'description_breve'
    fechaNoticia: string; // Cambiado de 'date'
    imageUrlNoticia: string; // Cambiado de 'image' y corregido el nombre
    categoriaId: category; // Nuevo campo agregado, ajustado el tipo de 'string' a 'number'
}

interface category {
    id: number;
    categoryName: string;
    descriptionCategory: string;

}