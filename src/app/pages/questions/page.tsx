import Image from 'next/image';


export default async function Questions() {

  return (
    <div className="flex justify-center text-center grid grid-row-2">
      
        <p>Questions page</p>
      
      <div className="grid grid-cols-3 gap-4">
        <div className=" border-2 rounded-xl">Youtube block</div>
        <div className=" border-2 rounded-xl">Qestions block</div>
        <div className="scale-75">
          <Image src="/imageMan.webp" width={500} height={500} alt="Picture of the author"/>
        </div>
      </div>
    </div>
  )
}
