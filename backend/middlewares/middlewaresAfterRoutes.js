module.exports = (app) => {

    app.all("*", (req, res, next) => {
        res.status(404).json({
            status: "Error",
            message: "unhandled route",
        });
    });

      
    // Error first middleware
    app.use((err, req, res, next) => {
        if(err.isOperational){
            return res.status(err.statusCode || 400).json({
                status: err.status || "error",
                message: err.message || "Error has accured",
            });
        } else {
            return res.status(500).json({
                status: "error",
                message: "Server error!",
            });
        }
        
    });
}