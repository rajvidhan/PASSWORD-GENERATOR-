import { useState } from "react";


const Usepswgen = () => {
    const [password, setpassword] = useState("");
    const [errormessage, seterror] = useState("");

    const generatepassword = (checkboxdata, length) => {
        let charset = "",
        finalpassword = "";
        const selectedoptions = checkboxdata.filter((checkbox) => checkbox.state);

        if(selectedoptions.length==0){
            seterror("Select at least one option.");
            setpassword("");
            return;
        }



        selectedoptions.forEach((option) => {
            switch (option.title) {
                case "For UpperCase":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "For LowerCase":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "For Numbes":
                    charset += "0123456789";
                    break;
                case "For symbols":
                    charset += "!@#$%^&*()";
                    break;
                default :
                break;

            }
        });



       for(let i=0;i<length;i++){
        
                const randomindex = Math.floor(Math.random()*charset.length);
        finalpassword += charset[randomindex];
       }

   seterror("");
   setpassword(finalpassword);


    };

    return { password, errormessage, generatepassword };

};
export default Usepswgen;