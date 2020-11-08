import React, { useState } from "react";
import "./table.css";

function Child({ id, value, data }) {
	console.log("child", id, value);
	const [filtered, setfiltered] = useState([]);
	const columns = [
		"Name",
		"ScreeName",
		"Followers",
		"Following",
		"Location",
		"Verified",
	];

	React.useEffect(() => {
		// eslint-disable-next-line array-callback-return
		let filteredData = data;
		switch (id) {
			case "name":
				filteredData = data.filter((user) => {
					return user.name.toLowerCase() === value?.toLowerCase();
				});
				break;
			case "sname":
				filteredData = data.filter((user) => {
					return user.same.toLowerCase() === value?.toLowerCase();
				});
				break;
			case "followers":
				filteredData = data.filter((user) => {
					return user.followers >= value;
				});
				break;
			case "following":
				filteredData = data.filter((user) => {
					return user.following >= value;
				});
				break;
			case "location":
				filteredData = data.filter((user) => {
					return user.location === value;
				});
				break;
			case "verified":
				filteredData = data.filter((user) => {
					if (value === "0") return user.verified === false;
					else return user.verified === true;
				});
				break;
			default:
				setfiltered(data);
		}
		setfiltered(filteredData);
	}, [data, id, value]);

	return (
		<div>
			<table>
				<thead>
					{columns.map((column) => (
						<th>{column}</th>
					))}
				</thead>

				<tbody>
					{!value ? (
						<h1>Please Enter a Value to Use Filter </h1>
					) : (
						filtered.map((user) => (
							<tr>
								<td>{user.name}</td>
								<td>{user.sname}</td>
								<td>{user.followers}</td>
								<td>{user.following}</td>
								<td>{user.location}</td>
								<td>{user.verified === true ? <p>True</p> : <p>False</p>}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

export default Child;
