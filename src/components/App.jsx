import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

import './App.css';
import { ImageDetails } from './ImageDetailsPage';

export function App() {
	const [data, setData] = useState([]);
	const [artworkSelected, setArtWorkSelected] = useState({});

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			setData(json.data);
		});
	}

	function handleSelectedArtwork(item) {
		setArtWorkSelected(item);
	}

	return (
		<div className="App">
			{Object.keys(artworkSelected).length === 0 ? (
				<>
					<h1>TCL Career Lab Art Finder</h1>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{data.map((item, index) => (
							<li key={index}>
								<button
									className="artwork"
									onClick={() => handleSelectedArtwork(item)}
								>
									{item.title} by {item.artist_title}
								</button>
							</li>
						))}
					</ul>
					<Footer />
				</>
			) : (
				<>
					<ImageDetails
						selectedArtwork={artworkSelected}
						setArtWorkSelected={setArtWorkSelected}
					/>
				</>
			)}
		</div>
	);
}
