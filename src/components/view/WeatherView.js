import Api from "../api/WeatherApi";

const WeatherView = () => {
	const getValue = (value) => {
		console.log(value);
	};
	return <Api getValue={getValue} />;
};

export default WeatherView;
