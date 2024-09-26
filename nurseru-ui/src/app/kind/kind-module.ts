export class Kind {
        // من اجل تمرير القيم
        constructor(value?: Kind){
            // نعطيه الهدف والمصدر
            Object.assign(this, value)
        }
    kindId:number |undefined;
    kindName:string |undefined;
    categoryId:number |undefined;
    sectorId:number |undefined;
}