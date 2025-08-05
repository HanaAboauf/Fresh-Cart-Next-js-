
export const BaseUrl = "https://ecommerce.routemisr.com/api/v1/";

export interface Product {

            
            sold: string,
            images: string[],
            subcategory: Subcategory[],
            ratingsQuantity: number,
            _id: string,
            title: string,
            slug: string,
            description: string,
            quantity: number,
            price: number,
            imageCover: string,
            category:Category,
            brand:Brand,
            ratingsAverage: number,
            createdAt: string,
            updatedAt: string,
            id: string
        
}

interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

interface Brand  {
     _id: string;
     name: string;
     slug: string;
    image: string;
}

interface Subcategory{
     _id: string;
     name: string;
     slug: string;
    category: string;
}