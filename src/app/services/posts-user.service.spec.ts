import { TestBed } from '@angular/core/testing';

import { PostsUserService } from './posts-user.service';

describe('PostsUserService', () => {
  let service: PostsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
