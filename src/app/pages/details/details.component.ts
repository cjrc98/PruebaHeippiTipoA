import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AlbumsService } from 'src/app/services/albums.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsUserService } from '../../services/posts-user.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: Array<any>;
  dataAlbums: Array<any>;
  dataPostsU: Array<any>;
  id: any;

  constructor(private usersService:UsersService,
     private actRouter: ActivatedRoute,
     private albumsService:AlbumsService,
     private postsUserService:PostsUserService,
     private router: Router) {
     this.id = this.actRouter.snapshot.paramMap.get('id');
     console.log(this.id);
     this.data = new Array<any>;
     this.dataAlbums = new Array<any>;
     this.dataPostsU = new Array<any>;
     this.getDataFromApiUser();
  }
  getDataFromApiUser(){
    this.usersService.getData().subscribe((data) =>{
      this.data = data;
    })
    this.albumsService.getDataAlbums(this.id).subscribe((dataAlbums) =>{
      this.dataAlbums = dataAlbums;
    })  
    this.postsUserService.getDataPostsUsers(this.id).subscribe((dataPostsU) =>{
      this.dataPostsU = dataPostsU;
    })               
  }
  volverHome(){
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
