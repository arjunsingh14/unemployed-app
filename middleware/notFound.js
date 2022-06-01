const notFoundMiddleware = (req, res) => {
    return res.status(404).send('Route does note exist')
} 


export default notFoundMiddleware