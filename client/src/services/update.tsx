interface User {
    id: string;
    name: string;
    team: number;
    password: string;
    photo?: File;
}

const updateUser = async (userData: User): Promise<any> => {
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("team", userData.team.toString());
    formData.append("password", userData.password);
    if (userData.photo) {
      formData.append("photo", userData.photo);
    }


    const url: string = process.env.REACT_APP_UPDATE as string;
    console.log(url);

    const response = await fetch(`${url}/${userData.id}`,  {
        
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
                    
    });
    
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return data;
  };


  export default  updateUser;













// export default async function updateService(userData: any) {
//     console.log(userData);
//     try {
//         const options = {
//             method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(userData),
//         };

//         const id = userData.id;       
    

//         const url: string = process.env.REACT_APP_UPDATE + id as string;
//         console.log(url);
//         const res = await fetch(url, options);

//         if (!res.ok) {
//             console.error("Erro ao fazer requisição", await res.json());
//             return { auth: false, isNoAuth: true, status: res.status };
//         }

//         const data = await res.json();
//         console.log(data);

//         return { auth: true, status: res.status, data: data };
//     } catch (err) {
//         /// Lembrar de fazer alguma pagina de erro
//         alert(
//             "Houve um erro ao atualizar. Por favor tente novamente!"
//         );
//         console.error(err);
//     }
// }
