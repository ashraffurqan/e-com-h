import { defineType,defineField, validation } from "sanity"
export const category =defineType(

    {
        name: 'category',//this use for api data fetch
        type: 'document',
        title: 'Category',//this title use for studio dash bord name
        fields: [
            defineField({
                name: 'name', //this use for api data fetch
                title: 'Category Name',//this title use for studio dash bord name
                type: 'string'
              
                
            }),
         
     
        ]
    }
)