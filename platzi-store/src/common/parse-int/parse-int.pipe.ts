import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const parsedVal = parseInt(value, 10);
    if (isNaN(parsedVal)) {
      throw new BadRequestException(`${value} is not a number`);
    }
    return parsedVal;
  }
}
