import axios, { CancelTokenSource } from "axios";

export const getRequestAPI = async(url:string,cancelToken: CancelTokenSource) => {
  try {
    const response = await axios.get(url, {cancelToken: cancelToken.token})
    return response.data
  } catch (error) {
    if(axios.isCancel(error))
      return console.error('Request canceled');

    console.error(error);
  }
}