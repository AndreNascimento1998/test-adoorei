
const useValidation = () => {
    const required = (value: any) => !!value || '*Campo obrigatório'
    const passMin = (value: any) => value.length > 5 || '*Maior que 5 dígitos'
    const passMinRegister = (value: any) => value.length > 7 || '*Mínimo 8 dígitos'
    const minLenght = (value: any) => value.length > 7 || '*Mínimo 8 dígitos'
    const phoneMin = (value: any) => value.length > 13 || '*Maior que 13 dígitos'
    const arrobaRequired = (value: any) => /@/.test(value) || '*@ obrigatório'


    return {
        required,
        passMin,
        minLenght,
        phoneMin,
        arrobaRequired,
        passMinRegister
    }
}

export default useValidation