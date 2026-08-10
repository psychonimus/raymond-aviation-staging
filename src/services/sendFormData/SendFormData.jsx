import api from "../../http-common";

export const SendFormData = async (dataObj) => {
    try{
        const { data } = await api.post("/api/Email/sendEmail", dataObj);
    // console.log("login api hit", data)   
    return data;
    }
    
    catch (error){
       throw error;
    }
};

