const errorHandlerMiddleware = (error, req, res, next) => {
    console.log(error);
    res.status(500).json({error: 'there was an error'})
} 
export default errorHandlerMiddleware