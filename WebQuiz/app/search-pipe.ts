import { Pipe } from "@angular/core";

@Pipe({
    name: "search",
    //pure: false,
})
export class SearchPipe {
    
    transform(value, [query]) {
      
        return value.filter((item) => new RegExp(query).test(item.Name.toLocaleLowerCase()));
        //return value.filter((item) => item.Name.includes(query));       
    }
}