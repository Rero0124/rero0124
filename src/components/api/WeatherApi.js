import axios from "axios";

const WeatherApi = (props) => {
	const apiCall = () => {
		const date =
			new Date().getFullYear() +
			"" +
			(new Date().getMonth() + 1 < 10
				? 0 + "" + new Date().getMonth() + 1
				: new Date().getMonth() + 1) +
			"" +
			(new Date().getDate() - 1 < 10
				? 0 + "" + new Date().getDate() - 1
				: new Date().getDate() - 1);
		axios.create({
			baseURL: `http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?serviceKey=wiQ9Yjtcj4RAgcCU9DB4XMrZy0QH5GOA%2FPcrUI4gdWRi2r0QhuNWJO2jBjpi1MjovFA9WauWQQDjvZkl7DfldQ%3D%3D&pageNo=1&numOfRows=1&dataType=XML&dataCd=ASOS&dateCd=DAY&startDt=${date}&endDt=${date}&stnIds=108`,
			headers: {
				"Content-Type": "application/xml",
			},
		});
		const getValue = () =>
			new Promise((resolve, reject) => {
				const value = axios.get(
					`http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?serviceKey=wiQ9Yjtcj4RAgcCU9DB4XMrZy0QH5GOA%2FPcrUI4gdWRi2r0QhuNWJO2jBjpi1MjovFA9WauWQQDjvZkl7DfldQ%3D%3D&pageNo=1&numOfRows=1&dataType=XML&dataCd=ASOS&dateCd=DAY&startDt=${date}&endDt=${date}&stnIds=108`
				);
				resolve(console.log(value));
			});
		getValue();
	};

	props.getValue(apiCall());
	return <div>success</div>;
};

export default WeatherApi;
