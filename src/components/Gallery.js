import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../css/Gallery.css'
function Gallery() {

   const [img, setimg] = useState({loading:true})
   const [Loading, setLoading] = useState(true)
   const [classn, setClass] = useState('');
  const photos = useSelector((state) => state);
  const {loading, data} = photos

    return (
					<div style={{ textAlign: "center" }}>
						<div className="photoGrid">
							{!loading &&
								data.preview_photos.map((item) => (
									<div
										key={item.id}
										onClick={(e) => {
											setimg(item);
											setClass("active");
											setLoading(false);
										}}
									>
										<img src={item.urls.small} className="images" alt='wallpaper' />
									</div>
								))}
						</div>

						<div
							className={classn}
							onClick={() => {
								setimg({});
								setClass("");
								setLoading(true);
							}}
						>
							{Loading ? <></> : <img className="active-image" src={img.urls.small} />}
						</div>
					</div>
				);
}

export default Gallery
