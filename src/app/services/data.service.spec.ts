import { SpectatorService, createServiceFactory } from '@ngneat/spectator';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let spectator: SpectatorService<DataService>;
  let httpMock: HttpTestingController;

  const createService = createServiceFactory({
    service: DataService,
    imports: [HttpClientTestingModule],
  });

  beforeEach(() => {
    spectator = createService();
    httpMock = spectator.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return todos', () => {
    const mockResponse = [
      { id: 1, title: 'mock todo 1', completed: false },
      { id: 2, title: 'mock todo 2', completed: true },
      { id: 3, title: 'mock todo 3', completed: false },
    ];

    spectator.service.getTodos().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users/1/todos');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
