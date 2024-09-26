export class Sector{
        // من اجل تمرير القيم
        constructor(value?: Sector){
            // نعطيه الهدف والمصدر
            Object.assign(this, value)
        }
    sectorId : number | undefined;
    sectorName : string | undefined;
}