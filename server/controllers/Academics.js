const multer = require('multer');
const fs = require('fs');
const path = require('path');



exports.uploadPYQ = async (req, res) => {
    try {
        const upload = multer({ dest: 'uploads/' });
        const files = req.files;
        if (!files) {
        return res.status(400).json({ message: "No files uploaded" });
        }
    
        const pyq = files.map((file) => {
        return {
            name: file.originalname,
            path: file.path,
        };
        });
    
        return res.status(200).json({ pyq });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};