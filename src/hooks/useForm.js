
import {useState} from 'react'

export const useForm = (initialForm, validateForm) => {
    const [form,setForm] = useState(initialForm)
    const [errors,setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response] = useState(null)

    const handleChange = (e)=>{
        const {name , value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleBlur = (e)=>{
        handleChange(e)
        setErrors(validateForm(form))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors(validateForm(form))
        if (Object.keys(errors).lenght === 0){
            alert("Enviando Formulario")
            setLoading(true) 
        } else {}
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}
