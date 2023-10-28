import { v4 as uuidV4 } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error, filename: string) => void,
) => {
  const fileExtension = file.mimetype.split('/')[1];

  const fileName = `${uuidV4()}.${fileExtension}`;

  callback(null, fileName);
};
