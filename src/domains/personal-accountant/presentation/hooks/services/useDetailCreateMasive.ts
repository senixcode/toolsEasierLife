import { useMutation } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/detail.services"
import { useContext, useRef } from "react"
import DetailContext from "../../context/DetailContext"
import { TypeDetail } from "@/domains/personal-accountant/domain/clases/Details"

const useDetailCreateMasive = () => {
  const { refresh } = useContext(DetailContext)
  const inputFile = useRef<any>(null)
  const mutation = useMutation({
    mutationFn: (body: TypeDetail[]) => new DetailService().createdMassive(body),
    onSuccess: () => {
      refresh()
    },
  })

  function handleImportFile(e: any) {
    const getFile = e.target.files[0]
    const clearFile = () => e.target.value = ""
    if (!getFile) {
        clearFile()
        return;
    }

    new Response(getFile).json().then(json => {
        if(json) mutation.mutate(json as TypeDetail[])
        clearFile()
    }, err => {
        console.log("handleImportFile", err);
        clearFile()
    })



}


  return {handleImportFile, inputFile}
}
export default useDetailCreateMasive