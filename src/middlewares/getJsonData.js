import multer from 'multer'
const upload = multer()

const getJsonData = upload.array();

export default getJsonData