import { useState } from "react";
import axios from "axios";
const GetImage = () => {
const [photo, setPhoto] = useState("");
const [result, setResult] = useState([]);
const searchImages = () => {
axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&c
lient_id=jDCHhDy6bnOhc6p0PbL8a2fCkKWQ6mLW3HdtMF_t-eI&per_page=20`)

.then((response) => {
// console.log(response)
console.log(response.data)
setResult(response.data.results);
})
}
const img1 = {
width:"300px",
height:"300px"
}
return (
<>
<div className="container gy-2">
<div className="mb-3 gy-2 text-center my-5">

<input type="text" className="form-control"

placeholder="Search Images"

value={photo} onChange={(e) => setPhoto(e.target.value)}

/>

<button onClick={searchImages} className="btn btn-primary my-
2">Search</button>

</div>
</div>

{/* Fetching image */}
<div className="container text-center my-5 ">
<div className="row ">
{
result.map((actualData) => {
return (
<div className="col-md-3 my-3" key={actualData.id} >
<img className="border border-primary" style={img1}
src={actualData.urls.regular} alt="images"/>
</div>
)
})
}
</div>
</div>

</>
);
}
export default GetImage;