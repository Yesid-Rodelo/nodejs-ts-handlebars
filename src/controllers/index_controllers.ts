import {Request, Response} from 'express';

export class IndexControllers {

    public index(req: Request, res: Response) {
        res.render('index', {
            title: 'Bienvenido a BooksApp'
        });
    }

}

// export const controllers = new Controllers();