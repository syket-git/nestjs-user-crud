import { Controller, Get } from '@nestjs/common';
import { StudentService } from './students.service';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/all')
  getStudents() {
    return this.studentService.getStudents();
  }
}
