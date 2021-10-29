import axios from "axios";

const WeatherApi = (props) => {
	const apiCall = () => {
		axios.get(
			`http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?serviceKey=wiQ9Yjtcj4RAgcCU9DB4XMrZy0QH5GOA%2FPcrUI4gdWRi2r0QhuNWJO2jBjpi1MjovFA9WauWQQDjvZkl7DfldQ%3D%3D&pageNo=1&numOfRows=1&dataType=XML&dataCd=ASOS&dateCd=DAY&startDt=${date}&endDt=${date}&stnIds=108`
		);
	}
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
	props.getValue(
		axios.options`	
	);
	return <div>success</div>;
};

export default WeatherApi;
