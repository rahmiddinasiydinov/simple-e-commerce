export type Product = {
    id: number,
    name: string,
    desc: string,
    photo: string,
    categoryId: number, 
    categoryName?: string, 
    edited?: boolean
}