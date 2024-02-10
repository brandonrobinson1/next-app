'use client'
import React, {useState} from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {

    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')

    return (<>
      {publicId && <CldImage alt='building' src={publicId} width={270} height={180}/>}

        <CldUploadWidget uploadPreset="bss9xf21" options={{
            sources: ['local'], maxFiles: 5, 
            styles: {} 
        }} onUpload={(result, widget) => {
          
          
          if (result.event !== 'success') return
          const info = result.info as CloudinaryResult
          setPublicId(info.public_id)
      }}>
          {({open})=> <button onClick={()=>open()} className='btn btn-primary'>Upload</button>}
    </CldUploadWidget></>
  )
}

export default UploadPage
