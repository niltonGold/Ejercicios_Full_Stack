

export const consoleMiddleware = (req, res, next) => {
    console.log(`Solicitud de un cliente: ${req.hostname} ${req.path}`);
    next();
}