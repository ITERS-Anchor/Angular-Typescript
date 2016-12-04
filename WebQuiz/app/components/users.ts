import { Component, EventEmitter,ChangeDetectionStrategy,OnInit} from "@angular/core";
import { UsersService } from "../services/users";
import { SearchPipe } from "../search-pipe";


@Component({
    selector: "users-component",
    templateUrl: "/partial/users",
    providers: [UsersService],
    //pipes: [SearchPipe],
    //events:['listChange']
})

export class UsersComponent implements OnInit {    
    userlist: any;
    
    constructor(private usersService: UsersService) { }

    ngOnInit(){
        this.usersService.getAllUsers().then((list) => {
            this.userlist = list;
            console.info(list);
        });
        
    }
}