import axios from 'axios'
export const fetchData =  () =>  async(dispatch)=>{

				const { data } = await axios.get(
					`https://api.unsplash.com/topics/wallpapers/?client_id=UDrcrbuqZ9sDPIQUora_28E-d8BhSKUP1HJRR8PlhQs`
				);

				dispatch({
					type: "FETCH",
					payload: data,
					loading: false
				});
}