
export default function Validation(values) {
    const errors = {}
    const email_pattern = /^[^\s@]+@[^s@]+\.[^\s@]{2,6}$/;
    const name_pattern = /\b([A-ZÀ-ÿ][-,a-z.']+[ ]*)+/gm;

    if(values.user_name === ""){
        errors.user_name = 'Name is Required'
    }

    if(!name_pattern.test(values.user_name)){
        errors.user_name = 'Name is no correct'

    }

    if(values.user_email=== ""){
        errors.user_email = 'E-mail is Required'

    }

    if(values.user_message=== ""){
        errors.user_message = 'Message is Required'

    }
   

    if(!email_pattern.test(values.user_email))
    {
        errors.user_email = 'Email is not correct'
    }

    if(!email_pattern.test(values.user_email) && values.user_message !== "" && values.user_email !== "" && name_pattern.test(values.user_name) && values.user_name === ""){
        values.bool = false
    }

    return errors
}
