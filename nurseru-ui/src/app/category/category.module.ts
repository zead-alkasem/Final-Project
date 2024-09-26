export class Category{
    // من اجل تمرير القيم
    constructor(value?: Category){
        // نعطيه الهدف والمصدر
        Object.assign(this, value)
    }
    categoryId:number |undefined;
    categoryName:string |undefined;
}