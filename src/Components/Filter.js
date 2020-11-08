import React from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import Child from "./Child";

class Filter extends React.Component {
	state = {
		id: "",
		value: null,
		data: MOCK_DATA,
	};

	handleChangeValue = (event) => {
		this.setState({ value: event.target.value });
	};
	handleChangeId = (e) => {
		this.setState({ id: e.target.value });
	};

	render() {
		return (
			<div>
				<span>
					<select name="filters" id="id" onChange={this.handleChangeId}>
						<option>Filter Data</option>
						<option value="name">Name</option>
						<option value="sname">Screen Name</option>
						<option value="location">Location</option>
						<option value="followers">Followers</option>
						<option value="following">Following</option>
						<option value="verified">Varified</option>
					</select>
				</span>

				<span>
					<input
						value={this.state.value}
						placeholder={this.state.id}
						onChange={this.handleChangeValue}
					/>
				</span>
				{console.log(this.state.id, this.state.value)}

				<Child id={this.state.id} value={this.state.value} data={MOCK_DATA} />
			</div>
		);
	}
}

export default Filter;
