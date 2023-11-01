import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @ApiResponse({
    status: 200,
    description: 'Execute seed',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  // @Auth(ValidRoles.admin)
  executeSeed() {
    return this.seedService.executeSeed();
  }
}
