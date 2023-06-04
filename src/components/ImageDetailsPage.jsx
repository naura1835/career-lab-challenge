import './ImageDetails.css';

export function ImageDetails({ selectedArtwork, setArtWorkSelected }) {
	const { artist_title, image_id, title, thumbnail } = selectedArtwork;
	console.log(selectedArtwork);

	function returnToPreviousPage() {
		setArtWorkSelected({});
	}
	return (
		<article className="image-details">
			<div>
				<h1 className="image-details__title">
					{title} <span>by {artist_title}</span>
				</h1>
				<button
					className="image-details__back-btn"
					onClick={returnToPreviousPage}
				>
					Back
				</button>
			</div>
			<img
				alt={thumbnail.alt_text}
				className="image-details__img"
				src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
			/>
		</article>
	);
}
