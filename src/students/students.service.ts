import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {

  private students: CreateStudentDto[] = [];

  create(createStudentDto: CreateStudentDto) {
    this.students.push(createStudentDto);

    return this.students;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students[id];
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    this.students[id]=updateStudentDto;
    return this.students;
  }

  remove(id: number) {
    this.students.splice(id,1)
    return this.students;
  }
}
