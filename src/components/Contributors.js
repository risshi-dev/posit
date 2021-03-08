import React from 'react'
import '../css/Contri.css'
function Contributors({contri}) {
    return (
					<div>
						{contri.map((item, i) => (
							<img className='profile' key ={i} src={item.profile_image.small} alt={item.name} />
						))}
					</div>
				);
}

export default Contributors
