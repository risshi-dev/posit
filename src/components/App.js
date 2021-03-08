
import Description from './Description';
import { useEffect, } from 'react';
import '../App.css';
import Gallery from './Gallery';
import Header from './Header';
import { useDispatch } from 'react-redux';
import {fetchData} from '../FetchAction';

function App() {

	const dispatch = useDispatch();

    useEffect(() => {

		dispatch(fetchData());

	}, [dispatch]);

  return (
			<div className="App">
			  <Header/>
			  <Description/>
			  <Gallery/>
			</div>
		);
}

export default App;
