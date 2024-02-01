

import {inputValidationMiddleware} from "../middlewares/inputValidation/input-validation-middleware";
import {PostRepository} from "../repositories/post-repository";
import {body} from "express-validator";
import {BlogRepository} from "../repositories/blog-repository";

const titleValidator = body('title').isString().trim().isLength({
    min: 1,
    max: 30
}).withMessage('Incorrect title')

const shortDescriptionValidator = body('shortDescription').isString().withMessage('shortDescription must be a string').trim().isLength({
    min: 0,
    max: 100
}).withMessage('Incorrect Shortdescription')

const contentValidator = body('content').isString().withMessage('content must be a string').trim().isLength({
    min: 1,
    max: 1000
}).withMessage('Incorrect Content')

export const postIdValidator = body('blogId').isString().custom((value:string) => {
    const post = BlogRepository.getById(value);
    console.log(post)
    if (!post){
        throw Error ('Incorrect postId')
    }
    return true

}
).withMessage('Incorrect PostId')

export const postValidation = () =>[titleValidator, shortDescriptionValidator, contentValidator, postIdValidator, inputValidationMiddleware]

