interface User {
  id: string;
  name: string;
  team: number;
  password: string;
  photo?: File;
}

const updateUser = async (userData: any): Promise<any> => {
  const forms = document.querySelector(".form-update-user") as HTMLFormElement;
  const formData = new FormData(forms);
 
  console.log(formData);  

  const url: string = process.env.REACT_APP_UPDATE as string;
  console.log(url);

  try{
    const response = await fetch(`${url}640ab68a27fea004b4b9ce05`,  {
      
      method: "PATCH",
      headers: { 
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IjY0MGFiNjhhMjdmZWEwMDRiNGI5Y2UwNSIsImlhdCI6MTY3OTMyMjY4NywiZXhwIjoxNjc5MzI2Mjg3fQ.rS4AUSUAIyQ-6oD7Y7ilgph7uUXkCpzBzv_8PsCdTjU"
      },
      body: formData,
                  
    });
  
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      
      throw new Error(data.message || "Something went wrong!");
    }
      return data;
    }
    
  catch (error) {
    console.log(error);
  }
}

export default  updateUser;

