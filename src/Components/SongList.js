import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const Songlist = () => {
	const [songs, setSongs] = useState([
		{ id: uuid(), title: "Highway To Hell" },
		{ id: uuid(), title: "Back In Black" },
		{ id: uuid(), title: "Shook Me All Night Long" }
	]);
	const [age, setAge] = useState(20);

	const addSong = song => {
		setSongs([...songs, { id: uuid(), title: song }]);
	};
	useEffect(() => {
		console.log("Use Effect hook ran", songs);
	}, [songs]);
	return (
		<div className="song-list">
			<ul>
				{songs.map(song => {
					return <li key={song.id}>{song.title}</li>;
				})}
			</ul>

			<NewSongForm addSong={addSong} />
			<button onClick={() => setAge(age + 1)}>Add 1 to age:{age}</button>
		</div>
	);
};

export default Songlist;
