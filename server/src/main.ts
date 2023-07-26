import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


const start = async () =>{
    try {
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)
        const config = new DocumentBuilder()
            .setTitle('MusicTS')
            .setDescription('Doc MusicTS')
            .setVersion('1.0.0')
            .addBearerAuth()
            .addTag('pan1ca')
            .build()
        const document =  SwaggerModule.createDocument(app, config)
        SwaggerModule.setup('/api/docs', app, document)
        app.enableCors()
        await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    }catch (e){
        console.log(e)
    }
}

start()