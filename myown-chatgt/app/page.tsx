import { BoltIcon } from '@heroicons/react/24/outline'
import {SunIcon} from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
export default function Home() {
  return (
    <div className= " flex flex-col items-center justify-center h-screen px-2  text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGpt</h1>
      <div className="flex space-x-3 text-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
        <SunIcon className="h-8 w-8"/>
        <h2>Example</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">What is the difference between a dog and a cat?</p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
        <BoltIcon className="h-8 w-8"/>
        <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">Messages are stored in Firebase's Firestore</p>
            <p className="infoText">Hot Toast notifications when ChatGpt is thinking!</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
        <ExclamationTriangleIcon className="h-8 w-8"/>
        <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmfull instructions or biased content</p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
