export class Column{
    name: string;
    header: string;
    type: string | number | boolean | Date | Function;
    constructor(name: string, header: string, type: string | number | boolean | Date | Function){
        this.name = name;
        this.header = header;
        this.type = type;
    }
}