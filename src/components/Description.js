import React from 'react'
import { useSelector } from 'react-redux';
import '../css/Description.css'
import Contributors from './Contributors'


function Description() {

  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
 
    
    return (
					<div>
						<div className="descriptionContainer">
							<div className="generalInfo">
								<h1>{data.title}</h1>
								<div>{data.description}</div>
								<h5 style={{margin:'30px 0px'}}>Supported By</h5>
								<h6>Original by design</h6>
							</div>
							<div>
								<div className="extraInfo">
									<div className="separate">
										Status{" "}
										<div id="greenBox">
											{" "}
											<div id="darkbox"></div> {data.status}
										</div>
									</div>
									<div className="separate">
										Curator <div></div>
									</div>
									<div className="separate">
										Contributions <div>{(data.total_photos / 1000).toFixed(1)}K</div>
									</div>
									<div className="separate">
										Top Contributors <div>{!loading && <Contributors contri={data.top_contributors} />}</div>
									</div>
								</div>
								<button className="photoSubmit">
									Submit to <span>Wallpapers</span>{" "}
								</button>
							</div>
						</div>
					</div>
				);
}

export default Description
