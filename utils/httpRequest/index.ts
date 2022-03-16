import { AxiosInstance } from "axios";

export const httpRequest = async (http: AxiosInstance, data: string) => {
    const response = await http.post("", data);
  
    let parser = new DOMParser();
    let doc = parser.parseFromString(response.data, "text/html");
  
    let csv = doc.body
      .getElementsByClassName("botao_opcao")[0]
      .children[0].attributes.getNamedItem("href").value;
  
    return csv;
  };