import http from "../../helper/http";

export default function homePageHandler(req, res) {
    const data = http.get('home-page')
    const dataObj = data?.data.data[0];
    if (dataObj) {
        res.status(200).json(dataObj)
    } else {
        res.status(404).json({ message: `Page Not Found` })
    }
}