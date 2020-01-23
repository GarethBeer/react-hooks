import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
	const [song, setSong] = useState("");
	const handleSubmit = event => {
		event.preventDefault();
		addSong(song);
		setSong("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>Song name: </label>
			<input
				type="text"
				value={song}
				onChange={event => setSong(event.target.value)}
				required
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default NewSongForm;
