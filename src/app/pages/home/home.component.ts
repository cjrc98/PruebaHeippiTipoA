import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Array<any>;
  dataPosts: Array<any>;
  dataAlbums: Array<any>;

  constructor(private usersService:UsersService,
              private albumsService:AlbumsService,
              private postsService:PostsService,
              private router:Router
            ) {
    this.data = new Array<any>;
    this.dataPosts = new Array<any>;
    this.dataAlbums = new Array<any>;
    this.getDataFromAPI();
   }

  ngOnInit(): void {
  }

  getDataFromAPI(){
    this.usersService.getData().subscribe((data) =>{
    console.log(data); 
    this.data = data;
    })
    this.postsService.getDataPosts().subscribe((dataPosts) =>{
    console.log(dataPosts);
    this.dataPosts = dataPosts;
    })               
  }
  userIndividual(id: any){  
    this.router.navigate(['details', id])
  }
  volverHome(){
    this.router.navigate(['welcome'])
  }
}
