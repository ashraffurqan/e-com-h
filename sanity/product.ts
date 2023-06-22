import { off } from "process";
import { defineField } from "sanity";

export const product={
    name: 'product',//this use for api data fetch
    type: 'document',
    title: 'Product',//this title use for studio dash bord name
    fields: [
        {
            name: 'title', //this use for api data fetch
            title: 'Title',//this title use for studio dash bord name
            type: 'string'
            
        },
        {
            name: 'description', //this use for api data fetch
            title: 'Product Description',//this title use for studio dash bord name
            type: 'string'
            
        },
        {
            
            name: 'price', //this use for api data fetch
            title: 'Product Price',//this title use for studio dash bord name
            type: 'number'

        },
        {
            name: 'image', //this use for api data fetch
            title: 'Product Image',//this title use for studio dash bord name
            type: 'image'
            
        }
        ,
        defineField({
            name: 'category', //this use for api data fetch
            title: 'Product Category',//this title use for studio dash bord name
            type: 'reference',
            to: [{
                type:"category"
            }]
            
        })
    ]
}