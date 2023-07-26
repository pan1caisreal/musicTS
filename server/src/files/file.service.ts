import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

export enum FileType {
    AUDIO = "audio",
    IMAGE = "image"

}

@Injectable()
export class FileService{

    createFile(type: FileType, file) : string{
        try {
            const fileExtension = file.originalname.split('.').pop()
            const fileName = uuid.v4() + '.' + fileExtension
            const filePath = path.resolve(__dirname, '..', 'static', type)
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath,{recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath,fileName), file.buffer)
            return type + '/' + fileName
        }catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    removeFile(filename: string){
        try {
            const fileName = filename.split('/')[1]
            const type = filename.split('/')[0]
            const filePath =  path.resolve(__dirname, '..', 'static', type, fileName)
            if(fs.existsSync(filePath)) {
                const fileStats = fs.statSync(filePath)
                if(fileStats.isFile()){
                    fs.unlinkSync(filePath)
                }else{
                    throw new Error('Not a File. Unable to remove.')
                }
            }else{
                throw new Error('File not Found. Unable to remove')
            }
        }catch (e) {
            throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
        }
    }
}