import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getStudents() {
    return [
      {
        id: 1,
        name: 'syket',
      },
    ];
  }
}
