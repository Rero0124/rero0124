import { useState, useEffect } from "react";
import axios from "axios";

const CovidApi = (props) => {
	const [value, setValue] = useState(getValue);
	const getValue = () => {
		return axios.get(
			"http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey=wiQ9Yjtcj4RAgcCU9DB4XMrZy0QH5GOA%2FPcrUI4gdWRi2r0QhuNWJO2jBjpi1MjovFA9WauWQQDjvZkl7DfldQ%3D%3D&pageNo=1&numOfRows=10&dataType=XML&dataCd=ASOS&dateCd=HR&startDt=20100101&startHh=01&endDt=20100601&endHh=01&stnIds=108"
		);
	};
};

export default CovidApi;
