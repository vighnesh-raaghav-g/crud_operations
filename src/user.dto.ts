import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    age: number;
    @ApiProperty()
    salary: number;
    @ApiProperty()
    company: string;
}